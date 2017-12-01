'use strict';

class Validator {
    isString(str) {
        return typeof str === 'string'
    }// returns true if str is string

    isNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    } // returns true if num is a number

    isInteger(num) {
        return typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value;
    }; // returns true if num is an integer

    isFloat(num) {
        return typeof num === 'number' && isFinite(num)
    } // returns true if num is a float

    isSpecialSymbol(sym) {
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(sym);
        //return !sym.match(/[a-zA-Z0-9]+/);
    }// returns true if sym does not contain alpha (a-z, A-Z) and numbers (0-9)

    isDate(dateStr) {
        let datePat = /^(\d{1,2})(\/|-|\.)(\d{1,2})(\/|-|\.)(\d{4})$/;
        let matchArray = dateStr.match(datePat);

        if (matchArray == null) {
            console.log("Please enter date as either mm/dd/yyyy or mm-dd-yyyy or mm.dd.yyyy.");
            return false;
        }

        let month = matchArray[1];
        let day = matchArray[3];
        let year = matchArray[5];

        if (month < 1 || month > 12) {
            console.log("Month must be between 1 and 12.");
            return false;
        }

        if (day < 1 || day > 31) {
            console.log("Day must be between 1 and 31.");
            return false;
        }

        if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
            console.log("Month " + month + " doesn't have 31 days!")
            return false;
        }

        if (month == 2) {
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (day > 29 || (day == 29 && !isleap)) {
                console.log("February " + year + " doesn't have " + day + " days!");
                return false;
            }
        }
        return true;
// returns true if d is a valid date

    }

}

module.exports = Validator;