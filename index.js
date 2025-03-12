const express = require("express");
const connectDB = require("./Config/Connect"); // Import hàm connectDB từ file config/connect

const app = express();

// Kết nối cơ sở dữ liệu khi server khởi động
connectDB().then((isConnected) => {
  if (isConnected) {
    console.log("Kết nối cơ sở dữ liệu thành công!");
  } else {
    console.log("Không thể kết nối cơ sở dữ liệu!");
  }
});

// Trang chủ
app.get("/", (req, res) => {
  res.send("Trang chủ: Kết nối cơ sở dữ liệu thành công!");
});

// Lắng nghe cổng 3000
app.listen(3001, () => {
  console.log("Server đang chạy trên port 3001");
});
