

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
          
