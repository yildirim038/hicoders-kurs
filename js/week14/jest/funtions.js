const axios = require('axios');

const functions = {
    checkValue: x => x,
    isNull: () => null,
    createUser: () => {
        const user = {
            firstName: 'Mehmet'
        }
        user['lastName'] = Unal;
        return user;
    },

    fetchUser: () => axios.get('https://jsonplace')

}
module.exports = functions;