import express from 'express'
import { db} from '../Config/db.config'
import  postRouter  from '../Routes/post.routes';
import userRouter from '../Routes/user.routes';
import restaurantRouter from '../Routes/restaurant.routes';
import qrRouter from '../Routes/qr.routes';
import planRouter from '../Routes/plan.routes';
import orderRouter from '../Routes/order.routes';
import menuRouter from '../Routes/menu.routes';
import categoryRouter from '../Routes/category.routes';
import authRouter from '../Routes/auth.routes';
const app = express()
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Use the post routes
app.use('/auth', authRouter);

// Use the user routes
app.use('/users', userRouter);

// Use the restaurant routes
app.use('/restaurants', restaurantRouter);

//Use the QR routes
app.use('/rq', qrRouter);

//Use the plan routes
app.use('/plan', planRouter);

//Use the Order routes
app.use('/order', orderRouter);

// Use the Menu routes
app.use('/menu', menuRouter);

// Use the category routes
app.use('/categories', categoryRouter);

//db connection then server connection
db.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
