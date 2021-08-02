import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

interface user extends mongoose.Document {
    index : mongoose.Types.ObjectId,
    email: string,
    name: string,
    aka_name: string, //닉네임
    birthday: Date, //생일
    profile_img: string,
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
    address : {
        address_number : number,
        address_detail : string,
        address_name: string
    },
    fav_address : {
      address_number : number,
      address_detail : string,
      address_name: string
  }
}

const address = new Schema({
  address_number: { type: Number },  // 우편 번호
  address_detail: { type: String },   // 상세 주소
  address_name: { type: String }  // 수취인
})

const fav_address = new Schema({
  address_number: { type: Number },  // 우편 번호
  address_detail: { type: String },   // 상세 주소
  address_name: { type: String }  // 수취인
})

const user_schema_join = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    aka_name: { type: String, required: true },   // 아티스트의 활동명
    birthday: { type: Date, required: true },
    profile_img: { type: String, default: '' },
    point:{ type: Number, default: 0 },
    email_agree:{ type: Boolean, default: false },
    SMS_agree:{ type: Boolean, default: false },
    info_open_agree:{ type: Boolean, default: false },
    phone: { type: String, required: true, default: '' },
    join_time: { type: Date, default: moment().toDate() },
    rest_time: { type: Date, default: moment().add(1, 'years')},
    out_time: { type: Date}
})

const user_schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  aka_name: { type: String, required: true },   // 아티스트의 활동명
  birthday: { type: String, required: true },
  profile_img: { type: String, default: '' },
  artist_main_img: { type: String, default: '' },  // 아티스트 대표이미지
  phone: { type: String, default: '' },
  registed_at: { type: Date, default: moment().toDate() },
  introduction: { type: String, default: '' },   // 짧은 소개말
  artist_genre: { type: String, default: '일반' },    // 작가 대표 장르
  hashtags: { type: [String] },    // 타입을 어떻게할지. 배열
  artist_type: { type: String, enum: ['video', 'sound', 'image'] }
})

export const user_join = mongoose.model<user>('user', user_schema_join, 'user');
export const user = mongoose.model<user>('user', user_schema, 'user');