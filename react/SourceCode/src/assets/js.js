export function validateForm() {
    var x = document.getElementById("fname").value;
    var y = document.getElementById("email").value;
    var z = document.getElementById("msg").value;
  
    if(x === "") {
        alert("Please enter your Full Name!");
        return false;
    }
    if(y === "") {
        alert("Please enter your Email!");
        return false;
    }
  
    if(z === "") {
        alert("Please enter your message!");
        return false;
    }
  
    alert("Thank you for contacting us! We will get back to you within 24 hours!");
  
    return true;
}
