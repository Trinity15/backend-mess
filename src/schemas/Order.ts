import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
    },
});

const Order = mongoose.model('order', OrderSchema);

export default Order;
