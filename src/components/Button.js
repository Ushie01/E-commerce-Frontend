const Button = ({text}) => {
    return (
        <>
            <button className="w-full rounded-md h-16 w-96 m-2 bg-red-600 text-white m-auto text-xl font-bold">
                {text}
            </button>
        </>
    )
}

export default Button;