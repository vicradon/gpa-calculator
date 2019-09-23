let course_list_ids = ["mth101", "phy101", "chm101", "bio101", "gst101", "gst103", "eng101", "eng103", "frn101"];

let course_list_values = ["MTH 101", "PHY 101", "CHM 101", "BIO 101", "GST 101", "GST 103", "ENG 101", "ENG 103", "FRN 101"];
const calculator = document.querySelector("#calculator");
const calculate = document.querySelector("#calculate");
let input_values;
var allowed_values = ["A", "B", "C", "D", "E", "F"];
var input = document.querySelectorAll("input");

calculate.addEventListener('click', () => {
    input_values = Array.from(document.querySelectorAll(".input"));

    for (let j = 0; j < 9; j++) {
        input_values[j] = input_values[j].value;
    }

    for (let i of input_values) {
        if (i === "A") input_values[input_values.indexOf(i)] = 5;
        else if (i === "B") input_values[input_values.indexOf(i)] = 4;
        else if (i === "C") input_values[input_values.indexOf(i)] = 3;
        else if (i === "D") input_values[input_values.indexOf(i)] = 2;
        else if (i === "E") input_values[input_values.indexOf(i)] = 1;
        else if (i === "F") input_values[input_values.indexOf(i)] = 0;
        else { input_values[input_values.indexOf(i)] = 0 }
    }
    var num_of_units = [4, 4, 4, 3, 2, 1, 1, 1, 1];

    var gpa = 0;
    for (let i = 0; i < 9; i++) {
        gpa += num_of_units[i] * input_values[i];
    }
    gpa = (gpa / 21).toFixed(2);
    console.log(gpa);
    console.log(input_values, num_of_units);
    gpahtml = document.querySelector("#gpa");
    gpahtml.innerText = "Your GPA is:   " + gpa;
    
    // if (input.value in allowed_values){
    //     gpahtml.innerText = "Your GPA is:   " + gpa;
    // }
    // else{
    //     gpahtml.innerText = "Input must be a letter between A and F. Oga, put the right thing!";
    // }

});


for (let i = 0; i < 9; i++) {
    let elem = document.createElement("label");
    elem.innerHTML = course_list_values[i] + '<input type = "text" maxlength = "1" class = "input" id =' + course_list_ids[i] + '>';
    calculator.appendChild(elem);
}



// switch(i){
//   case "A" : {input_values[input_values.indexOf(i)] = 5}
//   case "B" : {input_values[input_values.indexOf(i)] = 4}
//   case "C" : {input_values[input_values.indexOf(i)] = 3}
//   case "D" : {input_values[input_values.indexOf(i)] = 2}
//   case "E" : {input_values[input_values.indexOf(i)] = 1}
//   case "F" : {input_values[input_values.indexOf(i)] = 0}
//   //default:break;
// }