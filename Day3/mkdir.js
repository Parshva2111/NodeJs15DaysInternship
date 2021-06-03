const fs = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname, 'floder'), (err) => {
    if (err) {
        return console.log.error(err);
    }
    console.log('Directory created successsfully!');
});