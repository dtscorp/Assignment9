//mengimport  method dari StudentController

const {index, store} = require("./StudentController.js");

//membuat fungsi utama 

const main = () => {
    index();
    store('evanny');
}

main(); 