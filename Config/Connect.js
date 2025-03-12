const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://hoanggiahao:Giahao16%40@giahao.3xcgm.mongodb.net/?retryWrites=true&w=majority&appName=Giahao";

// Tạo MongoClient với các tùy chọn
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Hàm kết nối MongoDB
async function connectDB() {
  try {
    // Kết nối đến MongoDB
    await client.connect();
    // Gửi lệnh ping để xác nhận kết nối
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return true;  // Kết nối thành công
  } catch (err) {
    console.error("Lỗi kết nối MongoDB:", err);
    return false;  // Kết nối thất bại
  }
}

module.exports = connectDB; // Xuất hàm connectDB
