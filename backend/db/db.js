const mongoos = require('mongoose');
const connectDB = async () => {
  try {
    await mongoos.connect(
      'mongodb+srv://yashchoudharytech:fintrax2025@cluster0.9wcq5v8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Connected!!!');
  } catch (error) {
    console.log('Not Connected!!');
  }
};
module.exports = connectDB;
