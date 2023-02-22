import { Link } from 'react-router-dom';


const Input = ({
    handleKeyDown,
    handleKeyUp,
    image, height,
    width, placeholder,
    value, type,
    onChange, name,
    testWidth
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
                className={`${!image ? "pl-3" : ""} ${width} ${testWidth} font-bold`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                required
            />
      </div>
    );
}

export default Input;