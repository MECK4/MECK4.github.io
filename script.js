function copyEmail()
{
    let mail = document.getElementById("mail");
    navigator.clipboard.writeText("officialdamagency@gmail.com");
    mail.title = "Email Address Copied Successfully"; 
}

function toggleDropDown()
{
    let menu = document.getElementById("dropDownOffers");
    if(menu.style.display == "none")
    {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}