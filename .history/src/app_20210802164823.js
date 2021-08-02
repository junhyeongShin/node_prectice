import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import dotenv from 'dotenv';
import morgan from 'morgan';
// import moment from 'moment-timezone';
import cors from 'cors';
import expressSession from 'express-session';
// import path from 'path';
// import { stream } from './winston';


// 내가 커스텀해서 사용할 에러 핸들러
// import { errorMiddleware } from './errorMiddleware';
// 디비 연결시 사용할 커넥터
// import { databaseConnector } from './dbConnector'
// 라우터 분기
// import { router } from './controller/v1/router'


const app = express();

// body-parser 대신 사용해도 json 가져올수잇음.  
// express 4.16 버진 이후
app.use(express.json());
console.log("express.json()")

// 객체 형태의 데이터 안에 객체 데이터 형태 사용 가능
app.use(express.urlencoded({ extended: true }));
console.log("express.urlencoded()")


// 쿠키 사용 페키지
app.use(cookieParser());
console.log("cookieParser()")

// 서버 시간 설정
// moment.tz.setDefault('Asia/Seoul');

dotenv.config({
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV == "production" ? ".env" : ".env.dev"
    ),
  });
console.log("dotenv.config()")

console.log(process.env.id);


//보안관련 페키지

// 헬멧을 사용
app.use(helmet());
console.log("helmet()")


// cors 정책
app.use(cors());
console.log("cors()")


app.options('/', cors());
console.log("options()")


// 에러관련 미들웨어 설정
// app.use(errorMiddleware)


app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "")
    next();
})
console.log("use()")


export default app