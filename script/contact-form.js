let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    //reading the entered value of all elements
    const contactName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log(`Person trying to contact me: ${contactName}`);
    console.log(`E-mail address of the person: ${email}`);
    console.log(`Message sent by the person: ${message}`);

    //reset the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}