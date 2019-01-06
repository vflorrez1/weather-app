var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('not all arguments were numbers')
            }
        }, 1500)
    });
}

asyncAdd(5, 3).then((res) => {
    console.log(res);
    return asyncAdd(res, 4);
}).then((res) => {
    console.log(`should be 14. answer is ${res}`);
}).catch((er) => {
    console.log('unlucky son');
});
// var somePromise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     // resolve('hey it wokred.');
//     reject(`you're dry`);
//    }, 3000); 
// });

// somePromise.then((message) => {
//     console.log(`lol ${message}.`);
// },(erm) => {
//     console.log(`error lol ${erm}`);
// })