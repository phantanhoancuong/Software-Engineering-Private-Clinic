function validation(value) {
    let error = {}

    if(value.username === ''){
        error.username = 'Name cannot be empty'
    }
    else{
        error.username = 'Wrong username'
    }

    if(value.password === ''){
        error.password = 'Password cannot be empty'
    }
    else{
        error.password = 'Wrong password'
    }
}

export default validation;