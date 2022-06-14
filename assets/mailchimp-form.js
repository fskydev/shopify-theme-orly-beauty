;(function($) {
  'use strict';
  const $formInput = $('input');

  /**
   * Init MailChimpForm
   */
  $('#subscribe-form').MCForm({
  url: '//orlybeauty.us3.list-manage.com/subscribe/post?u=5e3e7d11af3dd39356bc8eab6&amp;id=b6240f7d3a',
   fields: '0:EMAIL',
    submitSelector: '#submit-form',
    customMessages: {
      E001: 'This field can not be empty',
      E003: 'Please enter a valid email address',
    },
    onOk: (message) => {
        $(".gated").hide();
		 setCookie("access", "granted", 1);
    },
    onFail: (message) => {
       var substring = "already subscribed";
      if (message.indexOf(substring) !== -1){
      console.log("welcome back!");
      $(".gated").hide();
		 setCookie("access", "granted", 1);
      }

    }
  });

  /**
   * mc:input:error event handler
   */
  $formInput.on('mc:input:error', function () {
    console.log('mc:input:error event fired');

    addBorder($(this), 'red');
  });

  /**
   * mc:input:ok event handler
   */
  $formInput.on('mc:input:ok', function () {
    console.log('mc:input:ok event fired');
    addBorder($(this), 'green');
  });

  /**
   * @param element
   * @param {String} color
   */
  function addBorder(element, color) {
    element.css({'border': `1px solid ${color}`});
  }
})(jQuery);

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var access = getCookie("access");
  if (access != "") {
   return true;
  } else {
    
      setCookie("access", "granted", 1);
    }
  
}