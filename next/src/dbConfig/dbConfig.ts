import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected',() => {
            console.log('mongo db connected!');
        })
        connection.on('error', (err: any) =>{
            console.log('mongodb connecton issue, check the mongo db is running!'+err);
            process.exit();
        })
    } catch (error) {
        console.log('something goes wrong!');
        console.log(error);
    }
}
