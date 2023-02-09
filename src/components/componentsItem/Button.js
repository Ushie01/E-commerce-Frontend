const Button = ({text}) => {
    return (
        <>
            <button className="rounded-md h-14 w-96 shadow-xl bg-red-600 text-white m-auto text-xl font-bold">
                {text}
            </button>
        </>
    )
}

export default Button;