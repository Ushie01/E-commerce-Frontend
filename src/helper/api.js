const baseUrl = "https://ecommerce-backend-3bm2.onrender.com";

export const signUp = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/api/v1/users/signup`, {
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
        return await( await fetch(`${baseUrl}/api/v1/users/login`, {
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

export const getAllProducts = async () => {
    try {
    return await( await fetch(`${baseUrl}/api/v1/products`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}

export const getSingleProduct = async (_id) => {
    try {
    return await( await fetch(`${baseUrl}/api/v1/products/${_id}`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}

