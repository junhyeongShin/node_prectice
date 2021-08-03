import express from 'express';
import { user_controller } from './user_controller.js';
// import { shopping_basket_controller } from './shopping_basket_controller';
// import { goods_controller } from './goods_controller';


export const Router = express.Router();

// router.use('/basket', shopping_basket_controller);
// router.use('/goods', goods_controller);
Router.use('/user', user_controller);
