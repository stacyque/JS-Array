//let persons = ['John','Tony','Mark','Clint','Anthony','Lucas']

/*
let output ="";
for (let x = 0 ; persons.length ; x++){
    output += `<li> ${persons[x]} </li>`
}
document.getElementById('container').innerHTML = `<ul> ${output} </ul>`
document.write(output);
*/

//Objects
/*
let person = {
    fname:'John',
    lname:'Doe',
    age:32
}
*/

//Array of Objects
/let persons = [
    {
        fname:"John",
        lname:"Doe",
        age:32
    },
    {
        fname:"Lucas",
        lname:"Films",
        age:33
    },
    {
        fname:"Tony",
        lname:"Stark",
        age:40
    }
]
persons.forEach(function(item){
    console.log(`Your name is ${item.fname} ${item.lname}`+ ` and your age is ${item.age}`)
})