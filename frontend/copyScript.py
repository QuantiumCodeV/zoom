import os
import re
import requests
from urllib.parse import urljoin, urlparse
import shutil
import random
import string

input_file = "index"


def remove_script_tags():
    html_content = get_actual_html()
    pattern = r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>'
    cleaned_html = re.sub(pattern, '', html_content,
                          flags=re.DOTALL | re.IGNORECASE)
    push_html(cleaned_html)
    print("=================================================")
    print("Теги <script> удалены.")
    print("=================================================")
    main_menu(input_file)


def remove_link_tags_except_stylesheet():
    html_content = get_actual_html()
    pattern = r'<link\b(?![^>]*\brel="stylesheet")[^>]*>'
    cleaned_html = re.sub(pattern, '', html_content,
                          flags=re.DOTALL | re.IGNORECASE)
    push_html(cleaned_html)
    print("=================================================")
    print("Теги <link>, кроме stylesheet, удалены.")
    print("=================================================")
    main_menu(input_file)


def remove_meta_tags_except_allowed():
    html_content = get_actual_html()
    allowed_meta = [
        {"http-equiv": "content-type", "content": "text/html; charset=utf-8"},
        {"charset": "utf-8"},
        {"name": "viewport", "content": "width=device-width, initial-scale=1"}
    ]

    pattern = r'<meta\s+[^>]*>'

    def replace_meta(match):
        meta_tag = match.group(0)
        for allowed in allowed_meta:
            if all(attr in meta_tag and value in meta_tag for attr, value in allowed.items()):
                return meta_tag
        return ''

    cleaned_html = re.sub(pattern, replace_meta,
                          html_content, flags=re.IGNORECASE)
    push_html(cleaned_html)
    print("=================================================")
    print("Мета-теги удалены, кроме разрешенных.")
    print("=================================================")
    main_menu(input_file)


def download_external_images():
    html_content = get_actual_html()
    pattern = r'<img[^>]+src=["\']((?:https?://|)[^"\']+)["\'][^>]*>'
    matches = re.findall(pattern, html_content, flags=re.IGNORECASE)

    if not os.path.exists('assets'):
        os.makedirs('assets')

    url_cache = {}

    for img_src in matches:
        try:
            if img_src.startswith(('http://', 'https://')):
                img_url = img_src
            else:
                local_path = os.path.join(os.path.dirname(
                    input_file + '.html'), img_src.lstrip('/'))
                if os.path.exists(local_path):
                    filename = os.path.join(
                        'assets', os.path.basename(img_src))
                    shutil.copy2(local_path, filename)
                    print(f"Скопировано изображение: {filename}")
                else:
                    if img_src in url_cache:
                        img_url = url_cache[img_src]
                    else:
                        img_url = input(
                            f"Файл {local_path} не найден. Введите URL для скачивания: ")
                        url_cache[img_src] = img_url

            if 'img_url' in locals():
                response = requests.get(img_url)
                if response.status_code == 200:
                    filename = os.path.join(
                        'assets', os.path.basename(urlparse(img_url).path))
                    with open(filename, 'wb') as f:
                        f.write(response.content)
                    print(f"Скачано изображение: {filename}")
                else:
                    print(
                        f"Не удалось скачать изображение: {img_url}. Статус код: {response.status_code}")

            if 'filename' in locals():
                relative_path = os.path.relpath(
                    filename, os.path.dirname(input_file + '.html'))
                html_content = html_content.replace(img_src, relative_path)
        except Exception as e:
            print(f"Ошибка при обработке {img_src}: {str(e)}")

    push_html(html_content)
    print("=================================================")
    print("Изображения обработаны и ссылки обновлены.")
    print("=================================================")
    main_menu(input_file)


def remove_unnecessary_tags():
    html_content = get_actual_html()

    html_content = re.sub(
        r'(srcset|data-src)=["\'][^"\']*["\']', '', html_content)
    html_content = re.sub(
        r'<img([^>]*)data-src=["\']([^"\']*)["\']([^>]*)>', r'<img\1src="\2"\3>', html_content)

    html_content = re.sub(
        r'\s(ng-[a-zA-Z-]+|v-[a-zA-Z-]+)=["\'][^"\']*["\']', '', html_content)

    html_content = re.sub(r'\s+[a-zA-Z-]+=["\']["\']', '', html_content)

    html_content = re.sub(r'<!--[\s\S]*?-->', '', html_content)

    push_html(html_content)
    print("=================================================")
    print("Ненужные теги и атрибуты удалены.")
    print("=================================================")
    main_menu(input_file)


def remove_unused_css():
    html_content = get_actual_html()

    # Получаем все CSS файлы
    css_files = re.findall(
        r'<link[^>]+href=["\']([^"\']+\.css)["\']', html_content)

    # Получаем содержимое всех CSS файлов и тегов style
    all_css = ""
    for css_file in css_files:
        if css_file.startswith(('http://', 'https://')):
            try:
                response = requests.get(css_file)
                if response.status_code == 200:
                    all_css += response.text
                    # Скачиваем файл и сохраняем локально
                    local_filename = os.path.join(
                        'assets', os.path.basename(urlparse(css_file).path))
                    with open(local_filename, 'w', encoding='utf-8') as f:
                        f.write(response.text)
                    # Обновляем ссылку в HTML
                    html_content = html_content.replace(css_file, os.path.relpath(
                        local_filename, os.path.dirname(input_file + '.html')))
                else:
                    print(
                        f"Не удалось скачать CSS файл: {css_file}. Статус код: {response.status_code}")
            except Exception as e:
                print(f"Ошибка при обработке {css_file}: {str(e)}")
        else:
            with open(css_file, 'r', encoding='utf-8') as f:
                all_css += f.read()

    style_tags = re.findall(
        r'<style[^>]*>(.*?)</style>', html_content, re.DOTALL)
    all_css += ' '.join(style_tags)

    # Находим все селекторы в CSS
    selectors = re.findall(r'([^\s\{\}][^\{\}]*?)\s*\{', all_css)

    # Удаляем неиспользуемые селекторы
    for selector in selectors:
        selector = selector.strip()
        # Пропускаем медиа-запросы и базовые селекторы
        if selector.startswith('@') or selector.lower() in ['html', 'body']:
            continue
        if not is_selector_used(selector, html_content):
            all_css = re.sub(
                rf'{re.escape(selector)}\s*\{{[^\}}]*\}}', '', all_css)

    # Обновляем CSS файлы
    for css_file in css_files:
        if not css_file.startswith(('http://', 'https://')):
            with open(css_file, 'w', encoding='utf-8') as f:
                f.write(all_css)
        else:
            local_filename = os.path.join(
                'assets', os.path.basename(urlparse(css_file).path))
            with open(local_filename, 'w', encoding='utf-8') as f:
                f.write(all_css)

    # Обновляем теги style в HTML
    for style_tag in style_tags:
        html_content = html_content.replace(style_tag, all_css)

    push_html(html_content)
    print("=================================================")
    print("Неиспользуемые CSS селекторы удалены.")
    print("=================================================")
    main_menu(input_file)


def is_selector_used(selector, html_content):
    # Простая проверка наличия селектора в HTML
    # Может потребоваться более сложная логика для сложных селекторов
    return selector in html_content


def remove_all_ids():
    html_content = get_actual_html()

    # Удаляем все атрибуты id из HTML
    html_content = re.sub(r'\s+id=["\'][^"\']*["\']', '', html_content)

    # Удаляем все селекторы id из CSS
    css_files = re.findall(
        r'<link[^>]+href=["\']([^"\']+\.css)["\']', html_content)
    all_css = ""

    for css_file in css_files:
        if not css_file.startswith(('http://', 'https://')):
            try:
                with open(css_file, 'r', encoding='utf-8') as f:
                    css_content = f.read()
                    # Удаляем все правила с селекторами id
                    css_content = re.sub(
                        r'#[^\s\{\}]+\s*\{[^\}]*\}', '', css_content)
                    all_css += css_content
            except Exception as e:
                print(f"Ошибка при обработке {css_file}: {str(e)}")
        else:
            print(f"Пропущен внешний CSS файл: {css_file}")

    # Обновляем CSS файлы
    for css_file in css_files:
        if not css_file.startswith(('http://', 'https://')):
            with open(css_file, 'w', encoding='utf-8') as f:
                f.write(all_css)

    # Обновляем теги style в HTML
    style_tags = re.findall(
        r'<style[^>]*>(.*?)</style>', html_content, re.DOTALL)
    for style_tag in style_tags:
        # Удаляем все правила с селекторами id из встроенных стилей
        updated_style = re.sub(r'#[^\s\{\}]+\s*\{[^\}]*\}', '', style_tag)
        html_content = html_content.replace(style_tag, updated_style)

    push_html(html_content)
    print("=================================================")
    print("Все ID удалены из HTML и CSS.")
    print("=================================================")
    main_menu(input_file)


def randomize_selectors():
    html_content = get_actual_html()
    css_files = re.findall(
        r'<link[^>]+href=["\']([^"\']+\.css)["\']', html_content)
    all_css = ""
    selector_map = {}

    def generate_random_selector():
        return ''.join(random.choices(string.ascii_lowercase, k=5))

    def replace_selector(match):
        selector = match.group(1)
        if selector not in selector_map:
            if len(selector) <= 10:  # Только для небольших селекторов
                selector_map[selector] = generate_random_selector()
        return selector_map.get(selector, selector)

    # Обрабатываем CSS файлы
    for css_file in css_files:
        if not css_file.startswith(('http://', 'https://')):
            try:
                with open(css_file, 'r', encoding='utf-8') as f:
                    css_content = f.read()
                    # Заменяем селекторы на случайные
                    css_content = re.sub(
                        r'([.#][^\s\{\}]+)', replace_selector, css_content)
                    all_css += css_content
            except Exception as e:
                print(f"Ошибка при обработке {css_file}: {str(e)}")
        else:
            print(f"Пропущен внешний CSS файл: {css_file}")

    # Обновляем CSS файлы
    for css_file in css_files:
        if not css_file.startswith(('http://', 'https://')):
            with open(css_file, 'w', encoding='utf-8') as f:
                f.write(all_css)

    # Обновляем теги style в HTML
    style_tags = re.findall(
        r'<style[^>]*>(.*?)</style>', html_content, re.DOTALL)
    for style_tag in style_tags:
        updated_style = re.sub(
            r'([.#][^\s\{\}]+)', replace_selector, style_tag)
        html_content = html_content.replace(style_tag, updated_style)

    # Заменяем классы и id в HTML
    for old_selector, new_selector in selector_map.items():
        if old_selector.startswith('.'):
            html_content = re.sub(f'class=["\']([^"\']*\\b{old_selector[1:]}\\b[^"\']*)["\']',
                                  lambda m: f'class="{m.group(1).replace(old_selector[1:], new_selector)}"',
                                  html_content)
        elif old_selector.startswith('#'):
            html_content = re.sub(f'id=["\']({old_selector[1:]})["\']',
                                  f'id="{new_selector}"',
                                  html_content)

    push_html(html_content)
    print("=================================================")
    print("Селекторы успешно рандомизированы.")
    print("=================================================")
    main_menu(input_file)

def add_class_to_elements():
    print("=================================================")
    new_class = input("Введите класс, который нужно добавить: ")
    html_content = get_actual_html()

    # Добавляем класс к input, button и a элементам
    html_content = re.sub(r'(<(input|button|a)([^>]*)>)',
                          lambda m: m.group(1).replace('>', f' class="{new_class}">', 1) if 'class=' not in m.group(3) else m.group(1).replace('class="', f'class="{new_class} ', 1),
                          html_content)

    push_html(html_content)
    print("=================================================")
    print(f"Класс '{new_class}' успешно добавлен к элементам input, button и a.")
    print("=================================================")
    main_menu(input_file)

def remove_unnecessary_files():
    import os
    import re

    print("=================================================")
    print("Удаление ненужных файлов...")

    current_dir = os.getcwd()
    removed_files = 0

    for filename in os.listdir(current_dir):
        file_path = os.path.join(current_dir, filename)
        
        # Удаляем скрипты (файлы с расширением .js)
        if filename.endswith('.js'):
            os.remove(file_path)
            removed_files += 1
            print(f"Удален скрипт: {filename}")
        
        # Удаляем файлы без расширения или с неправильным расширением
        elif '.' not in filename or not re.match(r'.*\.[a-zA-Z0-9]+', filename):
            if os.path.isfile(file_path):  # Проверяем, что это файл, а не папка
                os.remove(file_path)
                removed_files += 1
                print(f"Удален файл без расширения или с неправильным расширением: {filename}")
        
        # Удаляем JSON файлы
        elif filename.endswith('.json'):
            os.remove(file_path)
            removed_files += 1
            print(f"Удален JSON файл: {filename}")

    print("=================================================")
    print(f"Всего удалено файлов: {removed_files}")
    print("=================================================")
    main_menu(input_file)
def get_actual_html():
    with open(input_file + '.html', 'r', encoding='utf-8') as file:
        html_content = file.read()
    return html_content


def push_html(html_content):
    with open(input_file + '.html', 'w', encoding='utf-8') as file:
        file.write(html_content)


def main_menu(file):
        print("\n╔══════════════════════════════════════════════╗")
        print("║  Софт мега для копирки                         ║")
        print("╠════════════════════════════════════════════════╣")
        print("║                                                ║")
        print("║  1. Удалить теги <script>                      ║")
        print("║  2. Удалить теги <link> (кроме stylesheet)     ║")
        print("║  3. Удалить теги <meta>                        ║")
        print("║  4. Выкачать все изображения                   ║")
        print("║  5. Удалить ненужные теги                      ║")
        print("║  6. Удалить неиспользуемые CSS селекторы       ║")
        print("║  7. Рандомизировать селекторы                  ║")
        print("║  8. Удалить id                                 ║")
        print("║  9. Добавить класс к элементам                 ║")
        print(f"║  10. Установить файл для работы. ({file}.html) ║")
        print("║  11. Удалить ненужные файлы                    ║")
        print("║  12. Выйти                                     ║")
        print("║                                                ║")
        print("╚══════════════════════════════════════════════╝\n")

        choices = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        choice = ''
        while choice not in choices:
            print("=================================================")
            choice = input("Выберите действие (1-12): ")
            if choice not in choices:
                print("=================================================")
                print("Неверный выбор. Пожалуйста, попробуйте еще раз.")
                print("=================================================")
        return choice

def exit_program():
        print("\nСпасибо за использование программы. До свидания!")
        exit()

def process_choice(choice):
        if choice == '1':
            remove_script_tags()
        elif choice == '2':
            remove_link_tags_except_stylesheet()
        elif choice == '3':
            remove_meta_tags_except_allowed()
        elif choice == '4':
            download_external_images()
        elif choice == '5':
            remove_unnecessary_tags()
        elif choice == '6':
            remove_unused_css()
        elif choice == '7':
            randomize_selectors()
        elif choice == '8':
            remove_all_ids()
        elif choice == '9':
            add_class_to_elements()
        elif choice == '10':
            set_file_for_work()
        elif choice == '11':
            remove_unnecessary_files()
        elif choice == '12':
            exit_program()
            
def set_file_for_work():
    global input_file
    input_file = input("Введите имя файла для обработки (без расширения): ")
    print("=================================================")
    print(f"Файл для работы: {input_file}.html")
    print("=================================================")
    input("Нажмите Enter для продолжения...")
    print("=================================================")
    main_menu(input_file)


if __name__ == "__main__":
    while True:
        user_choice = main_menu(input_file)
        process_choice(user_choice)
