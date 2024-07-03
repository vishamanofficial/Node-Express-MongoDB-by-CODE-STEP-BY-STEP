const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {
                name: 'Vishal',
                brand: 'apple',
                price: 29999,
                category:'mobile'
            },
            {
                name: 'mona',
                brand: 'apple',
                price: 29999,
                category:'mobile'
            },
            {
                name: 'aman',
                brand: 'apple',
                price: 29999,
                category:'mobile'
            }
        ]
    )
    console.log(result);
}
insert();