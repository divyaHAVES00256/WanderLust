// Require the Cloudinary library
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    
    //like creating particular place for a cloud stoage
    const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
        params: {
            folder: 'wanderlust',
            allowedFormats: ['png', 'jpg', 'jpeg', 'webp'], // supports promises as well
        },
    });
    module.exports = {
        cloudinary,
        storage
    };
       
})();