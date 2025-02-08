require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // ...existing code...
  })
  .catch((err) => {
    // ...existing code...
  });
