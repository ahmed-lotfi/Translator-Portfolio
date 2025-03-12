let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
// Email js
function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == ""|| msg == "")
        {
           emptyerror();
        }
        else{
            sendmail(name.value, email.value,msg.value);
            success();
        }
    })
}
validate();
function sendmail(name,email,msg){
    emailjs.send("service_qw6l8n4","template_t5e7hhj",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}
function emptyerror(){
    swal({
        title:"oh No....",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}
function success(){
    swal({
        title:"Email Sent successfully",
        text: "We will reply as soon as possible",
        icon: "success",
    });
}
// header background change while scrolling
let header = document.querySelector('header')

window.addEventListener('scroll',() => {
    header.classList.toggle('header-active',window.scrollY > 0);
});
// scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll',() => {
    scrollTop.classList.toggle('scroll-active',window.scrollY >= 400);
});