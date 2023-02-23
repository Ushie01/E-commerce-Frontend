// const baseUrl = "https://ecommerce-backend-3bm2.onrender.com/api/v1";
const baseUrl = "http://localhost:5000/api/v1";


export const signUp = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/users/signup`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async (payload) => { 
    try {
        return await( await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const googleSignIn = async (payload) => { 
    try {
        return await( await fetch(`${baseUrl}/users/googleAccountLogin`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/text',
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getAllProducts = async () => {
    try {
        return await( await fetch(`${baseUrl}/products`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}

export const getSingleProduct = async (id) => {
    try {
        return await( await fetch(`${baseUrl}/products/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}
