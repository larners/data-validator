var Validator = require('./Validator');

class PasswordValidator extends Validator {
    constructor() {super();}
    validate(password)
    {
        if(Validator.prototype.isString(password))
            if(password.length > 6  && password.length < 20)
                return password.indexOf("password") === -1;
        return false;
    }
}

