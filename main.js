// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



function callServ() {
 
  mimicServerCall()
  .then(function(){
   console.log('Success')     
  })

  .catch(function(error) {
    showPageError(error);
    setTimeout(()=>(hidPageError()),5000);
    //console.log(error.message);
  });
}

function showPageError(rerror){
  element = document.getElementById("modal");
  element.classList.remove("hidden");
  elementError = document.getElementById("error");
  elementError.innerHTML = rerror;
}

function hidPageError(){
  element = document.getElementById("modal");
  element.classList.add("hidden");
}

callServ();






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
