function validation(){
    if(document.formfill.username.value==""){
        document.getElementById("result").innerHTML="Enter username*"
        return false;
    }
  else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*"
        return false;
    }
    else if(document.formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your email*"
        return false;
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result").innerHTML="Enter your password*"
        return false;
    }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML="password must be 6-digits"
        return false;
    }
    
    else if(document.formfill.Cpassword.value!==""){
        document.getElementById("result").innerHTML="enter Confirm password*"
        return false;
    }
    else if(document.formfill.Cpassword.value!==document.formfill.Cpassword.value){
        document.getElementById("result").innerHTML="password does 'nt  matched*"
        return false;
    }
    
}