import express from 'express';
import imageRouter from './ImageController';
import { user_controller } from './user_controller';
import { shopping_basket } from './shopping_basket_controller';
import { goods_controller } from './goods_controller';


export const router = express.Router();

router.use('/basket', shopping_basket_controller);
router.use('/goods', goods_controller);
router.use('/user', user_controller);
