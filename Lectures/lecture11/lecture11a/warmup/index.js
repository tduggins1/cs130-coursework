const addTheNumbers = (ev) => {
    // Your code here...
    console.log('add the numbers...');
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let result = Number(num1) + Number(num2);

    console.log(result);

    document.querySelector('#answer').innerHTML = result;
}

const subtractTheNumbers = (ev) => {
    // Your code here...
    console.log('subtract the numbers...');
}

document.getElementById('add').onclick = add_numbers;