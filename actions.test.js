const axios = require('axios');
const jsonData = require('../env.json');
const { faker } = require('@faker-js/faker');

jest.mock('axios');

const mockedProductResponse = {
    data: {},
    status: 200
}

test('create product', async () => {
    const createProduct = await axios.post(`${jsonData.baseUrl}/products/add`,
        {
            'title': 'MyOwnProduct'
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jsonData.token}`
            }
        });
    console.log(createProduct.data)
    expect(createProduct.status).toEqual(200)

    expect(() => someFunction()).toThrow("Invalid Endpoint");
})

test('Create user', async() => {
    await axios.post.mockResolvedValue({data:{
        'firstName': faker.person.firstName(),
        'lastName': faker.person.lastName(),
        'age': faker.number.int({min:18, max: 56})
    }})
    const createUser = await axios.post(`${jsonData.baseUrl}/users/add`,
    {
        'firstName': faker.person.firstName(),
        'lastName': faker.person.lastName(),
        'age': faker.number.int({min:18, max: 56}),
    },
    {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": jsonData.token
        }
    })
    console.log(createUser.data)
})