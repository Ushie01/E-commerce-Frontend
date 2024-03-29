const baseUrl = "https://ecommerce-backend-3bm2.onrender.com/api/v1";
const baseUrlFw = 'https://api.flutterwave.com/v3';
// const publicKey = process.env.FLW_PUBLIC_KEY;
const secretKey = process.env.REACT_APP_FLWS_KEY;



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
        const response = await fetch(`${baseUrl}/products`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            // mode: 'no-cors', // add this line to enable no-cors mode
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};


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

export const userCreateReview = async (payload, id) => {
    const userDetails = localStorage.getItem('user');
    const parsedDetails = JSON.parse(userDetails);
    try {
        return await (await fetch(`${baseUrl}/products/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails?.token}`
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.error(error)
    }
}

export const postOrder = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders`, {
        method: 'POST',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const forgetPassword = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/users/forgotPassword`, {
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

export const resetPassword = async ({ payload, tokenRes }) => {
    try {
        return await (await fetch(`${baseUrl}/users/resetPassword/${tokenRes}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
        })).json();
    } catch (error) {
        console.log(error);
    }
};


export const userUpdateProfile = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/updateMe`, {
        method: 'PATCH',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}


export const userUpdatePassword = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/updatePassword`, {
        method: 'PATCH',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getUserOrder = async (userId) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${userId}/orders`, {
        method: 'GET',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        }
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const accountVerification = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/users/emailVerification`, {
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

export const getSingleUserOrder = async (orderId) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders/userOrder/${orderId}`, {
        method: 'GET',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        }
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getAllUser = async () => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users`, {
        method: 'GET',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        }
    })).json()
    } catch (error) {
        console.error(error)
    }
}

//CREATE PRODUCT FUNCTION
export const createProduct = async (formData) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = userDetails ? JSON.parse(userDetails) : null;

        const response = await fetch(`${baseUrl}/products`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${parsedDetails?.token}`
            }
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//UPDATE PRODUCT FUNCTION
export const updateProduct = async ({id, formData}) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = userDetails ? JSON.parse(userDetails) : null;

        const response = await fetch(`${baseUrl}/products/${id}`, {
            method: 'PATCH',
            body: formData,
            headers: {
                Authorization: `Bearer ${parsedDetails?.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = userDetails ? JSON.parse(userDetails) : null;

        const response = await fetch(`${baseUrl}/products/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${parsedDetails?.token}`
            }
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteUser = async (id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${id}`, {
        method: 'DELETE',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        }
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getSingleUser = async (id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${id}`, {
        method: 'GET',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        }
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const updateSingleUser = async ({id, payload}) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${id}`, {
        method: 'PATCH',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getAllOrder = async () => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders`, {
        method: 'GET',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        }
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getUserOrderAdmin = async (id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders/userOrder/${id}`, {
        method: 'GET',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        },
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const confirmDelivery = async ({ id, payload }) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders/userOrder/${id}`, {
        method: 'PATCH',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getAllReview = async () => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/reviews`, {
        method: 'GET',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        }
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const resendToken = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/resendToken`, {
        method: 'PATCH',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails?.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}


export const flwPaymentMethod = async (payload) => {
  try {
    const response = await fetch(`${baseUrlFw}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export const confirmPayment = async (transactionId) => { 
    try {
        const response = await fetch(`/api?transaction_id=${transactionId}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${secretKey}`,
            }
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};
