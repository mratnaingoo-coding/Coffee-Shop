import coffeeDao from '../models/persistence/coffeebox.dao.js'

const getAllCoffees = () => coffeeDao.getAll();
/**
 * Get a user from its ID.
 * 
 * @param { integer } itemId 
 * @returns 
 */
const getCoffee = (itemId) => coffeeDao.get(itemId);

const createCoffee = (item) => coffeeDao.create(item);

const updateCoffee = (itemId, items)=> coffeeDao.update(itemId, items);

const removeCoffee = (itemId) => coffeeDao.remove(itemId);


export default{
    getAllCoffees,
    getCoffee,
    createCoffee,
    updateCoffee,
    removeCoffee
}