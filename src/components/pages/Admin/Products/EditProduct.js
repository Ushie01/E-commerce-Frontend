import { useState } from "react";
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
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');
    const [selectedSizes, setSelectedSizes] = useState("");

    const toggleSize = (event) => {
        const size = event.target.value;
        if (event.target.checked) {
            setSelectedSizes((prevSizes) =>
                prevSizes.includes(size) ? "" : prevSizes + size
            );
        }
    };

    const formattedSizes = selectedSizes.split("").join(", ");
    const values = {
        brand,
        category,
        collectionsData,
        description,
        name,
        price,
        size,
        fileName: fileName.name,

    }

    console.log(values);


	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		const fileNameParts = file.name.split('.');
		const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

		if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
			setError(
				'File type not supported. Please select a jpeg, png, jpg, or svg file.'
			);
			setFileName('');
		} else {
			setFileName(file);
			setError('');
		}
	};

    return (
        <div className="p-4">
            <div className='flex flex-row items-start'>
                <p className='text-2xl font-bold mt-3'>Edit Products:</p>
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
                            {/* {err?.country && <p className='text-red-600 text-sm font-bold'>{err.country}</p>} */}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <label className="text-md font-bold">Category</label>
                            <Input
                                placeholder={"First Name"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            {/* {err?.firstName && <p className='text-red-600 text-sm font-bold'>{err.firstName}</p>} */}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <label className="text-md font-bold">Collection Data</label>
                            <Input
                                placeholder={"Last Name"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={collectionsData}
                                onChange={(e) => setCollectionsData(e.target.value)}
                            />
                            {/* {err?.lastName && <p className='text-red-600 text-sm font-bold'>{err.lastName}</p>} */}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <label className="text-md font-bold">Description</label>
                            <Input
                                placeholder={"Street Address"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {/* {err?.address && <p className='text-red-600 text-sm font-bold'>{err.address}</p>} */}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <label className="text-md font-bold">Name</label>
                            <Input
                                placeholder={"State/Province/Region"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {/* {err?.city && <p className='text-red-600 text-sm font-bold'>{err.city}</p>} */}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <label className="text-md font-bold">Price</label>
                            <Input
                                placeholder={"Zip Code"}
                                type="number"
                                widthLength={"w-full"}
                                name="name"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            {/* {err?.postalCode && <p className='text-red-600 text-sm font-bold'>{err.postalCode}</p>} */}
                    </div>
                    
                    
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <label className="text-md font-bold">Size</label>
                            <Input
                                placeholder={"Phone Number"}
                                type="number"
                                widthLength={"w-full"}
                                name="name"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                            {/* {err?.phoneNumber && <p className='text-red-600 text-sm font-bold'>{err.phoneNumber}</p>} */}
                    </div>
                    <div>
                        <p className="font-bold text-xl">Selected sizes: {formattedSizes}</p>
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
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-2">
                        <label className="text-md font-bold">Select max of 4 images</label>
                        <div>
                            <input
                                type='file'
                                id='fileInput'
                                name='file'
                                style={{ display: 'none' }}
                                onChange={handleFileUpload}
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
                    </div>

                    <div className="flex left-0 right-0 bottom-10">
                        <button className="w-full p-4 mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-white">Submit</button>
                    </div>
                </form>
        </div>
    )
}

export default EditProduct;