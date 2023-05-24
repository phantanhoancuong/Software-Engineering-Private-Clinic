function validation(value) {
    let error = {}

    if(value.username === ''){
        error.username = 'Name can not be empty'
    }
    else{
        error.username = 'Wrong name'
    }

    if(value.password === ''){
        error.password = 'Password can not be empty'
    }
    else{
        error.password = 'Wrong pass'
    }
}

export default validation;