import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from '../../../../Hooks/useToast';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Input from '../../../componentsItem/Input';
import { getSingleUser, updateSingleUser } from '../../../../helper/api';


const EditUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [user, setUser] = useState('');
    const [err,] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const singleUserApi = async (id) => {
                const res = await getSingleUser(id);
                setUser(res.data);
            }
            singleUserApi(id)   
        }
    }, [id]);

    useEffect(() => {
        if (user) {
            const { name, email, phoneNo } = user;
            setName(name);
            setEmail(email);
            setPhoneNo(phoneNo);
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {name, email, phoneNo};

        if (name && email && phoneNo) {
            try {
                const res = await updateSingleUser({id, payload });
                if (res.status.includes('success')) {
                    Toast({
                        text: 'Request successfull!! 🦅✨',
                        position: 'top-right',
                    });
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            setError('Make sure all field are curretly fill')
            Toast({
                text: 'Request failed!! 💥💥',
                position: 'top-left',
            });
        }
    }

    return (
        <>
            <div className="p-4">
                <div className='flex flex-row items-start'>
                    <p className='text-2xl font-bold mt-3'>Edit User:</p>
                </div>
                <div>
                    <ToastContainer />
                </div>
                <form className='space-y-6'>
                    <div className="flex flex-col items-start justify-start mt-4 space-y-3">
                        <label className="text-md font-bold">Name</label>
                        <Input
                            placeholder={"name"}
                            type="text"
                            widthLength={"w-full"}
                            name="name"
                            value={name ? name : 'fetching..'}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {err?.name && <p className='text-red-600 text-sm font-bold'>{err.brand}</p>}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start mt-4 space-y-3">
                        <label className="text-md font-bold">Email</label>
                        <Input
                            placeholder={"email"}
                            type="text"
                            widthLength={"w-full"}
                            name="email"
                            value={email ? email : 'fetching..'}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {err?.email && <p className='text-red-600 text-sm font-bold'>{err.email}</p>}
                    </div>

                    <div className="flex flex-col items-start justify-start mt-4 space-y-3">
                        <label className="text-md font-bold">Phone Number</label>
                        <Input
                            placeholder={"phone number"}
                            type="text"
                            widthLength={"w-full"}
                            name="phoneNo"
                            value={phoneNo ? phoneNo : 'fetching..'}
                            onChange={(e) => setPhoneNo(e.target.value)}
                        />
                        {err?.phoneNo && <p className='text-red-600 text-sm font-bold'>{err.phoneNo}</p>}
                    </div>
                    
                    {error && <p className='text-red-600 text-sm font-bold'>{error}</p>}
                    <div className="flex left-0 right-0 bottom-3">
                        <button onClick={handleSubmit} className="w-full p-4 mt-8 bg-gradient-to-r shadow-2xl from-cyan-500 to-blue-500 rounded-lg font-bold text-white">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUser;