export const validateSignIn = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email is Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is invalid"
    }
    
    if (!values.password) {
        errors.password = "Password is Required"
    }
    return errors;
}


export const validateSignUp = (values) => {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = "Username Required"
    }
    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is invalid"
    }
    if (!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 8) {
        errors.password = "Password need to be 8 characters and above"
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Password is Required"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords don't match"
    }
    return errors;
}

export const validateCreateNewPassword = (values) => {
    let errors = {};

    if (!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 6) {
        errors.password = "Password need to be 6 characters and above"
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Password is Required"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords don't match"
    }
    return errors;
}

export const validateCreateReview = (values) => {
    let errors = {};

    if (!values.rating) {
        errors.rating = "Please Select A Star"
    }

    if (!values.input) {
        errors.input = "Please Provide A Review Text"
    }

    return errors;
}

export const validateAddress = (values) => {
    let errors = {};

    if (!values.country) {
        errors.country = "Country Is Required"
    }

    if (!values.firstName) {
        errors.firstName = "First Name Is Required"
    }

    if (!values.lastName) {
        errors.lastName = "Last Name Is Required"
    }

    if (!values.address) {
        errors.address = "Address Is Required"
    }

    if (!values.city) {
        errors.city = "City Is Required"
    }

    if (!values.zipCode) {
        errors.zipCode = "Zip Code Is Required"
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = "Phone Number Is Required "
    }

    return errors;
}

export const validateResetPassword = (values) => {
    let errors = {};

    if (!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 8) {
        errors.password = "Password need to be 8 characters and above"
    }
    
    if (!values.confirmPassword) {
        errors.confirmPassword = "Password is Required"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords don't match"
    }
    return errors;
}