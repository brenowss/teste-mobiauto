const updateData = require('./index');

test('updates object properties correctly', () => {
  const currentObject = { name: 'Marcos', country: 'Brasil', age: 22 };
  const newDataObject = { country: 'Japão', age: 33 };
  const expectedObject = { name: 'Marcos', country: 'Japão', age: 33 };
  expect(updateData(currentObject, newDataObject)).toEqual(expectedObject);
});

test('does not add new properties to object', () => {
  const currentObject = { name: 'Marcos', country: 'Brasil', age: 22 };
  const newDataObject = {
    price: 89.9,
    amount: 15,
    description: 'camiseta 100% algodão',
  };
  const expectedObject = { name: 'Marcos', country: 'Brasil', age: 22 };
  expect(updateData(currentObject, newDataObject)).toEqual(expectedObject);
});

test('does not update object if property does not exist', () => {
  const currentObject = { name: 'Rafael', country: 'Chile', age: 42 };
  const newDataObject = { name: 'Camiseta Polo', price: 59.9, amount: 30 };
  const expectedObject = { name: 'Camiseta Polo', country: 'Chile', age: 42 };
  expect(updateData(currentObject, newDataObject)).toEqual(expectedObject);
});
