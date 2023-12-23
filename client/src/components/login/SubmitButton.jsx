import ReCAPTCHA from "react-google-recaptcha";
import PolicyModal from "./PolicyModal";

const SubmitButton = ({ isLogin, recaptchaRef }) => {
    const buttonText = isLogin ? "Login" : "Sign up";
    const siteKey = "6LcknDApAAAAAACF9x3Q7X1VMe4mWa2KWsJSAwbD";
    
    function onChange(value) {
        const recaptchaValue = recaptchaRef.current.getValue();
        console.log("Captcha value:", recaptchaValue);
      }

    return (
        <div className="mt-5">
            <button className="w-full bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 py-3 text-center text-white rounded">{buttonText}</button>
            {isLogin ? (<></>) : (<><PolicyModal /><ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} onChange={onChange} /></>)}

        </div>
    )
}

export default SubmitButton;