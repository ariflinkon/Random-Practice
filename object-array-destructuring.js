/**
 * Creates a new fish object by merging additional properties with an existing fish object.
 *
 * @param {Object} fish - The original fish object.
 * @param {string} fish.name - The name of the fish.
 * @param {number} fish.price - The price of the fish.
 * @param {string} fish.phone - The contact phone number.
 * @param {string} fish.address - The address where the fish is located.
 * @param {string} fish.dress - The dress color of the fish.
 * @param {Object} additionalProperties - Additional properties to merge into the new fish object.
 * @param {string} additionalProperties.color - The color of the fish.
 * @param {number} additionalProperties.price - The updated price of the fish.
 * @param {number} additionalProperties.age - The age of the fish.
 * @param {number} additionalProperties.weight - The weight of the fish.
 * @returns {Object} The new fish object with merged properties.
 */
const createNewFish = (fish, additionalProperties) => {
    return { ...fish, ...additionalProperties };
};

const fish = {
    name: 'King Hilsha',
    price: 90000,
    phone: '01777777777',
    address: 'Chadpur, Dhaka',
    dress: 'white'
};

const { name, price, phone, address, dress } = fish;
console.log(name, phone, address); // King Hilsha 01777777777 Chadpur, Dhaka

const newFish = createNewFish(fish, { color: 'silver', price: 8000, age: 7, weight: 1.5 });
console.log(newFish);