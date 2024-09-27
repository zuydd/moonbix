** Link cập nhật tool và hướng dẫn chi tiết tại **
https://github.com/zuydd/moonbix

**_ Hướng dẫn cài đặt _**

- B1: Tải và giải nén tool
- B2: Chạy lệnh: npm install tại thư mục chứa tool (thư mục có chứa file package.json) để cài đặt thư viện bổ trợ
- B3: vào thư mục src -> data, nhập user hoặc query_id vào file users.txt và proxy vào file proxy.txt, không có proxy thì bỏ qua khỏi nhập

**_ Các lệnh chức năng chạy tool _**

- npm run start: Dùng để làm nhiệm vụ, điểm danh, chơi game,.... tóm lại game có gì là nó làm cái đó

🕹️ Các tính năng có trong tool:

- tự động điểm danh hàng ngày
- tự động làm nhiệm vụ
- tự động chơi game khi đủ lượt chơi
- hẹn giờ ngưng chơi game
- fake thiết bị
- nhận diện proxy tự động, tự động kết nối lại proxy khi bị lỗi. ae ai chạy proxy thì thêm vào file proxy.txt ở dòng ứng với dòng chứa acc muốn chạy proxy đó, acc nào không muốn chạy proxy thì để trống hoặc gõ skip vào
- đa luồng chạy bao nhiêu acc cũng được, không bị block lẫn nhau, lặp lại khi tới thời gian chơi game
- hiển thị đếm ngược tới lần chạy tiếp theo, có thể tìm biến IS_SHOW_COUNTDOWN = true đổi thành false để tắt cho đỡ lag

⚠️ Lưu ý:

- Nên cài ngừng chơi game tầm 6-8 giờ mỗi ngày, hạn chế chơi 24/7 dễ bị quét bay tài khoản
- Tool sẽ tự động fake cho mỗi tài khoản telegram một thiết bị ứng với id nick telegram đó, khi đổi máy tính chạy tool nhớ copy file device.txt qua để giữ nguyên thiết bị tránh game quét bay tài khoản
