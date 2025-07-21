const axios = require('axios');

module.exports = class BookController {
    async findBookById(id) {
        return await axios.get(`https://demoqa.com/books`, {params: {book: id}});
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
