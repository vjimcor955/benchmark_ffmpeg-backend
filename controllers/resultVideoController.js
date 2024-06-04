// ResultVideo Controller

const ResultVideo = require('../models/ResultVideo');
const { exec } = require('child_process');

// Process metrics
exports.processMetrics = async (req, res) => {
  const qualityMetricsCommand = `ffmpeg-quality-metrics results/${outputName} ${req.file.path} \
  -m psnr ssim vmaf`
  console.log(`-- QUALITY-METRICS: ${qualityMetricsCommand}`)
  exec(qualityMetricsCommand, (qmError, qmStdout, qmStderr) => {
    if (qmError) {
      console.error('Error:', qmError);
      res.status(500).send('Error getting quality-metrics');
      return;
    }

    const fileSizeCommand = `stat -c "%s" results/${outputName}`;
    console.log(`-- FILE SIZE: ${fileSizeCommand}`)
    exec(fileSizeCommand, (fsError, fsStdout, fsStderr) => {
      if (fsError) {
        console.error('Error:', fsError);
        res.status(500).send('Error getting video size');
        return;
      }
      const fileSize = (parseInt(fsStdout) * 0.000001).toFixed(2);

      const response = {
        filename: outputName,
        codec: command,
        size: fileSize,
        quality_metrics: JSON.parse(qmStdout),
      };    
      res.status(200).send(response);
    });
  });
};

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