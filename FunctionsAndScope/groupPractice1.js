// Task 1: Write a function to generate an attendee badge given a name and role (e.g., "speaker," "attendee").
//Example Output: "Name: Alice, Role: Speaker"

/*
 Generates an attendee badge given a name and a role
*/
function generateBadge(name, role){
    return `Name: ${name}, Role: ${role}`;
}


/* Task 2: Write a function to calculate the total cost of the event given the
   number of attendees and the cost per attendee. If the number of attendees
   exceeds 100, apply a 10% discount to the total cost.
    ○ Example Input: calculateCost(120, 25)
    ○ Example Output: 2700
*/
function calculateTotalCost(numAttendees, price, discount = .9){
    let total = price * numAttendees;
    if (numAttendees > 100){
        // receive a 10% discount
        total = total * discount;
    }
    return total;

}


/* Task 3: Write a function to validate email addresses for attendee
   registrations. The function should return true if the email contains "@" and
   ".", and false otherwise.
*/
function isValidEmail(email){
    email = String(email);

    return email.includes("@") &&  email.includes(".");
}



function main(){
    console.log("--- Generate Badge ---");
    console.log(generateBadge("Bob", "Builder"));
    console.log();

    console.log("--- Calculate Total Cost ---");

    console.log(`numAttendees: 9512, price: $5000, expected: $42,804,000 -- $${calculateTotalCost(9512, 5000, 1.5)}`);
    console.log(`numAttendees: 5, price: $5000, expected: $25,000 -- ${calculateTotalCost(5, 5000)}`);

    const emails = ["mesoogood@launchcode.js", "testyMcTesterface", "example.com", 75];

    for (const email of emails) {
        // write output of isValidEmail for each email address
        console.log(`${email}: ${isValidEmail(email)}`);
    }


}

main();