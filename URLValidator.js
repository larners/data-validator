let Validator = require('./Validator')


class URLValidator extends Validator {
    constructor() {
        super()
    }

    validate(url) {
        let regex = /^(ftp|http|https):\/\/[^ "]+$/
        if (regex.test(url)) {
            return true
        }
        return false

    }
};
