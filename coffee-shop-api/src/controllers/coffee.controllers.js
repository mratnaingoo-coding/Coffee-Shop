import { StatusCodes } from 'http-status-codes';
import pino from 'pino';

const logger = pino();
import coffeeboxService from '../services/coffeebox.service.js';

const Status = {
    success: 'OK!',
    failure: 'Not Found!'
};
// CRUD controller
/**
 * This function is for get all coffee lists.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAllCoffee = (req, res) => {
    const lst = coffeeboxService.getAllCoffees();

    if (lst.length) {
        logger.info('Coffee-Lists!')
        return res.send(lst);
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status: Status.failure,
        msg: 'Error! Try again.'
    });
};

/**
 * This function is for get a coffee.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getCoffee = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = coffeeboxService.getCoffee(id);

    if (item) {
        logger.info(`Coffee Id: ${id}.`);
        return res.status(StatusCodes.OK).send({
            status: Status.success,
            item,
        });
    }
   
    return res.status(StatusCodes.NOT_FOUND).send({
        status : Status.failure,
        msg: `Item Id ${id} is not found.`
    });
}
/**
 * This function is for create a coffee item.
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createCoffee = (req,res) => {

    const { body: item } = req;
    const createdBox = coffeeboxService.createCoffee(item);

    logger.info('Creating Complete.');
    res.status(StatusCodes.CREATED).send({
        'status': Status.success,
        item: createdBox
    });
}
/**
 * This function is for update a coffee item.
 * 
 * @param {*} req 
 * @param {*} res 
 */
const updateCoffee = (req,res) => {
    const { body: item } = req;
    const id = parseInt(req.params.id);

    const updatedBox = coffeeboxService.updateCoffee(id, item);
    if(updatedBox)
    {
        logger.info(`ID ${id} has been updated.`);
        res.status(StatusCodes.OK).send({
            'status': Status.success,
            item: updatedBox,
        });
    }else{
        res.status(StatusCodes.NOT_FOUND).send({
            'status': Status.failure,
            msg: `User ${id} is not found.`,
        }); 
    }
}
/**
 * This function is for removing a coffee item.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const removeCoffee = (req,res) => {
    const { params } = req;
    const id = parseInt(params.id);
    const item = coffeeboxService.getCoffee(id);

    if(item){
        logger.info(`ID ${id} has been removed.`)
        const status = coffeeboxService.removeCoffee(id);
        return res.status(StatusCodes.OK).send({
            status: Status.success,
            msg: `User id number ${id} has been deleted.` 
        })
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status: Status.failure,
        msg: `User id number ${id} not found or have already deleted.`
    });
    
}

export default {
    getAllCoffee,
    getCoffee,
    createCoffee,
    updateCoffee,
    removeCoffee
}