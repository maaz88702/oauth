const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      // Leave required: false so Google/GitHub users can register without a password
      required: false 
    },
    authProviders: [
      {
        provider: {
          type: String,
          required: true,
          enum: ['google', 'facebook', 'github', 'apple']
        },
        providerId: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
