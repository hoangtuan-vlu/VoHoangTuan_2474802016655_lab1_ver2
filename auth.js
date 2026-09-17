/**
 * Mã sinh viên: 71ITSE41203 - Võ Hoàng Tuấn
 * Hàm kiểm tra đăng nhập hệ thống
 * Cập nhật: Bổ sung thêm logic kiểm tra định dạng và ghi chú phiên bản
 */
function login(username, password) {
    const lockedAccounts = ['locked_user'];

    // Ghi chú logic: Kiểm tra tài khoản có bị khóa hay không
    if (lockedAccounts.includes(username)) {
        return false;
    }
    
    // Kiểm tra tính hợp lệ cơ bản (không được để trống)
    if (!username || !password) {
        return false;
    }

    // Logic bổ sung: Username không được chứa khoảng trắng ở đầu hoặc cuối
    if (username !== username.trim()) {
        return false;
    }

    // Kiểm tra thông tin tài khoản hợp lệ
    if (username === 'admin' && password === '123') {
        return true;
    }
    
    return false;
}

module.exports = { login };
