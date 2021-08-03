import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

interface IGoods extends mongoose.Document {
    index : mongoose.Types.ObjectId, //상품 인덱스
    seller_index : mongoose.Types.ObjectId, //상품 판매자 인덱스
    name: string, // 상품 이름
    price: number, //가격
    _img: string,
    mobile: string,
    join_time: Date, // 회원 가입 일시
    out_time: Date, // 회원 탈퇴 일시
    rest_time: Date, // 휴먼 계정 날짜
    Token: string, // 회원 토큰
    facebook_url : string, // 페이스북 주소
    youtube_url  : string, // 유튜브 주소
    blog_url   : string, // 브로그 주소
    recommender: mongoose.Types.ObjectId, // 추천인
    point: number, // 마일리지
    email_agree : boolean, // 이메일 수신동의
    SMS_agree : boolean, // SMS 수신 동의
    info_open_agree : boolean, // 정보 공개 수신 동의
    tags : {
      tags : string
    }
}

const address = new Schema({
  address_number: { type: Number },  // 우편 번호
  address_detail: { type: String },   // 상세 주소
  address_name: { type: String }  // 수취인
})

const tags = new Schema({
  tags: { type: String }  // 수취인
})

const goodsSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  aka_name: { type: String, required: true }, 
  profile_img: { type: String, default: '' },
  point:{ type: Number, default: 0 },
  email_agree:{ type: Boolean, required: true, default: false }, //수신동의
  SMS_agree:{ type: Boolean, required: true, default: false }, //수신동의
  info_open_agree:{ type: Boolean, required: true, default: false }, //수신동의
  phone: { type: String, required: true, default: '' },
  join_time: { type: Date, default: moment().toDate() },
  rest_time: { type: Date, default: moment().add(1, 'years')},
  address: {
    type: address, default: {
      address_number: "",
      address_detail: "",
      address_name: ""
    }
  }
})

export const Goods = mongoose.model<IGoods>('goods', goodsSchema, 'goods');