import React from 'react'

const checkValidate = (name,email,password) => {
    const isValidemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   const isValidUsername = /^[0-9A-Za-z]{6,16}$/.test(name);
    const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    if(!isValidPassword && !isValidPassword && !isValidPassword)return "Enter valid details";
    else if(!isValidPassword && !isValidPassword) return "Email and password are not valid";
    else if(!isValidPassword) return "Enter valid password";
    else if(!isValidUsername) return "Enter valid name";
    else if(!isValidemail) return "Enter valid email";
    else return "";

  
}

export default checkValidate