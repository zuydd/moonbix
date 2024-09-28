![Moonbix banner](https://raw.githubusercontent.com/zuydd/image/main/moonbix.jpg)

# Tool Auto Moonbix NodeJS by ZuyDD

**Tool phát triển và chia sẻ miễn phí bởi ZuyDD**

<a href="https://www.facebook.com/zuy.dd"><img src="https://raw.githubusercontent.com/zuydd/image/main/facebook.svg" alt="Facebook"></a>
<a href="https://t.me/zuydd"><img src="https://raw.githubusercontent.com/zuydd/image/main/telegram.svg" alt="Telegram"></a>

> [!WARNING]
> Mọi hành vi buôn bán tool dưới bất cứ hình thức nào đều không được cho phép!

Video hướng dẫn 👉👉 https://www.youtube.com/watch?v=NQWI7CMD3JI

## 🛠️ Hướng dẫn cài đặt

> Yêu cầu đã cài đặt NodeJS

- Bước 1: Tải về phiên bản mới nhất của tool [tại đây ⬇️](https://github.com/zuydd/moonbix/archive/refs/heads/main.zip)
- Bước 2: Giải nén tool
- Bước 3: Tại thư mục tool vừa giải nén (thư mục có chứa file package.json), chạy lệnh `npm install` để cài đặt các thư viện bổ trợ

## 💾 Cách thêm dữ liệu tài khoản

> Tool hỗ trợ cả `user` và `query_id`

> Tất cả dữ liệu mà bạn cần nhập đều nằm ở các file trong thư mục 📁 `src / data`

- [users.txt](src/data/users.txt) : chứa danh sách `user` hoặc `query_id` của các tài khoản, mỗi dòng ứng với một tài khoản
- [proxy.txt](src/data/proxy.txt) : chứa danh sách proxy, proxy ở mỗi dòng sẽ ứng với tài khoản ở dòng đó trong file users.txt phía trên, để trống file này nếu không dùng proxy.
- [token.json](src/data/token.json) : chứa danh sách token được tạo ra từ `user` hoặc `query_id`. Token sẽ được tự động sinh ra khi bạn chạy tool. (Không cần quan tâm đến file này)

> Định dạng proxy: http://user:pass@ip:port

## >\_ Các lệnh và chức năng tương ứng

| Lệnh            | Chức năng                                                                           |
| --------------- | ----------------------------------------------------------------------------------- |
| `npm run start` | Dùng để làm nhiệm vụ, điểm danh, chơi game,.... tóm lại game có gì là nó làm cái đó |

## 🕹️ Các tính năng có trong tool

- tự động chơi game khi đầy lượt chơi
- tự động điểm danh hàng ngày
- tự động làm nhiệm vụ
- fake thông tin thiết bị (loại máy, user-agent, fingerprint,...) tránh bị game phát hiện
- nhận diện proxy tự động, tự động kết nối lại proxy khi bị lỗi. ae ai chạy proxy thì thêm vào file proxy.txt ở dòng ứng với dòng chứa acc muốn chạy proxy đó, acc nào không muốn chạy proxy thì gõ `skip` vào
- đa luồng (chia luồng tự động) chạy bao nhiêu acc cũng được, không bị block lẫn nhau, lặp lại khi tới thời gian chơi game
- hiển thị đếm ngược tới lần chạy tiếp theo, có thể tìm biến `IS_SHOW_COUNTDOWN = true` đổi thành `false` để tắt cho đỡ lag

> [!WARNING]
>
> - Nên cài ngừng chơi game tầm 6-8 giờ mỗi ngày, hạn chế chơi 24/7 dễ bị quét bay tài khoản
> - Tool sẽ tự động fake cho mỗi tài khoản telegram một thiết bị ứng với id nick telegram đó, khi đổi máy tính chạy tool nhớ copy file device.txt qua để giữ nguyên thiết bị tránh game quét bay tài khoản
> - Tool đã cố gắng fake thông tin chuẩn nhất có thể nhưng không gì là chắc chắn, vậy nên chơi hay không là tuỳ bạn, sợ thì đi về 🤣🤣🤣

## ♾ Cài đặt đa luồng

- Mặc định tool sẽ chạy đa luồng ứng với số tài khoản bạn nhập vào, không cần cài đặt thêm gì cả.
- Mặc định ở vòng lặp đầu tiên mỗi tài khoản (luồng) sẽ chạy cách nhau 20s để tránh spam request, có thể tìm biến `DELAY_ACC = 20` trong file [index.js](src/run/index.js) để điều chỉnh cho phù hợp

## ❌ Chế độ thử lại khi lỗi

- Đỗi với lỗi kết nối proxy, hệ thống sẽ cố thử lại sau mỗi 30s, bạn có thể cài đặt giới hạn số lần thử lại bằng cách tìm biến `MAX_RETRY_PROXY = 20` trong file [index.js](src/run/index.js) để điều chỉnh cho phù hợp (mặc định là 20). Khi quá số lần thử kết nối lại hệ thống sẽ dừng auto tài khoản đó và nghi nhận lỗi vào file [log.error.txt](src/data/log.error.txt)
- Đỗi với lỗi đăng nhập thất bại, hệ thống sẽ cố thử lại sau mỗi 60s, bạn có thể cài đặt giới hạn số lần thử lại bằng cách tìm biến `MAX_RETRY_LOGIN = 20` trong file [index.js](src/run/index.js) để điều chỉnh cho phù hợp (mặc định là 20). Khi quá số lần thử đăng nhập lại hệ thống sẽ dừng auto tài khoản đó và nghi nhận lỗi vào file [log.error.txt](src/data/log.error.txt)

## 🔄 Lịch sử cập nhật

> Khi cập nhật phiên bản mới chỉ cần copy thư mục 📁 [data](src/data) của bản cũ ghi đè lại ở bản mới là có thể chạy được mà không cần lấy lại data

> Phiên bản mới nhất: `v0.0.1`

<details>
<summary>v0.0.1 - 📅 12/09/2024</summary>
  
- Chia sẽ tool đến cộng đồng
</details>

## 🎁 Donate

Chúng tôi rất vui được chia sẻ các mã script và tài nguyên mã nguồn miễn phí đến cộng đồng làm airdrop. Nếu bạn thấy các công cụ và tài liệu của chúng tôi hữu ích và muốn ủng hộ chúng tôi tiếp tục phát triển và duy trì các dự án này, bạn có thể đóng góp hỗ trợ qua hình thức donate.

Mỗi đóng góp của bạn sẽ giúp chúng tôi duy trì chất lượng dịch vụ và tiếp tục cung cấp những tài nguyên giá trị cho cộng đồng làm airdrop. Chúng tôi chân thành cảm ơn sự hỗ trợ và ủng hộ của bạn!

Mãi iu 😘😘😘

<div style="display: flex; gap: 20px;">
  <img src="https://raw.githubusercontent.com/zuydd/image/main/qr-momo.png" alt="QR Momo" height="340" />
  <img src="https://raw.githubusercontent.com/zuydd/image/main/qr-binance.jpg" alt="QR Binance" height="340" />
</div>
