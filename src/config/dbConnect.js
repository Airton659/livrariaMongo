import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://airton:123@cluster0.4auvz7f.mongodb.net/alura-node'
);

let db = mongoose.connection;

export default db;
