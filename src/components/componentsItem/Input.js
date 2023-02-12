import { Link } from 'react-router-dom';


const Input = ({
    handleKeyDown,
    handleKeyUp,
    image, height,
    width,
    placeholder,
    value,
    type
}) => {
    return (
        <div className={`flex flex-row rounded-md h-12 items-center justify-start ${width} ${height} space-x-2 border-gray-200 border-2`}>
            {
                image
                    ? 
                    <Link to="/">
                        <img src={image} alt={image} className="h-5 w-5 m-3"/>
                    </Link>
                    :
                ""
            }

            <input
                onKeyDown={handleKeyDown}
                onBlur={handleKeyUp}
                type={type}
                className={`${!image ? "p-4" : ""} ${width} text-sm font-thin`}
                placeholder={placeholder}
                value={value}

            />
      </div>
    );
}

export default Input;