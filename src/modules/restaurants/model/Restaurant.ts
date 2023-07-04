import { model, Schema } from 'mongoose';

export const Restaurant = model(
  'Restaurant',
  new Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    orders: [{
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }]
  })
);
