const User = require('../../models/User')
const generateToken = require('./generateToken');

module.exports = async (req, res) => {
  try {
    let { email } = req.body;

    if(await User.findOne({ email })) {
      return res.status(400).send({ error: 'User already exists' })
    }

    const user = await User.create(req.body);
    user.password = undefined;
    let token = generateToken({ id: user.id });

    return res.send({ user, token });
  } catch(err) {
    res.status(400).send({ message: 'Registration failed', error: err });
  }
}
