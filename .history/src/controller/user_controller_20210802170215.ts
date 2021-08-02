import express from 'express';


export const user_controller = express.Router();

// 접속 테스용
user_controller.get('/', async (req, res) => {
  res.status(200).json()
})
