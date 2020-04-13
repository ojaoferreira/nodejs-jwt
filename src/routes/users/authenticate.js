const User = require('../../models/User');
const bcrypt = require('bcrypt');
const generateToken = require('./generateToken');

module.exports = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email }).select('+password');
    if(!user)
      return res.status(401).send({ error: 'User not foud' })

    if(!await bcrypt.compare(password, user.password))
      return res.status(401).send({ error: 'Invalid password' });

    user.password = undefined;
    let token = generateToken({ id: user.id });

    res.send({ user, token });
  } catch(err) {
    res.status(401).send({ error: 'Unauthorized access' })
  }
}
