// cloudinaryConfig.js
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({ 
    cloud_name: 'dktceh4sn', 
    api_key: '615189351496968', 
    api_secret: 'NQBZAIMfjsMXtskHh7zE3WNrS94',  // Thay bằng API secret thật
});

module.exports = cloudinary;

