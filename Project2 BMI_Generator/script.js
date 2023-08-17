const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height==='' || height <= 0 || isNaN(height))
    {
        result.innerHTML = 'Please give valid height'
    }
    else if(weight==='' || weight <= 0 || isNaN(weight))
    {
        result.innerHTML = 'Please give valid weight'
    }
    else{
        const bmi = (weight /((height*height)/10000)).toFixed(2)
        if(bmi<=18.6)
        {
            result.innerHTML = `Your BMI : ${bmi}, You are Under Weight!!!`
        }
        else if(bmi>18.6 && bmi<=24.9)
        {
            result.innerHTML = `Your BMI : ${bmi}, You are in Normal Range!!!`
        }
        else{
            result.innerHTML = `Your BMI : ${bmi}, You are Overweight!!!`
        }
    }


})