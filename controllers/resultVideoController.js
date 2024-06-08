// ResultVideo Controller

const ResultVideo = require('../models/ResultVideo');
const UploadedResult = require('../models/UploadedResult');

// Upload result to the db
exports.uploadResult = async (req, res) => {
  try {
    const { name, size, codec, videoId } = req.body;

    const newResult = await ResultVideo.create({ name, size, codec })
    const resultId = newResult.id
    const newUploadedResult = await UploadedResult.create({ uploadedVideo_id: videoId, resultVideo_id: resultId })

    res.status(201).json({
      id: newResult.id,
      name: newResult.name,
      size: newResult.size,
      codec: newResult.type
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all result videos
exports.getAllResultVideos = async (req, res) => {
  try {
    const users = await ResultVideo.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get result video by id
exports.getResultVideoById = async (req, res) => {
  try {
    const user = await ResultVideo.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete result video by id
exports.deleteResultVideo = async (req, res) => {
  try {
    const user = await ResultVideo.findByPk(req.params.id);
    await user.destroy();
    res.status(204).json({ message: 'Result Video deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};