import express from 'express';
import { user } from '../model/user';



export const user_controller = express.Router();

// 접속 테스용
user_controller.get('/test', async (req, res) => {
  res.status(200).json()
})

user_controller.get('/user/:name', ,(req, res) => {
  
  res.json({ name: req.params.name });
});

// user_controller.post('/user', (req, res) => {
//   User.insert({ name: req.body.name }, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     res.json(result);
//   });
// });