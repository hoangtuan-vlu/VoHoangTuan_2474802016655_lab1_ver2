/**
 * Mã sinh viên: 71ITSE41203
 * Hàm kiểm tra đăng nhập hệ thống
 */
function login(username, password) {
    // Giả lập danh sách tài khoản bị khóa
    const lockedAccounts = ['locked_user'];

    // Kiểm tra tài khoản bị khóa
    if (lockedAccounts.includes(username)) {
        return false;
    }

    // Kiểm tra tính hợp lệ cơ bản
    if (!username || !password) {
        return false;
    }

    // Kiểm tra tài khoản mật khẩu hợp lệ
    if (username === 'admin' && password === '123') {
        return true;
    }

    return false;
}

// Xuất hàm để sử dụng với Jest
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { login };
}
