import ReCAPTCHA from "react-google-recaptcha";
import { Modal } from 'flowbite-react';

const SubmitButton = ({ isLogin }) => {
    const buttonText = isLogin ? "Login" : "Sign up";
    const siteKey = "6LcknDApAAAAAACF9x3Q7X1VMe4mWa2KWsJSAwbD";

    function onChange(value) {
        console.log("Captcha value:", value);
      }

    return (
        <div className="mt-5">
            <button className="w-full bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 py-3 text-center text-white rounded">{buttonText}</button>
            {isLogin ? (<></>) : 
            (<div className="mb-4 text-xs">By signing up, you agree to the <a href="#" className="text-purple-500 font-semibold">Terms of Service</a> and <a href="#" className="text-purple-500 font-semibold">Party Policy</a>.</div>)}
            <ReCAPTCHA sitekey={siteKey} onChange={onChange} />,
        </div>
    )
}

export default SubmitButton;