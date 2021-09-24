import mongoose from 'mongoose';
const dbURI = process.env.MONGO_URI;
const localDbURI = 'mongodb://localhost:27017/ecommerce';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(localDbURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

export default connectDB;
