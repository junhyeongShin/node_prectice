import express from 'express';
import imageRouter from './ImageController';
import { userController } from './userController';
import { artistController } from './artistController';
import { productController } from './productController';
import { editionController } from './editionController';
import { utilController } from './utilController';
import { invoiceController } from './invoiceContoller';
import { collectionController } from './collectionController';
import { archiveController } from './archiveController';
import { commentController } from './commmentController';

export const router = express.Router();

router.use('/col', collectionController);
router.use('/upload', imageRouter);
router.use('/user', userController);
router.use('/artist', artistController);
router.use('/product', productController);
router.use('/edition', editionController);
router.use('/util', utilController);
router.use('/invoice', invoiceController);
router.use('/archive', archiveController);
router.use('/comm', commentController);
