const myButtons = document.querySelectorAll('.button')
// console.log(myButtons);
const body = document.querySelector('body')

// Events in JS - Every action in the browser -> moving the mouse, button click all are events in Js.

myButtons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function(e) {
    // 'e' is the Event Object
    // console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }   
  })
});

// how we can do the same in another way ? 