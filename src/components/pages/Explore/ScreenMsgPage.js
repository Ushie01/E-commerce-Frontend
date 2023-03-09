import Button from '../../componentsItem/Button';
import { Link } from 'react-router-dom';

const ScreenMsgPage = ({
  res,
  onClick, 
  linkRoute,
  image, 
  direction, 
  button, 
  secondButton
}) => {
  // const refresh = () => window.location.reload(r)  
  return (
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className={`flex m-3 h-20 text-3xl bg-cyan-400 w-20 shadow-2xl rounded-full`}>
          <img src={image} alt={image} className="m-auto h-16 w-16" />
        </div>
        <p className="font-bold text-2xl">{res}</p>
        <p className="text-xs text-gray-400">
          Thank you for shopping using Juliana's Brand
        </p>
        {
          button
          ?
          <>
            <div className="flex items-center justify-center">
              <Link to={linkRoute}>
                <Button
                  text={direction}
                  onClick={onClick}
                  bgColor="red"
                  textColor="white" 
                />
              </Link>
              </div>
              {
                secondButton
                  ?
                  <div className="flex items-center justify-center border-2" 
                    onClick={() => window.location.reload(true)}
                  >
                      <Button text='Cancel' textColor="black" />
                  </div>
                  :
                  ""
              }
          </>
            :
          ""  
        }
      </div>
    );
}

export default ScreenMsgPage;