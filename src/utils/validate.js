export const validate=(email,password,isSignedIn,name)=>{
    //regex validations
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName=/^[A-Z][a-zA-Z]+(?: [A-Z][a-zA-Z]+)+$/.test(name);
     if(!isSignedIn){
       if(!isValidName) return "Invalid Name, Please Provide Valid First and Last name"
    }
    if(!isValidEmail) return "EmailId is not valid";
    if(!isValidPassword) return "Password is not valid"
   
   

    return null;

}