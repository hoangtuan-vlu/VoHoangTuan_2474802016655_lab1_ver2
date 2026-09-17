/**
 * Mã sinh viên: 71ITSE41203
 * Regression Test - Kiểm tra các trường hợp ngoại lệ của login
 */
const { login } = require('./auth');

describe('Regression Test - Các ngoại lệ đăng nhập', () => {
    test('Trường hợp sai mật khẩu phải trả về false', () => {
        expect(login('admin', 'wrong_password')).toBe(false);
    });

    test('Trường hợp username rỗng phải trả về false', () => {
        expect(login('', '123')).toBe(false);
    });

    test('Trường hợp password rỗng phải trả về false', () => {
        expect(login('admin', '')).toBe(false);
    });

    test('Trường hợp mật khẩu chứa ký tự đặc biệt không hợp lệ phải trả về false', () => {
        expect(login('admin', '123@#$')).toBe(false);
    });

    test('Trường hợp tài khoản bị khóa phải trả về false', () => {
        expect(login('locked_user', '123')).toBe(false);
    });
});
