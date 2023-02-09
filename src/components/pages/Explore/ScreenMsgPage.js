import Button from '../../componentsItem/Button';

const ScreenMsgPage = ({res, image, direction}) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex m-3 h-20 text-3xl bg-cyan-400 w-20 shadow-2xl rounded-full">
          <img src={image} alt={image} className="m-auto h-16 w-16" />
        </div>
        <p className="font-bold text-2xl">{res}</p>
        <p className="text-xs text-gray-400">
          Thank you for shopping using Juliana's Brand
        </p>
        <div className="flex items-center justify-center">
          <Button text={direction} />
        </div>
      </div>
    );
}

export default ScreenMsgPage;