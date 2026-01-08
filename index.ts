import 'dotenv/config';
import * as express from "express";
import productRoutes from "./endpoints/products";

const app = express();
const port = parseInt(process.env.PORT) || 8080;

app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('HEAAAALLLLOOOOO');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
