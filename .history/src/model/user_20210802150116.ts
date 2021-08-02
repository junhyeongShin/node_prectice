import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

interface user extends mongoose.Document {
    index : mongoose.Types.ObjectId,
    email: string,
    name: string,
    aka_name: string,
    birthday: string,
    profile_img: string,
    mobile: string,
    join_time: Date,
    out_time: Date,
    rest_time: Date,
    Token: string,
    facebook_url : string,
    youtube_url  : string,
    blog_url   : string,
    recommender: mongoose.Types.ObjectId,
    point: number,
    hashtags: [string],
    artist_type: string,
    address : {
        address_number : number,
        address_detail : string,
        address_name: string
    }
}

const address = new Schema({
  bank_name: { type: String },  // 은행명
  bank_account: { type: String },   // 계좌번호
  account_owner_name: { type: String }  // 예금주 명
})

const user_schema_join = new Schema({
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