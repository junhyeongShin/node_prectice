import express from 'express';
import { user } from '../model/user';
import moment from 'moment';




export const UserController = express.Router();

// 접속 테스용
UserController.get('/test', async (req, res) => {
  res.status(200).json()
})

UserController.get('/user/:name',(req, res) => {
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