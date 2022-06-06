let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

// Function to print user input in the form via console log
function handleSubmit(event) {
    event.preventDefault();
    //reading the entered value of all elements
    const contactName = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    console.log(`Person trying to contact me: ${contactName}`);
    console.log(`E-mail address of the person: ${email}`);
    console.log(`Message sent by the person: ${message}`);

    //reset the form
    form.elements["name"].value = "";
    form.elements["email"].value = "";
    form.elements["message"].value = "";
}