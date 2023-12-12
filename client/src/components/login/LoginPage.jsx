import { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import './LoginPage.css';

const LoginPage = () => {
    const [login, setLogin] = useState(false);

    function toggleLogin() {
        setLogin(!login);
    }

    return (
        <div className="container m-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div id="left-form" className="w-full lg:w-1/2 flex flex-col items-center justify-end  bg-no-repeat bg-cover bg-center"></div>
            {login ? (<LoginForm toggleLogin={toggleLogin} />) : (<SignupForm toggleLogin={toggleLogin} />)}
          </div>
        </div>
    )
}

export default LoginPage;