// Code that validate an email https://ui.dev/validate-email-address-javascript/
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validEmail(){
  const email = document.getElementById('email').value;
  
  if(emailIsValid(email)){    
    document.getElementById('rejectedEmail').style.display = "none";
    document.getElementById('email').style.borderColor = "#e7ecff";
  }else{    
    document.getElementById('rejectedEmail').style.display = "block";    
    document.getElementById('email').style.borderColor = "#f9b0c2";
  }
  
}

