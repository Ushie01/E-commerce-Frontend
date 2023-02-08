const Button = ({text}) => {
    return (
        <>
            <button className="rounded-md h-12 w-80 bg-red-600 text-white m-auto text-md font-bold">
                {text}
            </button>
        </>
    )
}

export default Button;