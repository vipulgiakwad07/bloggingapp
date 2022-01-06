import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb+srv://vipul:vipuldbblog@cluster0.5k6v5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;