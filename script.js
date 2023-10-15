function copyEmail()
{
    let mail = document.getElementById("mail");
    navigator.clipboard.writeText("officialdamagency@gmail.com");
    mail.title = "Email Address Copied Successfully"; 
}
