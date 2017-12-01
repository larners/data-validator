var Validator = require('./Validator');

class ArmPhoneValidator extends Validator{
    constructor(){ super();}
    validate(phone)
    {
        let op_codes = ['91', '99', '96', '43', '55', '95', '41', '44', '93', '94', '77', '98', '49','10']
        let op_code = '';
        let num = '';
        if(Validator.prototype.isString(phone)){
            if(phone.substring(0,4) === '+374' && parseInt(phone.substring(4,12)).toString().length === 8) {
                op_code = phone.substring(4, 6);
                num = phone.substring(6,12);
            }
            else if(phone[0] === '0' && parseInt(phone.substring(1,9)).toString().length === 8) {
                op_code = phone.substring(1, 3);
                num = phone.substring(3, 9);
            }
            if(op_codes.includes(op_code))
            {
                return true;
            }
        }
        return false;
    }
}
