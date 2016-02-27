var explainer = document.getElementById('explaintext');
var hideState = false; //Has to be here to set up that hideState is even a thing.

function confront(){
    if (hideState === false){
    explainer.className = explainer.className.replace( /(?:^|\s)hide(?!\S)/g , '' );
    hideState = true;
    }
    else if (hideState === true){
      explainer.className += ' hide';
      hideState = false;
    }
}
