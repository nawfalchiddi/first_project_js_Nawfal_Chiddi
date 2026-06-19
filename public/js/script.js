const signUp = "sign up"
const changePassword = "change the password"
const logIn = "log in"
let attempts = 3;
const user = prompt(`do you want to sign up or log in or just chnage the password : ${attempts}`);
while (user == signUp || user == logIn || user == changePassword) {

    if (user === signUp) {
        let name = prompt("type your name in")
        
        if (name == name.toUpperCase()){
            alert("the name shauld not contain an uppercase littere")
            
        }else if (name.includes("@","$","£")){
            alert("the name shoud not includes text-types like @");
            
        }else if(name.length < 5){
            alert("the name should contain more then 5 littres");
        }else{
            alert("good now type your password")
        }
    }
    let email = prompt("type your Email")
    if(email.includes(" ") ){
    alert("the email shauld not contain spaces between the littres")
    }
    else {
        attempts--;
        if(attempts < 3){
             alert("try all over again")
        }
    }
    // if (!attempts) {
    // console.log("Account blocked");
    // }
    
}
if (attempts === 0) {
    alert("Account blocked");
    
}