import express from 'express';


export const user_controller = express.Router();

user_controller.get('/', async (req, res) => {
  res.status(200).json()
})
