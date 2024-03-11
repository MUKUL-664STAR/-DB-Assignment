import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const databaseUri = 'mongodb://localhost:27017/Product';
    await mongoose.connect(databaseUri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
};
export default  connectToDatabase;
