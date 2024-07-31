import * as yup from 'yup';

const Minimum_Length = {
    itemName: 2,
    price: 2
};
const Maximum_Length = {
    itemName: 30,
    price: 20
}
export const getCoffee = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        }
      },
}
export const createCoffee = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                itemName: yup.string().min(Minimum_Length.itemName).max(Maximum_Length.itemName),
                price: yup.string().min(Minimum_Length.price).max(Maximum_Length.price),
                })
        }
      },
    
};
export const updateCoffee = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        },
        body: {
            yupSchema: yup.object().shape({
                itemName: yup.string().min(Minimum_Length.itemName).max(Maximum_Length.itemName),
                price: yup.string().min(Minimum_Length.price).max(Maximum_Length.price),
             })
        }
      },
    
};
export const removeCoffee = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            })
        }
      },
}