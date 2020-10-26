function calculateTrip()
{
    //alert("your trip will cost $X");
    var tripLengthMiles = prompt("How many miles is your trip?");
    //get length of trip in miles
    tripLengthMiles = parseFloat(tripLengthMiles);
    //convert to number
    var mpgOfVehicle = prompt("What is your vechicle's MPG?");
    //get miles per gallon of vehicle
    mpgOfVechicle = parseFloat(mpgOfVehicle);
    //convert to number
    var costOfGasPerGallon = prompt("How much is a gallon of gas?");

    costOfGasPerGallon = parseFloat(costOfGasPerGallon);

    var averageSpeedDriven = prompt("What is your average MPH?");

    averageSpeedDriven = parseInt(averageSpeedDriven);

    var totalGallons = tripLengthMiles /mpgOfVechicle;
    var totalGasCost = totalGallons * costOfGasPerGallon;
    var totalHours =tripLengthMiles / averageSpeedDriven;

    var totalGasCostDisplay = totalGasCost.toFixed(2);

    alert("Your trip will cost $" + totalGasCostDisplay + "for gas.");
    alert(`Your trip will cost $${totalGasDisplay} for gas.`);

    alert("Your trip will take "+ totalHours.toFixed(1)+ "hours.");
    alert(`Your trip will take ${totalHours.toFixed(1)} hours`);
    //get dollars per gallon of gas

    //convert to number

    //get average speed driven in MPH

    //convert to number

    //divide miles

    //

}