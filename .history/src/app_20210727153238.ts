import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import moment from 'moment-timezone';

const app = express();

app.use(express.json());

// 객체 형태의 데이터 안에 객체 데이터 형태 사용 가능
app.use(express.urlencoded({ extended: true }));