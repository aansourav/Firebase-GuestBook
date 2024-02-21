import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {loginWithEmailAndPassword, signInWithGoogle} from "../firebase";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginWithEmailAndPassword(email, password);
            console.log(user);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };
    const handleGoogleClick = async () => {
        await signInWithGoogle().then( (user) => {
            user.user && navigate('/home')
        })
    }
    return (
        <div className='flex flex-col p-4 justify-center items-center'>
            <h1 className='text-3xl my-2'>Login</h1>
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
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Password'
                        className='mx-2 my-2 p-1 border border-gray-100 rounded-sm'
                    />
                </div>
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='bg-black text-white py-1 px-3 rounded-md m-auto'
                >
                    Login
                </button>
            </form>
            <div className="mt-3 flex items-center justify-center bg-gray-700 rounded-lg ">
                <button
                    onClick={handleGoogleClick}
                    className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy"
                         alt="google logo"/>
                    <span>Login with Google</span>
                </button>
            </div>
            <p className='my-2'>
                Dont Have an Account?{" "}
                <NavLink to='/register' className='underline'>
                    SignUp Here
                </NavLink>
            </p>
            <p className='underline my-3'>Forgot Password?{' '}<NavLink to='/reset' className='underline'>
                Reset here
            </NavLink></p>
        </div>
    );
};

export default Login;
