import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';
import connectDB from './config/db';
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

connectDB();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, () => console.log(`server running on ${port}`));
