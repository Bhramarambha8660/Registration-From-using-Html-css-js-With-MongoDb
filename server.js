const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = 3019;
const app = express();

// Middleware
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// ✅ MongoDB Connection (with async/await)
async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/students'); // Removed deprecated options
        console.log('✅ MongoDB connection successful');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1); // Exit the process if MongoDB fails
    }
}
connectDB();

// Define Schema
const userSchema = new mongoose.Schema({
    reg_no: String,
    name: String,
    email: String,
    branch: String
});

// Create Model
const Users = mongoose.model("data", userSchema);

// Serve the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Handle form submission
app.post('/post', async (req, res) => {
    try {
        const { reg_no, name, email, branch } = req.body;

        const user = new Users({ reg_no, name, email, branch });

        await user.save();
        console.log('✅ Data Saved:', user);
        res.send('Form submitted successfully');
    } catch (error) {
        console.error('❌ Error saving data:', error);
        res.status(500).send('Error submitting form');
    }
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
