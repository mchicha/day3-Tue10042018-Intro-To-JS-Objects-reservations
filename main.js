var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var result;
var claimReservation = function () {
    //var name = prompt('Please enter the name for your reservation');

    // Get the input value
    var name = document.getElementById("input").value;
    // convert the string to minuscule
    var lowerName = name.toLowerCase();
    // Extract the first Letter of the name
    var firstLetterName = lowerName.slice(0,1);
    // Convert the first letter to MAJUSCULE 
    var upperL = firstLetterName.toUpperCase();
    // Concatenate the first MAJUSCULE letter of the name with the rest of the name
    name = upperL + lowerName.slice(1);
    // If there is no reservation, tell the user there is nothing under their name (user alert).
    if (!reservations[name]) 
    {
        alert("Welcome " + name + ", There is no reservation under their name");
        result = -1;
    }
    else
    {
        // If the reservation exists and is unclaimed, welcome the user (use alert).
        if (reservations[name].claimed == false) 
        {
            alert("Welcome " + name + ", your reservation exists and is unclaimed");
            result = 0;
        }
        
        // If the reservation exists and is already claimed, inform the user about the situation (use alert).
        if (reservations[name].claimed == true) 
        {
            alert("Welcome " + name +", your reservation exists and is already claimed");
            result = 1;
        }
    }
    if (result == -1) 
    {
        // we add the property name to the reservations object
        reservations[name] = { claimed: true };
        alert("Welcome " + name +", your reservation was created");
    }
}

//debugger;
result = claimReservation(name);

