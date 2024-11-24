function closebrowser(){
  document.querySelector(".browser-scrol").style.display=("none");
}
function openbrowser() {
  document.querySelector(".browser-scrol").style.display = ("block");
}
function closemenubar(){
  document.querySelector(".menu-bar").style.display=("none");
  document.querySelector("hr").style.display=("none");
}
function refresh(){
 location.reload(); 
}
function openmenubar() {
  document.querySelector(".menu-bar").style.display = ("block");
  document.querySelector("hr").style.display=("block");
}
function youtube(){
document.getElementById("url").value = "http://www.youtub.com";
}
function chrome() {
  document.getElementById("url").value = "http://www.chrome.com";
}
function facebook() {
  document.getElementById("url").value = "http://www.facebook.com";
}
function codingedit() {
  document.getElementById("url").value = "http://www.code editor.com";
}
function account() {
  document.getElementById("url").value = "http://www.account login.com";
}



function fun() {
  var keywords = document.getElementById("url").value;

  if (keywords === "youtube") {
    document.getElementById("url").value = "http://www.youtub.com";

  } else if (keywords === "chrome" || keywords === "google" ) {
document.getElementById("url").value = "http://www.chrome.com";
  } 
  if (keywords === "facebook" || keywords === "chat" || keywords === "face")  {
  document.getElementById("url").value = "http://www.facebook.com";
  }
  else if (keywords === "coding editor" || keywords === "coding" || keywords === "code") {
  document.getElementById("url").value = "http://www.coding editor.com";
  }
   if (keywords === "login") {
    document.getElementById("url").value = "http://www.account login.com";
}

}