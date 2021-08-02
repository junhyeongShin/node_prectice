import express from 'express';


export const user_controller = express.Router();

user_controller.get('/', async (req, res) => {
  // const user = await User.findById("5fb1bff9e463bb504b9b0bb4")
  // const pwd = await changeByBcrypt('', 'testPWD');

  // 세션정보랑 유저정보를 확인 할 것

  res.status(200).json()
})
