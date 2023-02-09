import { Link } from 'react-router-dom';


const Input = ({
    handleKeyDown,
    handleKeyUp,
    image, height,
    width,
    placeholder,
    value
}) => {
    return (
      <div className="flex flex-row rounded-md items-center justify-center space-x-2 border-gray-100 border-2">
            {
                image
                    ? 
                    <Link to="/" className="h-8 w-8 ml-5 mt-3">
                        <img src={image} alt={image} />
                    </Link> : ""
            }

            <input
                onKeyDown={handleKeyDown}
                onBlur={handleKeyUp}
                type="search"
                className={`${!image ? "p-4" : ""} ${height} ${width} input text-xs border-white font-black`}
                placeholder={placeholder}
                value={value}

            />
      </div>
    );
}

export default Input;