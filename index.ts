import 'dotenv/config';
import * as express from "express";
import productRoutes from "./endpoints/products";
import userRoutes from "./endpoints/users";

const app = express();
const port = parseInt(process.env.PORT) || 8080;

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Store API running',
    endpoints: {
      products: '/api/products',
      users: '/api/users'
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
