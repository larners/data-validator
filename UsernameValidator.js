var Validator = require('./Validator');

class UsernameValidator extends Validator{
    constructor(){ super();}
    validate(username){
        if(Validator.prototype.isString(username) && !Validator.prototype.isSpecialSymbol(username))
            if(username.length > 4  && username.length < 24)
                return true;
        return false;
    }
}
