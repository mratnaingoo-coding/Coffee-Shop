import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import cors from 'cors';

import router from './coffee.routes.js';


const app = new express();
const port = 5160;
const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 1 minute).
	
})

app.use(compression());
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/coffees', router);

app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})


