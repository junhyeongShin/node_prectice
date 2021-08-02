import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import moment from 'moment-timezone';
import cors from 'cors';
import expressSession from 'express-session';
import path from 'path';

// 내가 커스텀해서 사용할 에러 핸들러
import { errorMiddleware } from './errorMiddleware';
// 디비 연결시 사용할 커넥터
import { databaseConnector } from './dbConnector'
// 라우터 분기
import { router } from './controller/v1/router'


const app = express();

// body-parser 대신 사용해도 json 가져올수잇음.  
// express 4.16 버진 이후
app.use(express.json());

// 객체 형태의 데이터 안에 객체 데이터 형태 사용 가능
app.use(express.urlencoded({ extended: true }));

// 쿠키 사용 페키지
app.use(cookieParser());

// 서버 시간 설정
moment.tz.setDefault('Asia/Seoul');




//보안관련 페키지

// 헬멧을 사용
app.use(helmet());

// cors 정책
app.use(cors());

app.options('/', cors());

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "")
    next();
})

export default app