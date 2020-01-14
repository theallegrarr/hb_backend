const validUrl = require('valid-url');
const resizeOptimizeImages = require('resize-optimize-images');
const download = require('image-downloader');
const router = require('express').Router();
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, async (req, res) => {
  const { imageUrl } = req.body;
  try {
    if (validUrl.isUri(imageUrl)) {
      const options = {
        url: imageUrl,
        dest: './public/images/',
      };

      const image = await download.image(options);
      const resizeOptions = {
        images: [`${image.filename}`, `${image.filename}`],
        width: 50,
        quality: 50,
      };

      await resizeOptimizeImages(resizeOptions);
      res.status(200).json({
        message: 'Image has been resized',
        thumbnail: `${image.filename}`,
      });
    } else {
      res.status(400).json({ message: 'try a valid imageUrl' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
