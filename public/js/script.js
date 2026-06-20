




const userDatabase = [];

function main() {
    let process = true;

    while (process) {
        const action = prompt("welcome to the banking System\nSelect an option:\n1-sign in \n2-Login\n3-Change Password\n4-Exit");

        switch (action){
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
                  alert("see you next time");
           process = false;
         break;
            default:
        alert("selet the one of the numbers you see");
        }
    }
}


 function signIn(){
     
    
     while (true) {
         name = prompt("Enter your name :")
         if (name && /^[A-Za-z]+$/.test(name)) {
             break;
            }
            else{
                alert(" it must contain only letters  and cannot be empty.");
            }
        }
        
        
        
    while(true){
         email = prompt("enter an email")
         if (email.length > 7 && email.includes("@")) {
             alert("the log in was seccessfull")
             const doesEmailExist = userDatabase.some(Element => Element.email === email)
             if(doesEmailExist){
                 alert("sorry but this email already exist")
                } else{
                    break
                }
            }
            
            else{
                alert("the email must contain a @ and be like this exemple exemple@gmail.com...")
            }
        };
        

        
     
while(true){
     age = prompt("enter your age ")
    if (age && /^[1-9][0-9]?$/.test(age)) {
        alert("the age has been added seccessfully")
        break;
    }else{
        
        alert("the age must contain only numbers but not a 0 or three numbers")
    }
}


while(true){
     password = prompt("enter password")
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
        age:age,
        password:password
    }
    userDatabase.push(theInfo);
   

    alert("registration was seccessfull");
}


function login() {
    const theEmail = prompt("enter your email");
    const thePassword = prompt("enter your password");

    const dsEmailExiste = userDatabase.find(index => index.email === theEmail && index.password === thePassword)
    // const dsPasswordExiste = userDatabase.find(index => index.password === thePassword)
  if(dsEmailExiste){
    alert("you just loged in seccessfully")
  }else{
    alert("the email does not existe try to sign up")
  }
}


function changePassword(){
    const theEmail = prompt("enter email");
    const ThePassword = prompt("enter password");

    const dsEmailExiste = userDatabase.find(x => x.email === theEmail && x.password === ThePassword)


    if(dsEmailExiste) {
        while(true){
                   const TheNewOne = prompt("enter new password")
              if (TheNewOne) {
                 dsEmailExiste.password = TheNewOne
                 alert("the password has been changed")      
                      break;
                    }
                  }    
    }else{
        alert("password or email incorrect")
    }
}







main();
