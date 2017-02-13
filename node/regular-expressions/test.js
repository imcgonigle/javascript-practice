var assert = require('assert');
var regexFunctions = require('./regex-functions.js');

describe('Regex Functions', function() {
    describe('- isEmail()', function() {
        it('Should return true if the input is a valid email.', function() {
            assert.equal(true, regexFunctions.isEmail('johnsmith@gmail.com'));
            assert.equal(true, regexFunctions.isEmail('johnsmith@yahoo.co.uk'));
            assert.equal(true, regexFunctions.isEmail('leeroy_james@gmail.co.uk'));
            assert.equal(true, regexFunctions.isEmail('john.smith.is@gmail.com'));
            assert.equal(true, regexFunctions.isEmail('email@123.123.123.123'));
        });

        it('Should return true even for emails with double quotes.', function() {
            assert.equal(true, regexFunctions.isEmail('"email"@gmail.com'));
        });
        
        it('Should return true even for emails with square brackets.', function() {
            assert.equal(true, regexFunctions.isEmail('email@[123.123.123.123]'));
        });

        it('Should return true even for emails with hyphens.', function() {
            assert.equal(true, regexFunctions.isEmail('john-smith@gmail.com'));
            assert.equal(true, regexFunctions.isEmail('john.smith.is@gmail-something.com'));
        });

        it('Should return true even for emails with plus signs.', function() {
            assert.equal(true, regexFunctions.isEmail('john+smith@gmail.example.com'));
        });

        it('Should return false if the email is blank', function() {
            assert.equal(false, regexFunctions.isEmail(''));
        });

        it('Should return false if the email is missing @', function() {
            assert.equal(false, regexFunctions.isEmail('johnsmith.com'));
        });

        it('Should return false if the part before the @ is missing', function() {
            assert.equal(false, regexFunctions.isEmail('@johnsmith.com'));
        });

        it('Should return false if the top level domain is missing', function() {
            assert.equal(false, regexFunctions.isEmail('john@gmail'));
        });

        it('Should return false if it uses invalid characters', function() {
            assert.equal(false, regexFunctions.isEmail('#@%^%#$@#$@#.com'));
            assert.equal(false, regexFunctions.isEmail('あいうえお@example.com'));
        });

        it('Should return false if it contains spaces', function() {
            assert.equal(false, regexFunctions.isEmail('Joe Smith <email@example.com>'));
            assert.equal(false, regexFunctions.isEmail('email@example.com (Joe Smith)'));
        });

        it('Should return false if their are too many @ signs', function() {
            assert.equal(false, regexFunctions.isEmail('email@example@example.com'));
        });

        it('Should return false if a . is followed by an invalid character', function() {
            assert.equal(false, regexFunctions.isEmail('email.@example.com'));
            assert.equal(false, regexFunctions.isEmail('email..email@example.com'));
        });

        it('Should return false if ip address has too many numbers', function() {
            assert.equal(false, regexFunctions.isEmail('email@111.222.333.4444'));
        });

        it('Should return false if the input is not a valid unusual email', function() {
            assert.equal(false, regexFunctions.isEmail('"(),:;<>[\]@example.com'));
            assert.equal(false, regexFunctions.isEmail('just"not"right@example.com'));
            assert.equal(false, regexFunctions.isEmail('this\ is\"really\"not\\\\allowed@example.com'));
        });

        it('Should return true for unusual email address too.', function() {
            assert.equal(true, regexFunctions.isEmail('much."more\ unusual"@gmail.com'));
            assert.equal(true, regexFunctions.isEmail('very.unusual."@".unusual.com@example.com'));
            assert.equal(true, regexFunctions.isEmail('very."(),:;<>[]".VERY@\\"very".unusual@strange.example.com'));
        });
    });

    // describe('- isPhoneNumber()', function() {
    //     it('Should return true if the input is a valid email.', function() {
    //         // TODO:Write tests
    //     });

    //     it('Should return false if the input is not a valid email', function() {
    //         // TODO:Write tests
    //     });
    // });

    // describe('- isCreditCard()', function() {
    //     it('Should return true if the input is a valid email.', function() {
    //         // TODO:Write tests
    //     });

    //     it('Should return false if the input is not a valid email', function() {
    //         // TODO:Write tests
    //     });
    // });

    // describe('- isDomainName()', function() {
    //     it('Should return true if the input is a valid email.', function() {
    //         // TODO:Write tests
    //     });

    //     it('Should return false if the input is not a valid email', function() {
    //         // TODO:Write tests
    //     });
    // });
});