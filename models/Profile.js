const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  academy: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    default: 'Student',
  },
  skills: {
    type: [String],
  },
  bio: {
    type: String,
  },
  dob: {
    type: Date,
  },
  current_weight: {
    type: Number,
  },
  goal_weight: {
    type: Number,
  },
  grade: [
    {
      belt: {
        type: String,
        required: true,
      },
      academy: {
        type: String,
        required: true,
      },
      instructor: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      website: {
        type: String,
      },
      graduation: {
        type: Date,
        required: false,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
