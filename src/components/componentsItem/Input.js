import { Link } from 'react-router-dom';

const Input = ({
    handleKeyDown,
    handleKeyUp,
    image, height,
    width, placeholder,
    value, type,
    onChange, name,
    testWidth, widthLength
}) => {
    return (
        <div className={`flex flex-row rounded-md h-12 ${widthLength} items-center justify-start p-2 ${height} space-x-3 border-gray-200 border-2`}>
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
                className={`${width} ${testWidth} ${widthLength} font-bold`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
      </div>
    );
}

export default Input;