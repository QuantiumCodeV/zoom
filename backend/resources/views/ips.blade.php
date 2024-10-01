<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required Meta Tags Always Come First -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Title -->
    <title>Banned IP</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="./favicon.ico" />

    <!-- Font -->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet"
    />

    <!-- CSS Implementing Plugins -->
    <link
      rel="stylesheet"
      href="{{  asset("assets/vendor/bootstrap-icons/font/bootstrap-icons.css") }}"
    />

    <link
      rel="stylesheet"
      href="{{  asset("assets/vendor/tom-select/dist/css/tom-select.bootstrap5.css") }}"
    />

    <!-- CSS Front Template -->

    <link
      rel="preload"
      href="{{  asset("assets/css/theme.min.css") }}"
      data-hs-appearance="default"
      as="style"
    />
    <link
      rel="preload"
      href="{{  asset("assets/css/theme-dark.min.css") }}"
      data-hs-appearance="dark"
      as="style"
    />

    <style data-hs-appearance-onload-styles>
      * {
        transition: unset !important;
      }

      body {
        opacity: 0;
      }
    </style>

    <script>
      window.hs_config = {
        autopath: "@@autopath",
        deleteLine: "hs-builder:delete",
        "deleteLine:build": "hs-builder:build-delete",
        "deleteLine:dist": "hs-builder:dist-delete",
        previewMode: false,
        startPath: "{{ route("index") }}",
        vars: {
          themeFont:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
          version: "?v=1.0",
        },
        layoutBuilder: {
          extend: { switcherSupport: true },
          header: { layoutMode: "default", containerMode: "container-fluid" },
          sidebarLayout: "default",
        },
        themeAppearance: {
          layoutSkin: "default",
          sidebarSkin: "default",
          styles: {
            colors: {
              primary: "#377dff",
              transparent: "transparent",
              white: "#fff",
              dark: "132144",
              gray: { 100: "#f9fafc", 900: "#1e2022" },
            },
            font: "Inter",
          },
        },
        languageDirection: { lang: "en" },
        skipFilesFromBundle: {
          dist: [
            "{{  asset("assets/js/hs.theme-appearance.js") }}",
            "{{  asset("assets/js/hs.theme-appearance-charts.js") }}",
            "{{  asset("assets/js/demo.js") }}",
          ],
          build: [
            "{{  asset("assets/css/theme.css") }}",
            "{{  asset("assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside-mini-cache.js") }}",
            "{{  asset("assets/js/demo.js") }}",
            "{{  asset("assets/css/theme-dark.css") }}",
            "{{  asset("assets/css/docs.css") }}",
            "{{  asset("assets/vendor/icon-set/style.css") }}",
            "{{  asset("assets/js/hs.theme-appearance.js") }}",
            "{{  asset("assets/js/hs.theme-appearance-charts.js") }}",
            "node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.min.js",
            "{{  asset("assets/js/demo.js") }}",
          ],
        },
        minifyCSSFiles: ["{{  asset("assets/css/theme.css") }}", "{{  asset("assets/css/theme-dark.css") }}"],
        copyDependencies: {
          dist: { "*{{  asset("assets/js/theme-custom.js") }}": "" },
          build: {
            "{{  asset("assets/js/theme-custom.js") }}": "",
            "node_modules/bootstrap-icons/font/*fonts/**": "{{  asset("assets/css") }}",
          },
        },
        buildFolder: "",
        replacePathsToCDN: {},
        directoryNames: { src: "./src", dist: "./dist", build: "./build" },
        fileNames: {
          dist: { js: "theme.min.js", css: "theme.min.css" },
          build: {
            css: "theme.min.css",
            js: "theme.min.js",
            vendorCSS: "vendor.min.css",
            vendorJS: "vendor.min.js",
          },
        },
        fileTypes: "jpg|png|svg|mp4|webm|ogv|json",
      };
      window.hs_config.gulpRGBA = (p1) => {
        const options = p1.split(",");
        const hex = options[0].toString();
        const transparent = options[1].toString();

        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
          c = hex.substring(1).split("");
          if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c = "0x" + c.join("");
          return (
            "rgba(" +
            [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
            "," +
            transparent +
            ")"
          );
        }
        throw new Error("Bad Hex");
      };
      window.hs_config.gulpDarken = (p1) => {
        const options = p1.split(",");

        let col = options[0].toString();
        let amt = -parseInt(options[1]);
        var usePound = false;

        if (col[0] == "#") {
          col = col.slice(1);
          usePound = true;
        }
        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255) {
          r = 255;
        } else if (r < 0) {
          r = 0;
        }
        var b = ((num >> 8) & 0x00ff) + amt;
        if (b > 255) {
          b = 255;
        } else if (b < 0) {
          b = 0;
        }
        var g = (num & 0x0000ff) + amt;
        if (g > 255) {
          g = 255;
        } else if (g < 0) {
          g = 0;
        }
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
      };
      window.hs_config.gulpLighten = (p1) => {
        const options = p1.split(",");

        let col = options[0].toString();
        let amt = parseInt(options[1]);
        var usePound = false;

        if (col[0] == "#") {
          col = col.slice(1);
          usePound = true;
        }
        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255) {
          r = 255;
        } else if (r < 0) {
          r = 0;
        }
        var b = ((num >> 8) & 0x00ff) + amt;
        if (b > 255) {
          b = 255;
        } else if (b < 0) {
          b = 0;
        }
        var g = (num & 0x0000ff) + amt;
        if (g > 255) {
          g = 255;
        } else if (g < 0) {
          g = 0;
        }
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
      };
    </script>
  </head>

  <body
    class="has-navbar-vertical-aside navbar-vertical-aside-show-xl footer-offset"
  >
    <script src="{{  asset("assets/js/hs.theme-appearance.js") }}"></script>

    <script src="{{  asset("assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside-mini-cache.js") }}"></script>

    <!-- ========== HEADER ========== -->

    <header
      id="header"
      class="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white"
    >
      <div class="navbar-nav-wrap">
        <!-- Logo -->
        <a class="navbar-brand" href="{{ route("index") }}" aria-label="Front">
          <img
            class="navbar-brand-logo"
            src="{{  asset("assets/svg/logos/logo.svg") }}") }}"
            alt="Logo"
            data-hs-theme-appearance="default"
          />
          <img
            class="navbar-brand-logo"
            src="{{  asset("assets/svg/logos-light/logo.svg") }}") }}"
            alt="Logo"
            data-hs-theme-appearance="dark"
          />
          <img
            class="navbar-brand-logo-mini"
            src="{{  asset("assets/svg/logos/logo-short.svg") }}") }}"
            alt="Logo"
            data-hs-theme-appearance="default"
          />
          <img
            class="navbar-brand-logo-mini"
            src="{{  asset("assets/svg/logos-light/logo-short.svg") }}") }}"
            alt="Logo"
            data-hs-theme-appearance="dark"
          />
        </a>
        <!-- End Logo -->

        <div class="navbar-nav-wrap-content-start">
          <!-- Navbar Vertical Toggle -->
          <button
            type="button"
            class="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler"
          >
            <i
              class="bi-arrow-bar-left navbar-toggler-short-align"
              data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Collapse"
            ></i>
            <i
              class="bi-arrow-bar-right navbar-toggler-full-align"
              data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Expand"
            ></i>
          </button>

          <!-- End Navbar Vertical Toggle -->

        </div>

        <div class="navbar-nav-wrap-content-end">
          <!-- Navbar -->
          <ul class="navbar-nav">
            

            <li class="nav-item">
              <!-- Account -->
              <div class="dropdown">
              <a
                  class="navbar-dropdown-account-wrapper"
                  href="javascript:;"
                  id="accountNavbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-dropdown-animation
                >
                  {{ $activeUser->name }}
                </a>

                <div
                  class="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account"
                  aria-labelledby="accountNavbarDropdown"
                  style="width: 16rem"
                >
                  <div class="dropdown-item-text">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 ms-3">
                        <h5 class="mb-0">{{ $activeUser->name }}</h5>
                       
                      </div>
                    </div>
                  </div>

                  <div class="dropdown-divider"></div>

                  

                  <a class="dropdown-item" href="{{ route("user.logout")}}">Выйти</a>
                </div>
              </div>
              <!-- End Account -->
            </li>
          </ul>
          <!-- End Navbar -->
        </div>
      </div>
    </header>

    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->
    <!-- Navbar Vertical -->

    <aside
      class="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white"
    >
      <div class="navbar-vertical-container">
        <div class="navbar-vertical-footer-offset">
          <!-- Logo -->

          <a class="navbar-brand" href="{{ route("index") }}" aria-label="Front">
            <img
              class="navbar-brand-logo"
              src="{{  asset("assets/svg/logos/logo.svg") }}"
              alt="Logo"
              data-hs-theme-appearance="default"
            />
            <img
              class="navbar-brand-logo"
              src="{{  asset("assets/svg/logos-light/logo.svg") }}"
              alt="Logo"
              data-hs-theme-appearance="dark"
            />
            <img
              class="navbar-brand-logo-mini"
              src="{{  asset("assets/svg/logos/logo-short.svg") }}"
              alt="Logo"
              data-hs-theme-appearance="default"
            />
            <img
              class="navbar-brand-logo-mini"
              src="{{  asset("assets/svg/logos-light/logo-short.svg") }}"
              alt="Logo"
              data-hs-theme-appearance="dark"
            />
          </a>

          <!-- End Logo -->

          <!-- Navbar Vertical Toggle -->
          <button
            type="button"
            class="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler"
          >
            <i
              class="bi-arrow-bar-left navbar-toggler-short-align"
              data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Collapse"
            ></i>
            <i
              class="bi-arrow-bar-right navbar-toggler-full-align"
              data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Expand"
            ></i>
          </button>

          <!-- End Navbar Vertical Toggle -->

          <!-- Content -->
          <div class="navbar-vertical-content">
            <div
              id="navbarVerticalMenu"
              class="nav nav-pills nav-vertical card-navbar-nav"
            >
              <!-- Collapse -->
            
              <!-- End Collapse -->

              <span class="dropdown-header mt-4">Страницы</span>
              <small class="bi-three-dots nav-subtitle-replacer"></small>

              <!-- Collapse -->
              <div class="navbar-nav nav-compact"></div>
              <div id="navbarVerticalMenuPagesMenu">
                <!-- Collapse -->
                
                <div class="nav-item">
                  <a
                    class="nav-link"
                    role="button"
                    href="{{ route("users") }}"
                    aria-expanded="true"
                    aria-controls="navbarVerticalMenuPagesUsersMenu"
                  >
                    <i class="bi-people nav-icon"></i>
                    <span class="nav-link-title">Пользователи</span>
                  </a>

                </div>
                <!-- End Collapse -->

                <!-- Collapse -->
                <div class="nav-item">
                  <a
                    class="nav-link "
                  
                    role="button"
                    href="{{ route("requests") }}"
                    aria-expanded="false"
                    aria-controls="navbarVerticalMenuPagesUserProfileMenu"
                  >
                    <i class="bi-person nav-icon"></i>
                    <span class="nav-link-title"
                      >Заявки
                      @if($requests > 0)
    <span class="badge bg-primary rounded-pill ms-1">{{ $requests }}</span>
@endif</span
                    >
                  </a>

            
                </div>
                <div class="nav-item">
                  <a
                    class="nav-link active"
                  
                    role="button"
                    href="{{ route("bannedIp") }}"
                    aria-expanded="false"
                    aria-controls="navbarVerticalMenuPagesUserProfileMenu"
                  >
                    <i class="bi-person nav-icon"></i>
                    <span class="nav-link-title"
                      >Забаненные IP
                     </span
                    >
                  </a>

            
                </div>
                <div class="nav-item">
                  <a
                    class="nav-link"
                    role="button"
                    href="{{ route("settings") }}"
                    aria-expanded="true"
                    aria-controls="navbarVerticalMenuPagesUsersMenu"
                  >
                    <i class="bi-shield-lock nav-icon"></i>
                    <span class="nav-link-title">Настройки</span>
                  </a>

                </div>
                <div class="nav-item">
                  <a
                  class="nav-link"
                  
                  role="button"
                  href="{{ route("codes") }}"
                  aria-expanded="false"
                  aria-controls="navbarVerticalMenuPagesUserProfileMenu"
                  >
                    <i class="bi-key nav-icon"></i>
                    <span class="nav-link-title">Коды</span>
                  </a>
                </div>

              </div>
              <!-- End Collapse -->

            </div>
          </div>
          <!-- End Content -->

          <!-- Footer -->
          <div class="navbar-vertical-footer" style="display:flex">
            <ul class="navbar-vertical-footer-list">
              <li class="navbar-vertical-footer-list-item">
                <!-- Style Switcher -->
                <div class="dropdown dropup">
                  <button
                    type="button"
                    class="btn btn-ghost-secondary btn-icon rounded-circle"
                    id="selectThemeDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-dropdown-animation
                  ></button>

                  <div
                    class="dropdown-menu navbar-dropdown-menu navbar-dropdown-menu-borderless"
                    aria-labelledby="selectThemeDropdown"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      data-icon="bi-moon-stars"
                      data-value="auto"
                    >
                      <i class="bi-moon-stars me-2"></i>
                      <span class="text-truncate" title="Auto (system default)"
                        >Auto (system default)</span
                      >
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-icon="bi-brightness-high"
                      data-value="default"
                    >
                      <i class="bi-brightness-high me-2"></i>
                      <span class="text-truncate" title="Default (light mode)"
                        >Default (light mode)</span
                      >
                    </a>
                    <a
                      class="dropdown-item active"
                      href="#"
                      data-icon="bi-moon"
                      data-value="dark"
                    >
                      <i class="bi-moon me-2"></i>
                      <span class="text-truncate" title="Dark">Dark</span>
                    </a>
                  </div>
                </div>

                <!-- End Style Switcher -->
              </li>

            </ul>
            <div class="link_block_custom">
              <a href="https://quantiumcode.online/s85691340970pwd=S2JuYJE9shSun4dnLXF77pcRxSfw11">ZOOM</a> 
            </div>
          </div>
          <!-- End Footer -->
        </div>
      </div>
    </aside>

    <main id="content" role="main" class="main">
      <!-- Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row align-items-end">
            <div class="col-sm mb-2 mb-sm-0">
              

              <h1 class="page-header-title">Заблокированные IP</h1>
            </div>
            <!-- End Col -->
            <div class="col-sm-auto">
            
          </div>
           
          </div>
          <!-- End Row -->
        </div>
        <!-- End Page Header -->

       

        <!-- Card -->
        <div class="card">
          <!-- Header -->
          
          <!-- End Header -->

          <!-- Table -->
          <div class="table-responsive datatable-custom position-relative">
            <table
              id="datatable"
              class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
              data-hs-datatables-options='{
                   "columnDefs": [{
                      "targets": [0, 7],
                      "orderable": false
                    }],
                   "order": [],
                   "info": {
                     "totalQty": "#datatableWithPaginationInfoTotalQty"
                   },
                   "search": "#datatableSearch",
                   "entries": "#datatableEntries",
                   "pageLength": 15,
                   "isResponsive": false,
                   "isShowPaging": false,
                   "pagination": "datatablePagination"
                 }'
            >
              <thead class="thead-light">
                <tr>
                  
                  <th >IP</th>
                  <th>Время и дата бана</th>
                   <th></th>
                </tr>
              </thead>

              <tbody>
              @foreach($bannedIps as $bannedIp)
                <tr>
                  
                  <td>
                    <a
                      class="d-flex align-items-center"
                     
                    >
                      <div class="">
                       
                      </div>
                      <div class="ms-3">
                        <span class="d-block h5 text-inherit mb-0"
                          >{{ $bannedIp->ip }}
                        </span>
                        
                      </div>
                    </a>
                  </td>
                  <td>
                    <a
                      class="d-flex align-items-center"
                      
                    >
                      <div class="">
                       
                      </div>
                      <div class="ms-3">
                        <span class="d-block h5 text-inherit mb-0"
                          >{{ $bannedIp->created_at }}
                        </span>
                        
                      </div>
                    </a>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm delete-id"
                      data-id="{{ $bannedIp->id }}"
                    >
                    Разблокировать
                    </button>
                  </td>
                </tr>
              @endforeach
              </tbody>
            </table>
            <script>
              document.querySelectorAll('.delete-id').forEach(function(item) {
                item.addEventListener('click', function() {
                  $.ajax({
                    url: "{{ route('ip.unlock') }}",
                    method: 'POST',
                    data: {
                      id: item.getAttribute('data-id'),
                      _token: '{{ csrf_token() }}'
                    },
                    success: function(data) {
                      console.log(data)
                      if(data.message) {
                        window.location.reload();
                      }
                    }
                  });
                });
              });
            </script>
          </div>
          <!-- End Table -->

          <!-- Footer -->
          
          <!-- End Footer -->
        </div>
        <!-- End Card -->
      </div>
      <!-- End Content -->

      <!-- Footer -->

     
      <!-- End Footer -->
    </main>
    <div class="modal fade" id="createAKIKeyModal" tabindex="-1" aria-labelledby="createAKIKeyModalLabel" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h4 class="modal-title" id="createAKIKeyModalLabel">Создать ключ</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- End Header -->

        <!-- Body -->
        <div class="modal-body">
          <!-- Form -->
          <form>
            <input type="text" class="form-control" placeholder="Ключ" id="code_input" name="code">
            <label for="code_input" class="invalid-feedback" id="text_input"></label>
            <div class="mb-3 mt-2 d-flex gap-1">
            <input type="radio" class="btn-check" value="macos" id="macos" name="platform" autocomplete="off">
<label class="btn btn-outline-warning w-50" for="macos" >Mac OS</label>
<input type="radio" class="btn-check" id="windows" value="windows" name="platform" autocomplete="off">
<label class="btn btn-outline-primary w-50" for="windows">Windows</label>

            </div>
            
          </form>
          <!-- End Form -->
        </div>
        <!-- End Body -->

        <!-- Footer -->
        <div class="modal-footer">
          <div class="row align-items-sm-center flex-grow-1 mx-n2">
            
            <div class="col-sm-auto">
              <div class="d-flex gap-3">
                <button type="button" class="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Отменить</button>
                <button type="button" class="btn btn-primary" id="createKey">Создать</button>
              </div>
            </div>
            <script>
              var code_input = document.getElementById('code_input');
              var text_input = document.getElementById('text_input');
              document.getElementById('createKey').addEventListener('click', function() {
                if(!document.querySelector('input[name="code"]').value) {
                  code_input.classList.add('is-invalid');
                  text_input.innerText = 'Поле не может быть пустым';
                  return;
                }
                $.ajax({
                  url: "{{ route('code.create') }}",
                  method: 'POST',
                  data: {
                    code: document.querySelector('input[name="code"]').value,
                    _token: '{{ csrf_token() }}',
                    platform: document.querySelector('input[name="platform"]:checked').value,
                    userId: '{{ Auth::user()->id }}'
                  },
                  success: function(data) {
                    console.log(data)
    if(data.message) {
        window.location.reload();
    } 
                  },
                  error: function(data) {
                    console.log(data)
                    if(data.status == 400) {
                      code_input.classList.add('is-invalid');
                      text_input.innerText = 'Такой код уже существует';
                    }

                  }
                });
              });
            </script>
            <!-- End Col -->
          </div>
          <!-- End Row -->
        </div>
        <!-- End Footer -->
      </div>
    </div>
  </div>
    <!-- End Welcome Message Modal -->

    
    <!-- ========== END SECONDARY CONTENTS ========== -->

    <!-- JS Global Compulsory  -->
    <script src="{{  asset("assets/vendor/jquery/dist/jquery.min.js") }}") }}"></script>
    <script src="{{  asset("assets/vendor/jquery-migrate/dist/jquery-migrate.min.js") }}") }}"></script>
    <script src="{{  asset("assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js") }}") }}"></script>

    <!-- JS Implementing Plugins -->
    <script src="{{  asset("assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside.min.js") }}") }}"></script>
    <script src="{{  asset("assets/vendor/hs-form-search/dist/hs-form-search.min.js") }}"></script>

    <script src="{{  asset("assets/vendor/hs-toggle-password/dist/js/hs-toggle-password.js") }}"></script>
    <script src="{{  asset("assets/vendor/hs-file-attach/dist/hs-file-attach.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/hs-nav-scroller/dist/hs-nav-scroller.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/hs-step-form/dist/hs-step-form.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/hs-counter/dist/hs-counter.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/appear/dist/appear.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/imask/dist/imask.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/tom-select/dist/js/tom-select.complete.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/datatables/media/js/jquery.dataTables.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/datatables.net.extensions/select/select.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/datatables.net-buttons/js/dataTables.buttons.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/datatables.net-buttons/js/buttons.flash.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/jszip/dist/jszip.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/pdfmake/build/pdfmake.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/pdfmake/build/vfs_fonts.js") }}"></script>
    <script src="{{  asset("assets/vendor/datatables.net-buttons/js/buttons.html5.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/datatables.net-buttons/js/buttons.print.min.js") }}"></script>
    <script src="{{  asset("assets/vendor/datatables.net-buttons/js/buttons.colVis.min.js") }}"></script>

    <!-- JS Front -->
    <script src="{{  asset("assets/js/theme.min.js") }}"></script>

    <!-- JS Plugins Init. -->
    <script>
      $(document).on("ready", function () {
        // INITIALIZATION OF DATATABLES
        // =======================================================
        HSCore.components.HSDatatables.init($("#datatable"), {
          dom: "Bfrtip",
          buttons: [
            {
              extend: "copy",
              className: "d-none",
            },
            {
              extend: "excel",
              className: "d-none",
            },
            {
              extend: "csv",
              className: "d-none",
            },
            {
              extend: "pdf",
              className: "d-none",
            },
            {
              extend: "print",
              className: "d-none",
            },
          ],
          select: {
            style: "multi",
            selector: 'td:first-child input[type="checkbox"]',
            classMap: {
              checkAll: "#datatableCheckAll",
              counter: "#datatableCounter",
              counterInfo: "#datatableCounterInfo",
            },
          },
          language: {
            zeroRecords: `<div class="text-center p-4">
              <img class="mb-3" src="{{  asset("assets/svg/illustrations/oc-error.svg") }}" alt="Image Description" style="width: 10rem;" data-hs-theme-appearance="default">
              <img class="mb-3" src="{{  asset("assets/svg/illustrations-light/oc-error.svg") }}" alt="Image Description" style="width: 10rem;" data-hs-theme-appearance="dark">
            <p class="mb-0">No data to show</p>
            </div>`,
          },
        });

        const datatable = HSCore.components.HSDatatables.getItem(0);

        $("#export-copy").click(function () {
          datatable.button(".buttons-copy").trigger();
        });

        $("#export-excel").click(function () {
          datatable.button(".buttons-excel").trigger();
        });

        $("#export-csv").click(function () {
          datatable.button(".buttons-csv").trigger();
        });

        $("#export-pdf").click(function () {
          datatable.button(".buttons-pdf").trigger();
        });

        $("#export-print").click(function () {
          datatable.button(".buttons-print").trigger();
        });

        $(".js-datatable-filter").on("change", function () {
          var $this = $(this),
            elVal = $this.val(),
            targetColumnIndex = $this.data("target-column-index");

          if (elVal === "null") elVal = "";

          datatable.column(targetColumnIndex).search(elVal).draw();
        });
      });
    </script>

    <!-- JS Plugins Init. -->
    <script>
      (function () {
        window.onload = function () {
          // INITIALIZATION OF NAVBAR VERTICAL ASIDE
          // =======================================================
          new HSSideNav(".js-navbar-vertical-aside").init();

          // INITIALIZATION OF FORM SEARCH
          // =======================================================
          new HSFormSearch(".js-form-search");

          // INITIALIZATION OF BOOTSTRAP DROPDOWN
          // =======================================================
          HSBsDropdown.init();

          // INITIALIZATION OF SELECT
          // =======================================================
          HSCore.components.HSTomSelect.init(".js-select");

          // INITIALIZATION OF INPUT MASK
          // =======================================================
          HSCore.components.HSMask.init(".js-input-mask");

          // INITIALIZATION OF NAV SCROLLER
          // =======================================================
          new HsNavScroller(".js-nav-scroller");

          // INITIALIZATION OF COUNTER
          // =======================================================
          new HSCounter(".js-counter");

          // INITIALIZATION OF TOGGLE PASSWORD
          // =======================================================
          new HSTogglePassword(".js-toggle-password");

          // INITIALIZATION OF FILE ATTACHMENT
          // =======================================================
          new HSFileAttach(".js-file-attach");
        };
      })();
    </script>

    <!-- Style Switcher JS -->

    <script>
      (function () {
        // STYLE SWITCHER
        // =======================================================
        const $dropdownBtn = document.getElementById("selectThemeDropdown"); // Dropdowon trigger
        const $variants = document.querySelectorAll(
          `[aria-labelledby="selectThemeDropdown"] [data-icon]`
        ); // All items of the dropdown

        // Function to set active style in the dorpdown menu and set icon for dropdown trigger
        const setActiveStyle = function () {
          $variants.forEach(($item) => {
            if (
              $item.getAttribute("data-value") ===
              HSThemeAppearance.getOriginalAppearance()
            ) {
              $dropdownBtn.innerHTML = `<i class="${$item.getAttribute(
                "data-icon"
              )}" />`;
              return $item.classList.add("active");
            }

            $item.classList.remove("active");
          });
        };

        // Add a click event to all items of the dropdown to set the style
        $variants.forEach(function ($item) {
          $item.addEventListener("click", function () {
            HSThemeAppearance.setAppearance($item.getAttribute("data-value"));
          });
        });

        // Call the setActiveStyle on load page
        setActiveStyle();

        // Add event listener on change style to call the setActiveStyle function
        window.addEventListener("on-hs-appearance-change", function () {
          setActiveStyle();
        });
      })();
    </script>

    <!-- End Style Switcher JS -->
  </body>
</html>
