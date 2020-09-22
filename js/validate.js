function checkInput(id){
     var letters = /^[A-Za-z]+$/;
     var text = document.getElementById(id);
     console.log(text);
     if(text.value.match(letters)){
         document.getElementById(id).style.border="1px solid green";
     }
     else{
        document.getElementById(id).style.border="1px solid red"
     }
}

function validatePhone(id){
    var phoneNo = /^\d{10}$/;
    var text = document.getElementById(id);
    console.log(text.value);
    if(text.value.match(phoneNo)){
        document.getElementById(id).style.border="1px solid green";
    }
    else{
       document.getElementById(id).style.border="1px solid red"
    }
}

function validateNumbers(id){
    var numbers = /^[0-9]+$/;
    var text = document.getElementById(id);
    console.log(text.value);
    if(text.value.match(numbers)){
        document.getElementById(id).style.border="1px solid green";
    }
    else{
       document.getElementById(id).style.border="1px solid red"
    }
}

function validateEmail(id){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var text = document.getElementById(id);
    console.log(text.value);
    if(text.value.match(mailformat)){
        document.getElementById(id).style.border="1px solid green";
    }
    else{
       document.getElementById(id).style.border="1px solid red"
    }
}

function validatePassword(id){
    var letterNumber = /^[0-9a-zA-Z]+$/;
    var text = document.getElementById(id);
    console.log(text.value);
    if((text.value.match(letterNumber)) && (text.value.length >= 8 && text.value.length <= 12)){
        document.getElementById(id).style.border="1px solid green";
    }
    else{
       document.getElementById(id).style.border="1px solid red"
    }
}