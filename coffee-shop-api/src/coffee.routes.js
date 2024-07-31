import express from 'express';
import { expressYupMiddleware } from 'express-yup-middleware';

import coffeeControllers from './controllers/coffee.controllers.js';
import { getCoffee, createCoffee, updateCoffee, removeCoffee } from './coffee.schemas.js';

const router = express.Router();



router.get('/lst',
    coffeeControllers.getAllCoffee
 );

router.get('/:id',
    expressYupMiddleware({schemaValidator: getCoffee} ),
    coffeeControllers.getCoffee
   
 );

router.post('/',
    expressYupMiddleware({schemaValidator: createCoffee} ),
    coffeeControllers.createCoffee
 );

router.put('/:id',
    expressYupMiddleware({schemaValidator: updateCoffee} ),
    coffeeControllers.updateCoffee
);

router.delete('/:id', 
    expressYupMiddleware({schemaValidator: removeCoffee}),
    coffeeControllers.removeCoffee
);
export default router