//mengimport data student dari data.js menggunakan require
const students =require('./data.js');

//membuat fungsi index
const index = () =>{
    for(const student of students){
        console.log(student);
    }
}
//membuat fungsi tambah/store data
const store = (name) => {
    students.push(name);
    index();
}

//export method index dan store 
module.exports = {index,store}

