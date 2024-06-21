import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const url = 'mongodb+srv://root:PHlhy8bXJKkLyE26@cluster0.o460o.mongodb.net/linktree_node_typescript';
        const connection = await mongoose.connect(url);
        console.log(connection);

        console.log('MongoDB Conectado');
    } catch (error) {
        console.log(error);
    }
}
