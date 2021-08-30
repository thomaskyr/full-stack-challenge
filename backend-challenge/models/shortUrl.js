const mongoose = require('mongoose');
const {nanoid} = require('nanoid');

const Schema = mongoose.Schema;

const shortUrlSchema = new Schema({
    full: {
        type: String,
        required: true
      },
      short: {
        type: String,
        required: true,
        default: nanoid(10)
      },
      clicks: {
        type: Number,
        required: true,
        default: 0
      }
    },
    { timestamps: true }
);

module.exports = mongoose.model('ShortUrl', shortUrlSchema);