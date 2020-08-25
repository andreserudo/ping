// Code that validate an email https://ui.dev/validate-email-address-javascript/
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validEmail(){
  const email = document.getElementById('email').value;
  
  if(emailIsValid(email)){
    alert('email válido!')
  }else{
    alert('email inválido!')
  }
  
}

