// const clock = document.getElementById('clock');
// OR
const clock = document.querySelector('#clock');

setInterval(function(){  //for every second time inerval,    1000 = 1 second  
    let  date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
