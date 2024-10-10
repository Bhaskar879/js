const form = document.querySelector('form');
//     const height = parseInt(document.querySelector('#height').value)    //Give empty value *don't write here


form.addEventListener('submit', function(e){
    e.preventDefault(); //for not submiting the form link to the surver

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){   //height==NAN     old one,  Use latest  isNAN(height)
        result.innerHTML = `Please enter valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        // show result
        // result.innerHTML = `<span>${bmi}</span>`
        
        // assignment
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}</span> <br>You are under weight`
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `<span>${bmi}</span> <br>You weight is normal`
        }else{
            result.innerHTML = `<span>${bmi}</span> <br>You are over weight`
        }
    }
});