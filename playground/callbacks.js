var getUser = (id, callback) => {
    var user = {
        id: 31,
        name: "dave"
    }

    setTimeout(() => {
        callback(user)
    }, 3000)
};

getUser(31, (user) => {
    console.log(user);
})