const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");



function sendEmail(){
const bodyMessage = `Full Name:${fullname.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br> Message:${mess.value}<br> `; 


    Email.send({
        SecureToken : "efa1897c-819f-4249-92e7-316805b5df15",
        Username : "manasarif09@gmail.com",
        Password : "031140D1F221C6D6FE11B7E57199F0DC1CC8",
        To : 'manasarif09@gmail.com',
        From : "manasarif09@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert("sent successfully")
    );
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});