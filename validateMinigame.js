var nameForm=document.getElementById("username")
var emailForm=document.getElementById("emailForm")
var button=document.getElementById("buttonForm")
var CemailForm=document.getElementById("CemailForm")
var password=document.getElementById("password")
var Cpassword=document.getElementById("Cpassword")

button.addEventListener('click', function(e) {
    if( nameForm.value.length<6 || !valideNama(nameForm.value) ){
        alert("Isi Nama , Nama minimal 6 karakter ")
        e.preventDefault()
    }else if(!validateEmail(emailForm.value)){
        alert("Isi Email Dengan Format yang benar, Format me@mail.com")
        e.preventDefault()
    }else if(CemailForm.value !== emailForm.value){
        alert("Confirm Email Harus Sama dengan Email sebelumnya")
        e.preventDefault()
    }else if(!validatePassword(password.value)){
        alert("Password Harus memiliki Minimal 1 Uppercase 1 Angka dan 8 Karakter")
        e.preventDefault()
    }else if(Cpassword.value !== password.value){
        alert("Confirm Password Harus Sama dengan Password sebelumnya")
        e.preventDefault()
    } else{
        alert("Selamat menikmati mini game "+ nameForm.value)
    }
})
//Password Harus memiliki 1 Uppercase 1 Angka dan 8 Karakter
function validatePassword(password){
    var re= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return re.test(password)
}
//Isi Email Dengan Format yang benar, Format me@mail.com
function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//Isi Nama , Nama minimal 6 karakter 
function valideNama(name){
    var re= /^[a-zA-Z' '0-9]+$/
    return re.test(name)
}
