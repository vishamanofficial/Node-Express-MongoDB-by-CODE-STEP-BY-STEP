const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = data.deleteMany(
        { name:'aman'}
    )
}
deleteData();