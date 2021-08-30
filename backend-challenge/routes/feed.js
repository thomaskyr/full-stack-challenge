const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/shortUrls', feedController.getPosts);

// POST /feed/post
router.post('/shortUrl', feedController.shortenUrl);

module.exports = router;