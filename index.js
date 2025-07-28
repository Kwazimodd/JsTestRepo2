function rectangleArea(length, width) {
  if (length <= 0 || width <= 0) {
      throw new Error('Length and width must be positive numbers.');
  }
  return length * width;
}

module.exports = rectangleArea;const axios = require('axios');
const BookController = require('./BookController.js');

controller = new BookController();

test('get book by id', async () => {
    const response = await controller.findBookById('9781449365035');
    console.log(response.data)
    expect(response.status).toEqual(200);
})
