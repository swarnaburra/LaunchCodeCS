/*
* Generates an attendee badge string given a name and role.
* @param {string} name - The name of the attendee.
* @param {string} role - The role of the attendee (e.g., "Speaker", "Attendee", "Organizer").
* @returns {string} A formatted badge string.
*/
function generateBadge(name, role){
    return `Name: ${name}, Role: ${role}`;
}

/*
* Calculates the total cost for a group of attendees.
* @param {number} numAttendees - The number of attendees.
* @param {number} costPerAttendee - The cost per attendee.
* @returns {number} The total cost for the group.
*/
const calculateCost = (numAttendees, costPerAttendee) => {
    let discount = 0;
    if (numAttendees > 100){
        discount = 0.1 // 10% discount for groups larger than 100
    }
    let cost = numAttendees * costPerAttendee * (1 - discount);

    // round result to 2 decimal places
    return cost.toFixed(2);
}

/*
* Validates email address is well formed by containing at lease an @ and '.' character
* @param {string} email
* @returns {bool} whether email is properly formatted or not
*/
function isEmailValidated(email){
    // convert to String
    email = String(email);
    if (email.includes("@") && email.includes(".")){
        return true;
    }
    else {
        return false;
    }

}

function isEmailValidatedRegex(email){
    email = String(email);
    const regexString = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    let result = email.match(regexString);
    if (result){
        return true;
    }
    else{
        return false;
    }

}


function main(){
    console.log("--- Attendee Badge ---");
    console.log(generateBadge("Jamey Evans", "Instructional Assistant") + "\n");
    
    // calculate cost
    console.log("--- Calculate Event Cost ---");
    console.log(`Event cost for 90 people @ $1/person = $${calculateCost(90, 1)})`);
    console.log(`Event cost for 1000 people @ $1/person = $${calculateCost(1000, 1)})\n`);

    // validate email addresses

    const emailAddresses = ["jevans@watlow.com", "fakeyMcFakerson@fake", "", 17]

    for( let i = 0; i < emailAddresses.length; i++){
        console.log(`STD: '${emailAddresses[i]}' : ${isEmailValidated(emailAddresses[i])}`);
        console.log(`REGEX: '${emailAddresses[i]}' : ${isEmailValidatedRegex(emailAddresses[i])}\n`);
    }

}

// run code
main();




