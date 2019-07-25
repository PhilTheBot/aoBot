var conversationalForm = window.cf.ConversationalForm.startTheConversation({
  formEl: document.getElementById("form"),
  context: document.getElementById("cf-context"),
  userImage: "https://gulpjs.com/img/gulp-white-text.svg",
  robotImage: "phil-talking-animation.gif",
  submitCallback: function() {
    document.getElementsByClassName('dark-theme')[0].style.display = 'none';
    document.getElementById('form').style.margin = '250px auto 0';
    document.getElementById('form').style.height = 'auto';
  }
});