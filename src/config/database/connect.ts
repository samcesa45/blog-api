import dotenv from 'dotenv';
dotenv.config();
import mongoose, {connect} from 'mongoose';
mongoose.set('strictQuery', false);

export default connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('### DATABASE CONNECTION ESTABLISHED SUCCESSFULLY');
  })
  .catch(() => {
    console.log('### FAILURE TO ESTABLISHED A CONNECTION');
  });
