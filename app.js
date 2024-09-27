let form = document.getElementById("form");
let input = document.getElementById("input-value");
let boxes1 = document.getElementById("box1");
let boxes2 = document.getElementById("box2");
let sumBtn = document.getElementById("sum-btn");
let selectOperator = document.getElementById("select");
let result = document.getElementById("result");
let value;

form.addEventListener("submit", (event) => {
    event.preventDefault();

  value = input.value;
   // console.log(value);

   boxes1.innerHTML = "";
   boxes2.innerHTML = "";
   result.innerHTML = "";

    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
      
        boxes1.innerHTML += `<input type="number" id="input1-${i}${j}" value="0" >`
        boxes2.innerHTML += `<input type="number" id="input2-${i}${j}" value="0" >`

        result.innerHTML += `<input type="number" id="result-${i}${j}" value="" style="width: 25px;" disabled>`
        
        
        };

        boxes1.innerHTML += "<br>";
        boxes2.innerHTML += "<br>";
        result.innerHTML += "<br>";
    }
})

sumBtn.addEventListener("click", () => {
    // console.log("chal rha ha");

    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
        let numValue1 = parseInt(document.querySelector(`#input1-${i}${j}`).value);
        let numValue2 = parseInt(document.querySelector(`#input2-${i}${j}`).value);
        let sum

        if (isNaN(numValue1) || isNaN(numValue2)) {
            alert("Invalid matrix input values. Please ensure all fields are filled.");
        } else if (selectOperator.value === "+") {
            sum = numValue1 + numValue2;
        console.log(sum);
        } else  if (selectOperator.value === "-") {
             sum = numValue1 - numValue2;
            console.log(sum);
        } else  if (selectOperator.value === "*") {
             sum = numValue1 * numValue2;
            console.log(sum);
        } else {
            alert("Pleace Select a Valid Operator");
        }
        // console.log(numValue1);
        // console.log(numValue2);
        // result.innerHTML = 
        document.querySelector(`#result-${i}${j}`).value = sum


        
        }}
    
});