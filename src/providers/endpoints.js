const EndPoints = {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    SOCKET_URL: '',
    LOG_IN: '',
    SIGN_UP: '',
    USER:'/users',
    PROPERTIES: '/properties',
    GET_PROPERTIES: function (id) {
        return `${this.PROPERTIES}/${id}`;
    }
};

export default EndPoints;