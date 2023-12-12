const SubmitButton = ({ isLogin }) => {
    const buttonText = isLogin ? "Login" : "Sign up";
    return (
        <div className="mt-5">
            <button className="w-full bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 py-3 text-center text-white rounded">{buttonText}</button>
            {isLogin ? ():(<div className="text-xs">By signing up, you agree to the <a href="#" className="text-purple-500 font-semibold">Terms of Service</a> and <a href="#" className="text-purple-500 font-semibold">Party Policy</a>.</div>)}
        </div>
    )
}

export default SubmitButton;