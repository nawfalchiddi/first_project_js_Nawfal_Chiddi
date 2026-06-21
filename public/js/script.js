




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
        password:password,
        Money :3000,
        investementTg:0, 
        leonNTP:0,
        investRecieve:0
    }
    userDatabase.push(theInfo);
   

    alert("registration was seccessfull");
}

// Login :

function login() {
  
    const theEmail = prompt("enter your email");
    const thePassword = prompt("enter your password");

    const dsEmailExiste = userDatabase.find(index => index.email === theEmail && index.password === thePassword)
    // const dsPasswordExiste = userDatabase.find(index => index.password === thePassword)
  if(dsEmailExiste){
    alert("you just loged in seccessfully")
    dashBord()
  }else{
    alert("the email does not existe try to sign up")
  }

}

//the repay of the leon:
if (userDatabase[0].leaonAt > 0) {
  let lossAfterEveryLogIn = userDatabase[0].leaonAt * 0.10

  if (userDatabase[0].leaonAt >= lossAfterEveryLogIn) {
      userDatabase[0].Money -= lossAfterEveryLogIn  
      userDatabase[0].leaonAt -= lossAfterEveryLogIn
      alert("10% was taken thats mean "+lossAfterEveryLogIn+" was taken from your amount of money")
  }else{
      userDatabase[0].Money -= userDatabase[0].leaonAt
      userDatabase[0].leaonAt = 0;
      alert("your final loan "+userDatabase[0].leaonAt+ " was token now")
      alert("your amount of money remaining is "+userDatabase[0].Money)
  }
}
//change password:
function changePassword(){
    const theEmail = prompt("enter email");
    const ThePassword = prompt("enter password");

    const dsEmailExiste = userDatabase.find(x => x.email === theEmail && x.password === ThePassword)


    if(dsEmailExiste){
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
//Dashbord:
function dashBord(){
let activit = true


while (activit) {
    const secondAction =prompt( "welcome to the dashbord "+"\nyour cuurent amount of money: "+userDatabase[0].Money+"$"+"\n1. Show your amount of money\n2. deposite an amount\n3. draw a specific amount\n4 invest money\n5 take a leon\n6. log out")
    switch (secondAction) {
        case "1":
            showAmount()
            break;
    
        case "2":
            depositeMoney()
            break;
        case "3":
            drawMoney()
            break;

            case "4":
       moneyInvest()
       break;
            case "5":
       leon()
       break;
        case "6":
            main()
              activit = false
            break;
            
                 default:
        alert("selet the one of the numbers you see");
    }
    
}
}
//show money :
function showAmount() {
    alert("your current amount is "+userDatabase[0].Money+"$")
}
//Draw money:
function drawMoney() {
    
   let drawAmount = Number(prompt("enter the needed amount"))
    if(drawAmount <= userDatabase[0].Money && drawAmount > 0){
        userDatabase[0].Money -= drawAmount
        alert("the update is now :" + userDatabase[0].Money+"$")
    }else{
        alert("invalide amount you need to put a number less than you current amount and more than 0")
    }
}
//depositeMony:
function depositeMoney(){
    let WantedAmount = Number(prompt("enter how much you want to deposite"))
     if ( WantedAmount > 0) {
        userDatabase[0].Money += WantedAmount
        alert("your new amount is "+userDatabase[0].Money+"$")
     }else{
        alert("invalide number")
     }
}
//Money invest:
function moneyInvest() {
    let investAmount = Number(prompt("enter the wanted amount for the investement"))
    if (investAmount > 0 && investAmount <= userDatabase[0].Money) {
         userDatabase[0].Money -= investAmount
         userDatabase[0].investementTg += (investAmount * 1.20) 
alert(" investement was seccessfull you will recieve 20% "
    +"your amount of money is "+userDatabase[0].Money+"$"
    +" and your investment target is "+userDatabase[0].investementTg+"$")

        
    }else{
        alert("invalide amount")
    }
}
//leon:
function leon() {
    let maxAmount = userDatabase[0].Money * 0.20;
    let leaonAt = Number(prompt("enter the desired amount between 1$ to "+maxAmount+"$"))
    if (leaonAt <= maxAmount && leaonAt > 0) {
       userDatabase[0].Money += leaonAt;
       userDatabase[0].leonNTP += leaonAt;
       alert("your leon-process was seccessfull "+leaonAt+" added to your bank account and your amount of money now is "+userDatabase[0].Money+"$")
    }else{
        alert("invalide choice")
    }
}


main();
