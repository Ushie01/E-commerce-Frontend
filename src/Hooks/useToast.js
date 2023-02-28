import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = ({text, position}) => {
    toast(text, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    });
};
