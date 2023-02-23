import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { googleSignIn } from '../../../helper/api';
import google from './../../../assets/google.png';


const GoogleAuth = () => {
    const [auth, setAuth] = useState();
    const [signIn, setSignIn] = useState([]);
    const [, setSignOut] = useState(false);
    const [, setIsSignedIn] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                setAuth(auth);
                onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange);
            })
        })
        setIsSignedIn(true);
        const onAuthChange = (isSignedIn) => {
            const auth = window.gapi.auth2.getAuthInstance();
            if (isSignedIn) {
                setSignIn([
                    auth.currentUser.get().getId(), 
                    auth.currentUser.get().qv.dw
                ]);

            } else {
                setSignOut(true);
            } 
        }

    }, [signIn]);

    const onSignClick = async () => {
        console.log(signIn);
        console.log(signIn[1]);
        if (signIn[1]) {
            await googleSignIn(signIn[1]);
            
            auth.signIn();
            // navigate('/');
        }
    };

  
    return (
        <button onClick={() => onSignClick()} className="flex flex-row bg-white rounded-md items-center justify-center 
        space-x-2 border-gray-200 border-2 w-80 h-16 font-bold text-gray-400"
        >
            <img src={google} alt={google} className="h-7 w-7" />
            <p>Login with Google</p>
        </button>
    )
    
}



export default GoogleAuth;
