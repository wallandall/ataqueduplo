const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const normalize = require('normalize-url');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    });

    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'There is no profile for this user!' });
    }

    // only populate from user document if profile exists
    res.json(profile.populate('user', ['name', 'avatar']));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [
    auth,
    [
      check('academy', 'Academy is required').not().isEmpty(),
      check('status', 'Status is required!').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      academy,
      location,
      status,
      skills,
      bio,
      dob,
      current_weight,
      goal_weight,
      youtube,
      twitter,
      instagram,
      facebook,
    } = req.body;

    const profileFields = {
      user: req.user.id,
      academy,
      location,
      status,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((skill) => ' ' + skill.trim()),
      bio,
      dob,
      current_weight,
      goal_weight,
    };

    const socialfields = { youtube, twitter, instagram, facebook };

    for (const [key, value] of Object.entries(socialfields)) {
      if (value.length > 0)
        socialfields[key] = normalize(value, { forceHttps: true });
    }
    profileFields.social = socialfields;

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    // console.log('###################');
    // console.log(profiles);
    // console.log('###################');
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found!' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found!' });
    }
    res.status(500).send('Server Error');
  }
});

router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    await Post.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put(
  '/belt',
  [
    auth,
    [
      check('belt', 'Belt is a required field!').not().isEmpty(),
      check('academy', 'Academy is a required field!').not().isEmpty(),
      check('instructor', 'Instructor is a required field!').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      belt,
      academy,
      instructor,
      location,
      website,
      graduation,
    } = req.body;

    const newExp = {
      belt,
      academy,
      instructor,
      location,
      website,
      graduation,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.grade.unshift(newExp);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.delete('/belt/:belt_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.grade
      .map((item) => item.id)
      .indexOf(req.params.belt_id);

    profile.grade.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
