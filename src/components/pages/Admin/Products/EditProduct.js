import 'react-toastify/dist/ReactToastify.css';
import { Toast } from '../../../../Hooks/useToast';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {
    createProduct,
    getSingleProduct,
    updateProduct
} from "../../../../helper/api";
import { validateCreateProduct } from "../../../../utils/validateInfo";
import Input from "../../../componentsItem/Input";
import add from "../../../../assets/add.svg"


const EditProduct = () => {
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [collectionsData, setCollectionsData] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [productGallery, setProductGallery] = useState([]);
    const [fileName, setFileName] = useState('');
    const [err, setErr] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [previewUrl, setPreviewUrl] = useState([]);
    console.log(productGallery);
    // console.log(fileName);
       
    useEffect(() => {
        if (id) {
            const singleProductApi = async (id) => {
                const res = await getSingleProduct(id);
                setProduct(res.data.product);
            }
            singleProductApi(id)   
        }
    }, [id]);

    useEffect(() => {
        if (product) {
            const { brand, category, collectionsData, description, name, price, size, productGallery } = product;
            setBrand(brand);
            setCategory(category);
            setCollectionsData(collectionsData);
            setDescription(description);
            setName(name);
            setPrice(price);
            setSize(size);
            // setProductGallery(productGallery)
        }
    }, [product]);

    const toggleSize = (event) => {
        const size = event.target.value;
        if (event.target.checked) {
            setSize((prevSizes) =>
                prevSizes.includes(size) ? "" : prevSizes + size
            );
        }
    };

    let formattedSizes;
    if(size){
        formattedSizes = size.split("").join(", ");
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();

		const formData = new FormData();
		formData.append('brand', brand);
		formData.append('category', category);
		formData.append('collectionsData', collectionsData);
		formData.append('description', description);
		formData.append('name', name);
		formData.append('price', price);
		formData.append('size', formattedSizes);
        for (let i = 0; i < productGallery.length; i++) {
            formData.append('gallery', productGallery[i]);
        }

        console.log(formData);
        
        const values = {
            brand,
            category,
            collectionsData,
            description,
            name,
            price,
            size: formattedSizes,
            productGallery
        }

        setErr(validateCreateProduct(values));

    	if (
			brand &&
			category &&
			collectionsData &&
			description &&
			name &&
			price &&
			size &&
            productGallery
		) {
            try {
                const res = await updateProduct({id, formData });
				if (res.status.includes('success')) {
					Toast({
                        text: 'Request successfull!! 🦅✨',
                        position: 'top-right',
                    });
                    setTimeout(() => {
                        setBrand('');
                        setCategory('');
                        setCategory('');
                        setDescription('');
                        setName('');
                        setPrice('');
                        setSize('');
                        setProductGallery('');
                        setFileName('');
                        setPreviewUrl('');
                    }, 3000);
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


	const handleFileUpload = (event) => {
        const files = event.target.files;
        const upDatedFile = [];
        const nameFile = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileNameParts = file.name.split('.');
            const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

            if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
                setError(
                    `File type not supported for file ${i+1}. Please select a jpeg, png, jpg, or svg file.`
                );
                setProductGallery(upDatedFile);
            } else {
                upDatedFile.push(file);
                nameFile.push(file.name);
                setFileName(nameFile);
                setProductGallery(upDatedFile);
                setPreviewUrl(upDatedFile);
                setError("")
            }
        }
	};

    return (
        <div className="p-4">
            <div className='flex flex-row items-start'>
                <p className='text-2xl font-bold mt-3'>Create Product:</p>
            </div>
            <div>
                <ToastContainer />
            </div>
            <form className="space-y-6">
                <div className="flex flex-col items-start justify-start mt-4 space-y-3">
                    <label className="text-md font-bold">Brand</label>
                    <Input
                        placeholder={"brand"}
                        type="text"
                        widthLength={"w-full"}
                        name="name"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                    {err?.brand && <p className='text-red-600 text-sm font-bold'>{err.brand}</p>}
                </div>
                
                <div className="flex flex-col items-start justify-start space-y-3">
                    <label className="text-md font-bold">Category</label>
                    <Input
                        placeholder={"category"}
                        type="text"
                        widthLength={"w-full"}
                        name="name"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    {err?.category && <p className='text-red-600 text-sm font-bold'>{err.category}</p>}
                </div>
                
                <div className="flex flex-col items-start justify-start space-y-3">
                    <label className="text-md font-bold">Collection Data</label>
                    <Input
                        placeholder={"Collection Data"}
                        type="text"
                        widthLength={"w-full"}
                        name="name"
                        value={collectionsData}
                        onChange={(e) => setCollectionsData(e.target.value)}
                    />
                    {err?.collectionsData && <p className='text-red-600 text-sm font-bold'>{err.collectionsData}</p>}
                </div>
                
                <div className="flex flex-col items-start justify-start space-y-3">
                    <label className="text-md font-bold">Description</label>
                        <Input
                            placeholder={"Description"}
                            type="text"
                            widthLength={"w-full"}
                            name="name"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {err?.description && <p className='text-red-600 text-sm font-bold'>{err.description}</p>}
                </div>
                
                <div className="flex flex-col items-start justify-start space-y-3">
                    <label className="text-md font-bold">Name</label>
                    <Input
                        placeholder={"Name"}
                        type="text"
                        widthLength={"w-full"}
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {err?.name && <p className='text-red-600 text-sm font-bold'>{err.name}</p>}
                </div>
                
                <div className="flex flex-col items-start justify-start space-y-3">
                    <label className="text-md font-bold">Price</label>
                    <Input
                        placeholder={"Price"}
                        type="number"
                        widthLength={"w-full"}
                        name="name"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {err?.price && <p className='text-red-600 text-sm font-bold'>{err.price}</p>}
                </div>
                
                
                <div className="flex flex-col items-start justify-start space-y-2">
                    <p className="font-bold text-xl">Selected sizes: {id ? size : formattedSizes}</p>
                    <div className="space-x-3">
                        <label>
                            <input type="radio" name="size" value="S" onClick={toggleSize} /> S
                        </label>
                        <label>
                            <input type="radio" name="size" value="M" onClick={toggleSize} /> M
                        </label>
                        <label>
                            <input type="radio" name="size" value="L" onClick={toggleSize} /> L
                        </label>
                        <label>
                            <input type="radio" name="size" value="X" onClick={toggleSize} /> X
                        </label>
                    </div>
                    {err?.size && <p className='text-red-600 text-sm font-bold'>{err.size}</p>}
                </div>
                
                <div className="flex flex-col items-start justify-start space-y-2">
                    <label className="text-md font-bold">Select max of 4 images</label>
                    <div>
                        <input
                            type='file'
                            id='fileInput'
                            name='gallery'
                            style={{ display: 'none' }}
                            onChange={handleFileUpload}
                            multiple
                        />
                        <label
                            htmlFor='fileInput'
                            className='flex items-center text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
                            <img
                                src={add}
                                alt={add}
                                className='h-12 w-12'
                            />
                        </label>
                    </div>
                    {error && <p className='text-red-600 text-sm font-bold'>{error}</p>}
                    {err.productGallery && <p className='text-red-600 text-sm font-bold'>{err.productGallery}</p>}
            
                    {
                        previewUrl.length > 0 ?
                            <div className='grid grid-cols-2 gap-2 items-center justify-center mt-5'>
                                {previewUrl && previewUrl.map((image, index) => (
                                    <div key={index} className='flex flex-row'>
                                        <p className='font-bold'>{`${index + 1}. `}</p>
                                        <img
                                            src={URL?.createObjectURL(image)}
                                            alt={URL?.createObjectURL(image)}
                                            className='h-28 w-20 rounded-lg shadow-lg'
                                        />
                                    </div>
                                ))}
                            </div>
                            :
                            <div className='grid grid-cols-2 gap-2 items-center justify-center mt-5'>
                                {product && product.productGallery?.map((image, index) => (
                                    <div key={index} className='flex flex-row'>
                                        <p className='font-bold'>{`${index + 1}. `}</p>
                                        <img
                                            src={`http://localhost:5000/api/v1/products/${image}`}
                                            alt={`http://localhost:5000/api/v1/products/${image}`}
                                            className='h-28 w-20 rounded-lg shadow-lg'
                                        />
                                    </div>
                                ))}
                            </div>
                            
                    }
                </div>

                <div className="flex left-0 right-0 bottom-10">
                    <button onClick={handleSubmit} className="w-full p-4 mt-8 bg-gradient-to-r shadow-2xl from-cyan-500 to-blue-500 rounded-lg font-bold text-white">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;