function isEmail(email) {
    return /^\"\S\"|\w[\w, \.\w, \-, \+, \"\S+\"]+@[\w, \-]+\.\w+|\[?\d{3}\.\d{3}\.\d{3}\.\d{3}\]?$/.test(email);
};

function isPhoneNumber() {
    return /^\d{3}\d{3}\d{4}$/;
};

function isCreditCard() {
    // Code here
};

function isDomainName() {
    // Code here
};

module.exports = {
    isEmail: isEmail,
    isPhoneNumber: isPhoneNumber,
    isCreditCard: isCreditCard,
    isDomainName: isDomainName,
};