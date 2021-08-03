import express from 'express';
import { user_controller } from './user_controller.js';


export const Router = express.Router();

Router.use('/user', user_controller);
