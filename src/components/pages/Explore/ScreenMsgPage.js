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
		<div>
			<div className='flex flex-col items-center justify-center sapce-y-3'>
				<div
					className={`flex m-3 h-20 text-3xl bg-cyan-400 w-20 shadow-2xl rounded-full`}>
					<img
						src={image}
						alt={image}
						className='m-auto h-16 w-16'
					/>
				</div>
				<p className='font-bold text-2xl'>{res}</p>
				<p className='text-xs text-gray-400'>
					Thank you for shopping using Euphorya's Brand
				</p>
			</div>
			{button ? (
				<>
					<Link
						to={linkRoute}
					>
						<div className='mt-5 p-4'>
							<Button
								text={direction}
								onClick={onClick}
								bgColor='red'
								textColor='white'
							/>
						</div>
					</Link>

					{secondButton ? (
						<div
							className='flex items-center justify-center m-4 border-2'
							onClick={() => window.location.reload(true)}>
							<Button
								text='Cancel'
								textColor='black'
							/>
						</div>
					) : (
						''
					)}
				</>
			) : (
				''
			)}
		</div>
	);
}

export default ScreenMsgPage;