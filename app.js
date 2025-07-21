const axios = require('axios');
const BookController = require('./BookController.js');

controller = new BookController();

test('get book by id', async () => {
    const response = await controller.findBookById('9781449365035');
    console.log(response.data)
    expect(response.status).toEqual(200);
})
// Функція-обробник події
function handleClick(event) {
  console.log('Button was clicked!');
  console.log(event.currentTarget);
  event.stopPropagation();
}

document.getElementById('p').addEventListener('click', handleClick);
document.getElementById('div').addEventListener('click', handleClick);
document.getElementById('form').addEventListener('click', handleClick);
document.getElementById('html').addEventListener('click', handleClick);