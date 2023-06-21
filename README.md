# ĐỒ ÁN NHẬP MÔN CÔNG NGHỆ PHẦN MỀM - ĐỀ TÀI: QUẢN LÝ PHÒNG MẠCH TƯ

## LỜI GIỚI THIỆU

Đây là những thông tin về đồ án môn Nhập môn Công nghệ Phần mềm lớp 20_22/HCMUS dưới sự hướng dẫn của thầy Bùi Tấn Lộc. <br>
Nhóm sinh viên thực hiện:

- Phan Tân Hoàn Cương - 20120260
- Phạm Anh Minh - 20120330
- Lý Thành Nam - 20120334
- Nguyễn Minh Hiếu - 20120475

## THÔNG TIN CƠ BẢN

Bên dưới là các công cụ/ngôn ngữ được sử dụng trong quá trình làm đồ án:

- Front-end: HTML, CSS, Javascript, ReactJS.
- Back-end: MySQL (phpMyAdmin)

## CÁCH CHẠY LOCAL HOSTING

Tải project từ Github về máy, thực hiện như sau:
- Cách 1:
    - Download file .zip của Project này từ Github về máy
    - Giải nén file .zip
- Cách 2:
    - Mở terminal trên máy
    - Clone project bằng lệnh <br>
    ```git
    git clone https://github.com/phantanhoancuong/Software-Engineering-Private-Clinic.git
    ```

Sau khi tải Project từ GitHub về máy local, ta thực hiện các bước sau:
- Bước 1: Điều hướng sang folder frontend, vào terminal gõ lệnh `cd frontend`
- Bước 2: Đảm bảo máy thực hiện có đầy đủ các dependency, package, module cần thiết. Nếu chưa có thì qua Terminal để sử dụng lệnh `npm install`, nếu đã cài đặt đầy đủ thì qua Bước 3
- Bước 3: Cũng trên Terminal, thực hiện lệnh `npm run start`. Browser mặc định của máy sẽ host React App trên port 3000
- Bước 4: Khi muốn dừng thì với Terminal khác, ta thực hiện lệnh `npx kill-port 3000`

## VIDEO DEMO ĐỒ ÁN

Link [Demo](https://tinyurl.com/SE2022-G4)

## CÁC CHỨC NĂNG ĐÃ THỰC HIỆN

### Hoàn thiện các chức năng yêu cầu trong đồ án
1. Lập danh sách khám bệnh
2. Lập phiếu khám bệnh
3. Tra cứu bệnh nhân
4. Lập hóa đơn thanh toán
5. Lập báo cáo tháng
6. Thay đổi qui định

### Các chức năng bổ sung
- Giao diện trang userEdit, passwordReset

## CÁC BƯỚC PHÁT TRIỂN TIẾP THEO

### Cải thiện các chức năng
- Thêm chức năng xóa lựa chọn trong bảng
- Cho tạo hóa đơn tự động dựa vào phiếu khám (bỏ trang Tạo hóa đơn)
- Hoàn thiện trang UserEdit, PasswordRest cho user
- Bỏ trang forgetPassword vì không cần thiết

### Fix các component
- Fix Table để có option lựa chọn, sắp xếp, tính tổng, ...
- Fix Modal để cải thiện lúc xem chi tiết trong bảng
