// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    messageId: mongoose.Types.ObjectId,
    body: String,
    username: String,
    userId: String, // mongoose.ObjectId
    sender: Boolean,
  },
  { timestamps: true },
);

const ChatMessage = mongoose.model('Message', messageSchema);

module.exports = { ChatMessage };
