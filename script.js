

function setavt(ev) {
    var el = window._protected_reference = document.createElement("INPUT");
    el.type = "file";
    el.accept = "image/*";
    el.multiple = "multiple"; // remove to have a single file selection
    
    // (cancel will not trigger 'change')
    el.addEventListener('change', function(ev2) {
      // access el.files[] to do something with it (test its length!)
      
      // add first image, if available
      if (el.files.length) {
        var output = document.getElementById('outt');
    output.style.backgroundImage= "url("+URL.createObjectURL(event.target.files[0])+")";
      }
  
  
      // test some async handling
      new Promise(function(resolve) {
        setTimeout(function() { console.log(el.files); resolve(); }, 1000);
      })
      .then(function() {
        // clear / free reference
        el = window._protected_reference = undefined;
      });
  
    });
  
    el.click(); // open
  }


function setbackground(ev) {
    var el = window._protected_reference = document.createElement("INPUT");
    el.type = "file";
    el.accept = "image/*";
    el.multiple = "multiple"; // remove to have a single file selection
    
    // (cancel will not trigger 'change')
    el.addEventListener('change', function(ev2) {
      // access el.files[] to do something with it (test its length!)
      
      // add first image, if available
      if (el.files.length) {
        var output = document.getElementById('output');
    output.style.backgroundImage= "url("+URL.createObjectURL(event.target.files[0])+")";
      }
  
  
      // test some async handling
      new Promise(function(resolve) {
        setTimeout(function() { console.log(el.files); resolve(); }, 1000);
      })
      .then(function() {
        // clear / free reference
        el = window._protected_reference = undefined;
      });
  
    });
  
    el.click(); // open
  }

  // copy

  function copy() {
    /* Get the text field */
    // var copyText = document.getElementById("myInput");
  
    // /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
   var phone_number='0355121105';
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(phone_number);
    
    /* Alert the copied text */
    alert("Copied the phone number ");
  }

 

  