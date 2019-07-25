var conversationalForm = window.cf.ConversationalForm.startTheConversation({
  formEl: document.getElementById("form"),
  context: document.getElementById("cf-context"),
  userImage: "https://gulpjs.com/img/gulp-white-text.svg",
  robotImage: "phil-talking-animation.gif",
  submitCallback: function() {
    alert(
      "Custom submit callback reached, removing Conversational Form, see markup of this file"
    );
  }
});