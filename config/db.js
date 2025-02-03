const mongoose = require('mongoose');

// Connect to MongoDB
const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL)
    }
}