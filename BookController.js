const axios = require('axios');
const jsonData = require('../env.json');

module.exports = class BookController {
    async findBookById(id) {
        return await axios.get(jsonData.baseUrl, {params: {book: id}});
    }

    async putBook(book) {

    }

    async postBook(book) {

    }

    async postBooks(books) {

    }

    async deleteBookById(id) {

    }
}