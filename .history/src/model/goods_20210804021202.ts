import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

interface IGoods extends mongoose.Document {
    index : mongoose.Types.ObjectId, //상품 인덱스
    seller_index : mongoose.Types.ObjectId, //상품 판매자 인덱스
    goods_number: number, // 상품 번호
    name: string, // 상품 이름
    price: number, //가격
    delivery_price: number, //가격
    discount_rate: number, // 할인율 (1~100 으로 표시 계산시는 0.01x 계산)
    add_point: number, // 적립 마일리지
    purchasing_number : number, // 구매한 개수
    remaining_number : number, // 남은 개수
    representative_img: string, // 대표 이미지
    representative_explanation: string, // 대표 설명
    goods_explanation: string, // 상품 설명
    exchange_return_explanation: string, // 교환 및 반품 설명
    origin: string, //원산지
    state: string, //상품 상태
    sell_place: string, //판매 지역
    bill_availability: string, //영수증 발행가능 여부
    etc_trading: string, //기타 거래 조건
    create_time: Date, // 상품 등록 일시
    end_time: Date, // 판매 종료 일시
    destroy_time: Date, // 판매 삭제 일시
    catogory_main  : number, // 메인 카테고리
    catogory_sub  : number, // 서브 카테고리
    views  : number, // 조회수
    option : [
      {
        name : string,
        price : number
      }
    ]
}

const option = new Schema({
  name :{ type: String },
  price : { type: Number }
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
  option: { type: option }
})

export const Goods = mongoose.model<IGoods>('goods', goodsSchema, 'goods');