module.exports = {
    ConvertTitleToSlug: function (title) {
        if (!title) return '';
        let result = title.toLowerCase();
        // Xóa dấu tiếng Việt (ví dụ: á -> a)
        result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // Xử lý riêng chữ đ/Đ
        result = result.replace(/[đĐ]/g, 'd');
        // Xóa ký tự đặc biệt, chỉ giữ lại chữ, số và khoảng trắng
        result = result.replace(/[^a-z0-9\s-]/g, '');
        // Xóa khoảng trắng thừa ở đầu cuối
        result = result.trim();
        result = result.replace(/\s+/g, '-');
        return result;
    }
}
