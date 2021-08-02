import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

interface IArtist extends mongoose.Document {
    index : mongoose.Types.ObjectId,
    email: string,
    name: string,
    aka_name: string,
    birthday: string,
    profile_img: string,
    mobile: string,
    registed_at: Date,
    registed_at: Date,
    registed_at: Date,
    introduction: string,
    artist_genre: string,
    hashtags: [string],
    artist_type: string,
    refund_detail: {
        bank_name: string,
        bank_account: string,
        account_owner_name: string
    }
}

const refund_detail = new Schema({
    bank_name: { type: String },  // 은행명
    bank_account: { type: String },   // 계좌번호
    account_owner_name: { type: String }  // 예금주 명
})

const ArtistSchema = new Schema({
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
    refund_detail: refund_detail,
    artist_type: { type: String, enum: ['video', 'sound', 'image'] }
})

// 해쉬태그 제거 _.pullAll 메서드

export const Artist = mongoose.model<IArtist>('artist', ArtistSchema, 'artist');