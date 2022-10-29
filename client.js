function o1(){
  if (document.getElementById('page-content').value == '1' ){
      document.getElementById("colors").style.visibility = "visible";
  }

};

let color1 = document.getElementById("red");
let color2 = document.getElementById("green");
let color3 = document.getElementById("blue");

// A feature I would like to add would be a button that returns the user to home screen

document.addEventListener('click',

  function() {
      if (color1.checked) {
          document.body.style.backgroundColor = "red";

      } else if (color2.checked) {
          document.body.style.backgroundColor = "green";

      } else if (color3.checked) {
          document.body.style.backgroundColor = "blue";

      }
  });
