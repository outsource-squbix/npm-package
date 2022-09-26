import react from "react";
import axios from "axios";


export const getEmployeeById = async(id,URL)=>{
    const url = URL
    const { data } = await axios.get(`${url}getEmployee/${id}`)
   return data
}

// export const userSignUp = async(name,email, password, password2, access, userType)=>{
//     const url = "http://192.168.1.9:5001/"
//     const token = localStorage.getItem("token") 
//     const { data } = await axios.post(
//         `${url}register/`,{
//             name:name,
//             email:email,
//             password:password,
//             password2:password2,
//             access:access,
//             role:userType
//         },
//        { headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//             "Access-Control-Allow-Origin": "*",
//             'Authorization':token
//         }}
//     );
//    return data
// }

// export const newUserSignUp = async(name,email, password, password2, otp)=>{
//     const url = "http://192.168.1.9:5001/"
//     const { data } = await axios.post(
//         `${url}userSignup/`,{
//             name:name,
//             email:email,
//             password:password,
//             password2:password2,
//             otp:otp
//         }
//     );
//    return data
// }

// export const userSignIn = async(email, password)=>{
//     const url = "http://192.168.1.9:5001/"
//     const { data } = await axios.post(
//         `${url}login/`,{
//             email:email,
//             password:password,
//         }
//     );
//     localStorage.setItem("token", data.token);
//    return data
// }

// export const validateJWTToken = async(token)=>{
//     const url = "http://192.168.1.9:5001/"
//     try{
//         const { data } = await axios.post(
//             `${url}auth/`,
//            { token:token}
//         );
//         console.log(data)
//        return data
//     }catch(err){
//         return err
//     }

// }
// export const sendOtp = async(email)=>{
//     const url = "http://192.168.1.9:5001/"
//     try{
//         const { data } = await axios.post(
//             `${url}send/`,
//            { email:email}
//         );
//         console.log(data)
//        return data
//     }catch(err){
//         return err
//     }

// }

// export const verifyOtp = async(email,otp)=>{
//     const url = "http://192.168.1.9:5001/"
//     try{
//         const { data } = await axios.post(
//             `${url}verify/`,
//            { email:email,otp:otp}
//         );
//         console.log(data)
//        return data
//     }catch(err){
//         return err
//     }

// }

// export const resendOtp = async(email)=>{
//     const url = "http://192.168.1.9:5001/"
//     try{
//         const { data } = await axios.post(
//             `${url}resend/`,
//            { email:email}
//         );
//         console.log(data)
//        return data
//     }catch(err){
//         return err
//     }

// }

// export const resetPassword = async(email,password)=>{
//     const url = "http://192.168.1.9:5001/"
//     const { data } = await axios.post(
//         `${url}updatePassword/${email}`,{
//             password:password,
//         }
//     );
//     localStorage.setItem("token", data.token);
//    return data
// }

// export const getUserDetails = async(email)=>{
//     const url = "http://192.168.1.9:5001/"
//     const token = localStorage.getItem("token") 
//     const { data } = await axios.get(`${url}getUser/${email}`, { headers: { Authorization: token } })
//    return data
// }


// export const updateUserRole = async(id,access,role)=>{
//     const url = "http://192.168.1.9:5001/"
//     const token = localStorage.getItem("token") 
//     const { data } = await axios.post(
//         `${url}updateUser/${id}`,{
//             id:id,
//             access:access,
//             role:role
//         },
//         { headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//             "Access-Control-Allow-Origin": "*",
//             'Authorization':token
//         }}
//     );
//    return data
// }