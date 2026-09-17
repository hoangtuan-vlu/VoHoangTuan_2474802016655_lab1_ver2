/**
 * Mã sinh viên: 71ITSE41203
 * Smoke Test cho chức năng login
 */
const { login } = require('./auth');

describe('Smoke Test - Đăng nhập', () => {
    test('Trường hợp đăng nhập đúng (admin/123) phải trả về true', () => {
        expect(login('admin', '123')).toBe(true);
    });
});
