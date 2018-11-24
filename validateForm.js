var nameForm=document.getElementById("full-name")
var emailForm=document.getElementById("email")
var commentForm=document.getElementById("Comment")
var button=document.getElementById("button")
var CemailForm=document.getElementById("Cemail")

button.addEventListener('click', function(e) {
    if( nameForm.value.length<6 || !valideNama(nameForm.value) ){
        alert("Isi Nama , Nama minimal 6 karakter dan berupa huruf")
        e.preventDefault()
    }else if(!validateEmail(emailForm.value)){
            alert("Isi Email Dengan Format yang benar, Format me@mail.com")
            e.preventDefault()
    }else if(CemailForm.value!==emailForm.value){
            alert("Email Harus Sama dengan sebelumnya")
            e.preventDefault()
    }else if(!commentForm.value || commentForm.value.length<20){
        alert("Comment harus diisi dan minimal 20 karakter")
        e.preventDefault()
    }else{
        alert("Terima Kasih telah memberikan masukan")
    }
})
//Isi Email Dengan Format yang benar, Format me@mail.com
function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email); // akan mereturn false / true
}
//Isi Nama , Nama minimal 6 karakter  dan hanya huruf saja dengan spasi
function valideNama(name){
    var re= /^[a-zA-Z' ']+$/
    return re.test(name) // akan mereturn false / true
}
