function calculatePizzaCost()
{
    var numPizza = prompt("How many pizza would you like to order?");
    numPizza = parseInt(numPizza);

    var numTopping = prompt("How many topping would you like to add?");
    numTopping = parseInt(numTopping);

    var totalCostOfPizza = (numPizza * 15.00) + (numTopping * 1.25);

    alert(`The Total cost of pizza will be $ ${totalCostOfPizza}.`);

    var numPpl = prompt("How many people will share this pizza?");
    numPpl = parseInt(numPpl);

    var CostPerPerson = totalCostOfPizza / numPpl;

    alert(`The cost of pizza per one person will be $ ${CostPerPerson.toFixed(2)}.`);

}

// prompt for amount of pizza
// convert to number
// prompt for amount of topping
// convert to number

// calculate total cost of pizza(with topping) order
// alert total cost of pizza

// prompt for number of people ordering together
// convert to number
// calculate(divide) cost per one person
// alert cost per one person

