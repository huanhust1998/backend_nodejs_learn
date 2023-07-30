const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');
const app = express();

// init middleware
app.use(morgan("dev")); // morgan có tác dụng in ra log của response trả về-- trạng thái(200, 20x, .... 500);
app.use(helmet()); // giúp cải thiện tính bảo mật của ứng dụng web 
app.use(compression()); // compression được sử dụng để nén dữ liệu trước khi gửi cho client, giúp giảm kịch thước của dữ liệu truyền tải qua mạng, giúp tăng tốc độ truyền tải và tiết kiệm băng thông

// init db


// int routes
app.get('/', (req, res, next)=>{
    const strCompress = "Hello World";
    return res.status(200).json({
        message: 'Welcome',
        metadata: strCompress.repeat(10000)
    })
})
// handling error 

module.exports = app;