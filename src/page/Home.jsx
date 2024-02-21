import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase.js";
import {signOut} from "firebase/auth";


const Home = () => {

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const handleClick = () => {
        signOut(auth).then(() => {
            navigate("/login");
            console.log('SignedOut');
        }).catch((error) => console.log(error))

    }
    if (loading) return <h1>Loading user...</h1>
    return (
        <div className="text-center mt-12">
            <h1>Welcome {user.email} </h1>
            <p>
                <button className='mt-4 bg-blue-500 rounded-lg border border-black px-4 py-2 font-bold'
                        onClick={handleClick}>Logout
                </button>
            </p>
        </div>
    );
};

export default Home;