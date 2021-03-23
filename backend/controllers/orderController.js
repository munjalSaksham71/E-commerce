import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

const addOrderItems = asyncHandler(async (req, res) => {
        const { 
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body

        if(orderItems && orderItems.length === 0) {
            res.status(400)
            throw new Error('No Order Items')
        } else {
            const order = new Order ({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
            })
const createdOrder = await order.save()
res.status(201).json(createdOrder)

}

})

//  @desc GET order by Id 
//  @routes GEt /api/order/:id
// @access Private

const getOrderById = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order Not Found')
    }
})

const updateOrderToPaid = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)

    if(order) {
        order.isPaid = true,
        order.paidAt = Date.now(),
        order.paymentResult = {
            id: req.params.id,
            status: req.params.status,
            update_time: req.params.update_time,
            email_address: req.params.payer.email_address
        }

        const updatedOrder = await Order.save()
        res.json(updatedOrder)

    } else {
        res.status(404)
        throw new Error('Order Not Found')
    }
})

export { addOrderItems, getOrderById, updateOrderToPaid }

