import coffeeboxs from '../data/coffeeboxs.data.js'

const get = (coffeeId) => {
    const findItem = coffeeboxs.find((item) => 
        item.id === coffeeId
    );
    return findItem;
}
const getAll = () => {
    return coffeeboxs;
};
/**
 * Insert a coffee list.
 * 
 * @param { Object } item 
 */
const create = (item) => {
    const newItem = {
        id: coffeeboxs.length +1,
        ...item
    };
    coffeeboxs.push(newItem);
};

/**
 * Update a coffee data.
 * 
 * @param { number } itemId 
 * @param { Object } newItem 
 * @returns 
 */
const update = (itemId, newItem) =>{
    let existingItem = null;
    let coffeeBoxIndex;

    coffeeboxs.map((coffeeBox,index) =>{
        if(coffeeBox.id === itemId){
            existingItem = coffeeBox;
            coffeeBoxIndex = index;
        }
    });
    
    const updatedBox = {
        ...existingItem,
        ...newItem
    }
    coffeeboxs.splice(coffeeBoxIndex, 1, updatedBox);
    return updatedBox;
};

/**
 * Remove a coffee data.
 * 
 * @param { number } itemId
 * @returns
 */
const remove = (itemId) => {
    const deleteBox = (item, index) => {
        if(item.id === itemId){
            coffeeboxs.splice(index, 1);
        }
    }
    return coffeeboxs.find(deleteBox);
}

export default {
    get,
    getAll,
    create,
    update,
    remove
}
