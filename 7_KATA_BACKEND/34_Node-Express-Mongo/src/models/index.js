import mongoose from 'mongoose';

const URL_MONGO =  'mongodb+srv://<user>:<password>@<host>/movie_store?retryWrites=true&w=majority'
const URL_MONGO_LOCAL = 'mongodb://localhost:27017/movie_store';
export default function main() {
  return mongoose.connect(URL_MONGO_LOCAL);
}
