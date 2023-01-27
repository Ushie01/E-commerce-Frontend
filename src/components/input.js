const input = () => {
    return (
        <div className="flex flex-row items-center justify-center bg-white 2xl:w-72">
            <Link to="/" className="h-4 w-4 ml-2">
                <img src={Search} alt={Search} />
            </Link>
            <input
                type="search"
                className="h-10 w-36 border-white ml-1"
                placeholder="Search your task"
            />
        </div>
    )
}

export default input;