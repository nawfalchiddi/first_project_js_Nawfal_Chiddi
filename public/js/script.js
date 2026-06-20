




const userDatabase = [];

function main() {
    let running = true;

    while (running) {
        const choice = prompt("welcome to the banking System\nSelect an option:\n1-sign in \n2-Login\n3-Change Password\n4-Exit");

        switch (choice){
            case "1":
          signIn();
            break;
          case "2":
          login();
             break;
            case "3":
          changePassword();
             break;
            case "4":
                  alert("have a good day");
           running = false;
         break;
            default:
        alert("you need to select only one number");
        }
    }
}


 function signIn(){
    while (true) {
       let name = prompt("Enter your name :")
        if (name && /^[A-Za-z]+$/.test(name)) {
            break;
        }
        else{
             alert(" it must contain only letters  and cannot be empty.");
        }
    }
 

    while(true){
        let email = prompt("enter an email")
        if (email.length > 7 && email.includes("@")) {
            const doesEmailExist = userDatabase.some(Element => Element.email === email)
         if(doesEmailExist){
            alert("sorry but this email already exist")
           
        } break
    }
       
        else{
            alert("the email must contain a @")
        }
    }




while(true){
    var age = prompt("enter your age ")
    if (age && /^[1-9][0-9]?$/.test(age)) {
        alert("the age has been added seccessfully")
        break
    }else{
        alert("the age must contain only numbers but not a 0 or three numbers")
    }
}
while(true){
    let password = prompt("enter password")
    if(password){
        alert("the password has been added seccessfully");
        break;
    }else{
        alert("the password should not be just numbers")
    }
}
 




    const theInfo = {
        name:name,
        email:email,
        Age:age,
        Password:password
    }
    userDatabase.push(theInfo);
  

    alert("registration was seccessfull");
}


function login() {
    const theEmail = prompt("enter your email");
    const thePassword = prompt("enter your password");

    const dsEmailExiste = userDatabase.find(index => index.email === theEmail)
    const dsPasswordExiste = userDatabase.find(index => index.password === thePassword)
  if(dsEmailExiste && dsPasswordExiste){
    alert("you just loged in seccessfully")
  }else{
    alert("the email does not existe try to sign up")
  }
}


function changePassword(){
    const TheEmail = prompt("enter email");
    const ThePassword = prompt("enter password");

    const EmailChek = userDatabase.find(x => x.email === TheEmail)
    const PasswordChek = userDatabase.find(y => y.password === ThePassword)

    if (EmailChek && PasswordChek) {
        while(true){
                   const TheNewOne = prompt("enter new password")
               PasswordChek.password = TheNewOne      
        break;
    }    
    }else{
        alert("password or email incorrect")
    }
}







main();
