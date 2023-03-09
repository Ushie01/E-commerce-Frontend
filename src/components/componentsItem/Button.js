const Button = ({ text, bgColor, textColor, onClick, disabled }) => {
    return (
        <>
            <button
                className={`${disabled ? "opacity-30" : " "} rounded-md h-14 w-80 shadow-2xl bg-${bgColor}-600 text-${textColor} m-auto text-xl font-bold `}
                onClick={onClick}
                disabled={disabled}
            >
                {disabled ? 'Loading...' : text}
            </button>
        </>
    )
}

export default Button;
