function validation() {
  
    const username = document.formfill.username.value;
    const email = document.formfill.email.value;
    const password = document.formfill.password.value;
    const confirmPassword = document.formfill.cpassword.value;
    const result = document.getElementById("result");

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    
    result.textContent = "";
    result.style.color = "red";

    
    if (username === "") {
        result.textContent = "Username is required!";
        return false;
    }

    
    if (!email.match(emailPattern)) {
        result.textContent = "Please enter a valid email address!";
        return false;
    }

    
    if (password.length < 6) {
        result.textContent = "Password must be at least 6 characters long!";
        return false;
    }

    
    if (password !== confirmPassword) {
        result.textContent = "Passwords do not match!";
        return false;
    }

    document.getElementById("popup").style.display = "block";
    return false;
}