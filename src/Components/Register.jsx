import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {

    const {userCreate,googleLogin}= use(AuthContext) ;
    const navigate= useNavigate();


    const hundleregister = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.photourl.value;

        if(password.length < 6){
            toast("password 6 charecter must");
            return;
        }
        if(!/[a-z]/.test(password)){
            toast("Password Lowercase must");
            return;
        }
        if(!/[A-Z]/.test(password)){
            toast("Password upercase must");
            return;
        }

        const obj ={
            displayName: name,
            photoURL: url
        }

        userCreate(email,password)
        .then( () =>{
            
            updateProfile(auth.currentUser ,obj)
            .then( () =>{
                toast("Account create successfully");
            })
            navigate('/')
        })
        .catch(()=>{
            toast("Please enter a valid information");
        })
    }

    const hundleGoogle= () =>{
        googleLogin()
        .then( ()=>{
            toast("Google register successfully");
            navigate('/')
        })
        
    }

    return (
 <div className="card bg-gray-300 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl border-2 mb-24 border-orange-600">
            <h3 className="text-3xl text-center font-bold">Registration now</h3>
            <div className="card-body">
                <form onSubmit={hundleregister}  className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Enter your name" required/>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />

                    <label className="label">Photo Url</label>
                    <input type="text" name='photourl' className="input" placeholder="Photo url" required/>

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required/>

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already Have an account? Please <Link className='text-blue-400 underline' to="/login">Login</Link></p>
                
                <button onClick={hundleGoogle}  className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Register with Google
                </button>
            </div>
        </div>        
    );
};

export default Register;