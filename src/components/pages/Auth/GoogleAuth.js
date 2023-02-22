// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Google from '../assets/google.png';



// const GoogleAuth = ({signIn, signOut, isSignedIn}) => {
//     const [auth, setAuth] = useState();
//     const navigate = useNavigate();

//     useEffect(() => {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
//                 scope: 'email'
//             })
//             .then(() => {
//                 const auth = window.gapi.auth2.getAuthInstance();
//                 setAuth(auth);
//                 onAuthChange(auth.isSignedIn.get());
//                 auth.isSignedIn.listen(onAuthChange);
//             })
//         })
//         const onAuthChange = (isSignedIn) => {
//             const auth = window.gapi.auth2.getAuthInstance();
//             if (isSignedIn) {
//             signIn(auth.currentUser.get().getId(),
//                 auth.currentUser.get().gv.tX);
//             } else {
//             signOut();
//             } 
//         }

//     }, [signIn, signOut]);

//     const onSignClick = () => {
//         auth.signIn();
//         if (auth.signIn()) {
//             console.log("Signed In Successfully")
//             navigate('/');
//         }
//     };

//     const renderAuthButton = () => {
//         if (isSignedIn === null) {
//             return null
//         } else {
//             return (
//                 <button onClick={() => onSignClick()} disabled={isSignedIn} className='flex 
//                 items-center justify-center mb-8 py-2 space-x-3 w-full border-4 rounded-xl shadow-sm
//                 hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'
//                 >
//                     <img src={Google} alt={Google} className="w-5"/>
//                     <span className='text-black'>Log in with Google</span>
//                 </button>
//             )
//         }
//     }

//     return (
//         <>
//            <div>{renderAuthButton()}</div> 
//         </>
//     )
// }



// export default GoogleAuth;
