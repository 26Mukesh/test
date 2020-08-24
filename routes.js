module.exports = (app) => {

const user = require("./controller/userController");

//user register
app.post('/api/v1/user', user.createUser);
app.get('/api/v1/user/:id', user.getUserById);
app.get('/api/v1/users', user.getAllUsers);
app.put('/api/v1/user/:id', user.updateUser);
app.get('/api/v1/user/query', user.fuzzySearch);

}