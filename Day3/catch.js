var mypromise = new Promise(function(resolve, reject) {
    const x = 10;
    const y = 20;
    if (x == y) {
        resolve();
    } else {
        reject();
    }
});


mypromise.then(function() {
    console.log('Success');
}).catch(function() {
    console.log('Error');
});