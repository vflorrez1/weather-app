var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'vic'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userOb) => {
    console.log(userOb);
});