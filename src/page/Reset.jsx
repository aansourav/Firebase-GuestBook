import {resetPassword} from "../firebase.js";
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Reset = () => {

    const [email, setEmail] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        resetPassword(email)
    }

    return (
        <div className='flex flex-col p-4 justify-center items-center'>
            <h1 className='text-3xl my-2'>Reset Password</h1>
            <form className='flex flex-col'>
                <div className='my-1'>
                    <label htmlFor='email'>Email address</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email address'
                        className='mx-2 my-2 p-1 border border-gray-100 rounded-sm'
                    />
                </div>
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='bg-black text-white py-1 px-3 rounded-md m-auto'
                >
                    Send Email
                </button>

                <p className='my-2'>
                    Dont You Have an Account?{" "}
                    <NavLink to='/register' className='underline'>
                        Register
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default Reset;