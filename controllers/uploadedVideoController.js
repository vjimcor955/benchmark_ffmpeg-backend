// UploadedVideo Controller (upload video to the db)

const UploadedVideo = require('../models/UploadedVideo');

// Upload video to the db
exports.uploadVideo = async (req, res) => {
  try {
    const { name, size, type, user_id } = req.body;

    const newVideo = await UploadedVideo.create({ name, size, type, user_id })

    res.status(201).json({
      id: newVideo.id,
      name: newVideo.name,
      size: newVideo.size,
      type: newVideo.type,
      user_id: newVideo.user_id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all uploaded videos from the db
exports.getAllUploadedVideos = async (req, res) => {
  try {
    const uploadedVideos = await UploadedVideo.findAll();
    res.status(200).json(uploadedVideos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a specific uploaded video from the db
exports.UploadedVideoById = async (req, res) => {
  try {
    const video = await UploadedVideo.findByPk(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a specific uploaded video from the db
exports.deleteUploadedVideo = async (req, res) => {
  try {
    const video = await UploadedVideo.findByPk(req.params.id);
    await video.destroy();
    res.status(204).json({ message: 'Video deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};