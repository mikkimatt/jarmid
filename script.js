const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dht5p6be1',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

