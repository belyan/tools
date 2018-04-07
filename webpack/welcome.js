"use strict";

module.exports = function(message) {
    console.log(NODE_ENV);
    console.log(LANG);

    if (NODE_ENV === "development") {
        console.log(`Welcome ${message}`);
    }
};
