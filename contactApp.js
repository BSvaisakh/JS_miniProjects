const prompt = require("prompt-sync")();

function printInfo() {
    console.log("Contact Management System");
    console.log("__________________________");
    console.log("1. Add a contact");
    console.log("2. Delete a contact");
    console.log("3. View contact");
    console.log("4. Search contact");
    console.log("5. Exit");
}

function addContact() {
    const name = prompt("Name : ");
    const email = prompt("Email : ");
    const contact = {
        name: name,
        email: email,
    };
    contacts.push(contact);
    console.log("Added");
}

function deleteContact() {
    console.log("Contact IDs");
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        console.log((i + 1).toString() + ":", contact.name);
    }
    const number = parseInt(prompt("Enter an ID : "));
    if (isNaN(number) || number > contacts.length) {
        console.log("Invalid ID");
        return;
    }
    contacts.splice(number - 1, 1);
    console.log("Removed.");
}

function viewContacts(contacts) {
    for (let contact of contacts) {
        console.log("############");
        console.log("Name: ", contact.name);
        console.log("email: ", contact.email);
    }
}

function searchContacts() {
    const serachString = prompt("Search: ").toLowerCase();
    const result = [];

    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(serachString))
            result.push(contact);
    }
    viewContacts(result);
}

printInfo();

const contacts = [];

let keepGoing = true;
while (keepGoing) {
    const number = prompt("Enter an operation (1-5): ");
    switch (number) {
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            viewContacts(contacts); //pass contacts
            break;
        case "4":
            searchContacts();
            break;
        case "5":
            keepGoing = false;
            break;
        default:
            console.log("Unknown.");
            break;
    }
}
