import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const signupuser = async (req, res) => {
  console.log('Request Body:', req.body);

  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error in signupuser:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};



// Signin function
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
  
      console.log("User signed in successfully!");
      // Send user data in response
      res.status(200).json({ success: true, message: 'Signed in successfully!', user });
    } catch (error) {
      console.error("Signin error:", error);
      next(error);
    }
  };