function main() {
          var hamburger = document.getElementById("hamburger-icon");
          function toggleMenu(x) {
              var linkClass = x.classList;
              if(linkClass.contains("responsive")) {
                    linkClass.remove("responsive");
              } else {
                    linkClass.add("responsive");
                    linkClass.remove("hidden");
              }

          }
          hamburger.onclick = function() {
              console.log("hello");
              var navLinks = document.getElementsByClassName("navlink");
              for(i=0; i < navLinks.length; i++) {
                    toggleMenu(navLinks[i]);
              }
          }
}

window.onload = function() {
       main();
}
