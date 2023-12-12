const SwitchButton = ({ isLogin, toggleLogin }) => { 
    const buttonText = isLogin ? "Signup" : "Login";

    return (
        <div className="mt-5">
            <button onClick={toggleLogin} className="w-full bg-white hover:bg-gray-100 border-2 border-purple-500 py-3 text-center text-purple-500 rounded">{buttonText}</button>
        </div>
    )
}

export default SwitchButton;