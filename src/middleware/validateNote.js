const validateNote = (req, res, next) => {
    const { title, content } = req.body;
  
    if (!title || !content) {
      return res.status(400).json({ 
        message: "Bad Request: Both title and content are required." 
      });
    }
  
    next(); // If validation passes, proceed to the next middleware or route handler
  };
  
  module.exports = validateNote;