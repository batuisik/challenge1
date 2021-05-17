var initialFuel = document.getElementById('.initialFuel')
initialFuel = 0
    //const inputAdd = (numberInput) => {}



//alert('THE SHIP IS OUT OF FUEL !');
//var fuelAmount = document.getElementById('fuelAmount')

document.getElementById('add').onclick = function() {

    var inputVar = document.getElementById('fuelAmount').value;
    console.log('inputVar', inputVar)
    console.log(initialFuel)
    initialFuel = parseInt(initialFuel) + parseInt(inputVar)
    var result = parseInt(initialFuel) //+ parseInt(inputVar)
        //document.getElementsByClassName('initialFuel').innerHTML = result;
    document.getElementById('result').innerHTML = result;


}