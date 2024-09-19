function handleUserLogout(req, res) {
    try {
      res.clearCookie('token', {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict', 
      });
      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  
  module.exports = handleUserLogout;