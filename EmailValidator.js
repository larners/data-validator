var Validator = require('./Validator')

class EmailValidator extends Validator
{
    constructor(){ super();}
    validate(email)
    {
        let list = email.split('@');
        let name = list[0];
        let mail = list[1];
        if (list.length != 2) return false;
        if (Validator.prototype.isNumber(parseInt(name[0])) || mail.match(/[0-9]+/)) return false;
        if (name == undefined || mail == undefined) return false;

        let temp = name.split('.');
        for(let i in temp)
            if (Validator.prototype.isSpecialSymbol(temp[i]) || temp[i] === '')
                return false;

        temp = mail.split('.');
        if (temp.length != 2) return false;
        for(let i in temp)
            if (Validator.prototype.isSpecialSymbol(temp[i]) || temp[i] === '')
                return false;

        return true;
    }
}

