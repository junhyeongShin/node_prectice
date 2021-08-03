// import dotenv from "dotenv";
import app from './app';
import app from '../src/app';
// dotenv.config();


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// console.log('asdf')