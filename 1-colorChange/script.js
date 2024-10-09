const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((btn) => {  //arrow OR normal function
    // console.log(btn);
    btn.addEventListener('click', function(e) {
        // console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;  //OR ='grey'
        }
        else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;  //OR ='grey'
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;  //OR ='grey'
        }
    });
    
});