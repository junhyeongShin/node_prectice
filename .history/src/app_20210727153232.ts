import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import moment from 'moment-timezone';

const app = express();

app.use(express.json());