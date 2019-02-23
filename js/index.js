(function () {
  const viewheight = window.innerHeight
  const viewwidth = window.innerWidth

  // ios quick fix
  if (window.innerWidth <= 800 && window.innerHeight <= 600) {
    window.onresize = function (event) {
      document.querySelector('.container').style.height = viewheight + "px"
      document.querySelector('.container').style.width = viewwidth + "px"
    }
  }
  
  emailjs.init("user_KlCkRjkTOxFPsK5ekrshB");

  document.getElementById('submit').addEventListener('click', function () {
    
    var template_params = {
      reply_to: document.getElementById('email').value,
      to_name: "Dwighson",
    };

    var service_id = "default_service";
    var template_id = "template_ypR1fahP";
    if (document.getElementById('email').value == "") {
      alert("Make sure to fill out everything!");
    } else {
        if (document.getElementById('email').value.indexOf('@') > -1) {
        emailjs.send(service_id, template_id, template_params);
        alert("you've been added to the email list!")
      } else {
        alert("make sure to fill in a correct email address.");
      }
    }

  })
})();