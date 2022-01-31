import dotenv from 'dotenv';
import { connectToMongo } from './mongoUtil';
import Announcement from './schemas/Announcement';
import express from 'express';
import bodyParser from 'body-parser';
import crudFactory from './crudFactory';
import Order from './schemas/Order';

dotenv.config();

export const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/admin_mess';
//export const mongoAppName = process.env.MONGO_APP_NAME || 'your-app-name';
export const mongoUser = process.env.MONGO_USER || 'messadmin';
export const mongoPassword = process.env.MONGO_PASSWORD || 'messadmin';
export const port = process.env.PORT || 4000;

connectToMongo();
const app = express();

app.use(bodyParser.json());

app.use('/api/announcement', crudFactory<typeof Announcement>(Announcement));
app.use('/api/order', crudFactory<typeof Order>(Order));


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
