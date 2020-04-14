const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProfileSchema.virtual('current_belt').get(function () {
  let beltObj = Object.keys(this.grade);
  belt = beltObj.length;
  // console.log('beltObj ---' + beltObj);
  // console.log(typeof beltObj);
  // console.log('Belt--> ' + belt);
  if (belt === 1) {
    return '1';
  } else if (belt === 2) {
    return '2';
  } else if (belt === 3) {
    return '3';
  } else if (belt === 4) {
    return '4';
  } else if (belt === 5) {
    return '5';
  } else {
    return '3';
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
