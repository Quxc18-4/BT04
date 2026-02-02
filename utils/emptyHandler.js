// Kiểm tra rỗng
const isEmpty = function (value) {
    if (value === undefined || value === null) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    return false;
};

// Kiểm tra số hợp lệ (Kiểm tra rỗng và số >= 0)
const isValidNumber = function (value) {
    if (isEmpty(value) || value < 0) return false; 
    return !isNaN(value);
};

module.exports = {
    isEmpty,
    isValidNumber
};