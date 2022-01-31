import mongoose from 'mongoose';
//import { mongoAppName, mongoPassword, mongoURI, mongoUser } from '.';
import { mongoPassword, mongoURI, mongoUser } from '.';
 //appName: mongoAppName,
export function connectToMongo(): void {
    mongoose.connect(mongoURI, {
        dbName: "admin_mess",
        auth: { username: mongoUser, password: mongoPassword },
    });

}