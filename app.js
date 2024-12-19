let variable1 = "Hello", variable2 = 42, variable3 = true;
console.log(variable1, variable2, variable3);






//chapter #5

//Question:1
        let number1 = +prompt("Enter the first number:"); // prompt allows users to input values dynamically during program execution.
        let number2 = +prompt("Enter the second number:");

        // Add them and store in a new variable
        let sum = number1 + number2;

        // Display the result in the browser
        document.write("<h2>Your Answer is this " + number1 + " and " + number2 + " is " + sum + ".</h2>");



        //Question:2

        let number3 = +prompt("Enter the first number:"); // Convert input to a number
        let number4 = +prompt("Enter the second number:"); // Convert input to a number

        // Perform arithmetic operations
        let sum2 = number3 + number4;              // Addition
        let difference = number3 - number4;       // Subtraction
        let product = number3 * number4;          // Multiplication
        let quotient = number3 / number4;         // Division
        let modulus = number3 % number4;  

                // Display the results in the browser
                document.write("<h2>Results:</h2>");
                document.write("<p>Addition: " + number3 + " + " + number4 + " = " + sum + "</p>");
                document.write("<p>Subtraction: " + number3 + " - " + number4 + " = " + difference + "</p>");
                document.write("<p>Multiplication: " + number3 + " * " + number4 + " = " + product + "</p>");
                document.write("<p>Division: " + number3 + " / " + number4 + " = " + quotient + "</p>");
                document.write("<p>Modulus: " + number3 + " % " + number4 + " = " + modulus + "</p>");



        //Question:3

                
        // a. Declare a variable
        let number;

        // b. Show the value of the variable after declaration
        document.write("<p>Value after variable declaration is: " + number + "</p>");

        // c. Initialize the variable with some number
        number = 5;

        // d. Show the initial value
        document.write("<p>Initial value: " + number + "</p>");

        // e. Increment the variable
        number++;

        // f. Show the value after increment
        document.write("<p>Value after increment is: " + number + "</p>");

        // g. Add 7 to the variable
        number += 7;

        // h. Show the value after addition
        document.write("<p>Value after addition is: " + number + "</p>");

        // i. Decrement the variable
        number--;

        // j. Show the value after decrement
        document.write("<p>Value after decrement is: " + number + "</p>");

        // k. Show the remainder after dividing the variable’s value by 3
        let remainder = number % 3;
        document.write("<p>The remainder when divided by 3 is: " + remainder + "</p>");



        //Question:4

        let ticketPrice = 600; // Price of one movie ticket in PKR

         // Calculate the cost of buying 5 tickets
        let totalCost = ticketPrice * 5;

         // Display the result in the browser
        document.write("<p>The cost of one movie ticket is " + ticketPrice + " PKR.</p>");
        document.write("<p>The cost of buying 5 movie tickets is " + totalCost + " PKR.</p>");


//Question:5

let table = 4;
 console.log(table + "x" + 1 + "=" + table * 1);
 console.log(table + "x" + 2 + "=" + table * 2);
 console.log(table + "x" + 3 + "=" + table * 3);
 console.log(table + "x" + 4 + "=" + table * 4);
 console.log(table + "x" + 5 + "=" + table * 5);
 console.log(table + "x" + 6 + "=" + table * 6);
 console.log(table + "x" + 7 + "=" + table * 7);
 console.log(table + "x" + 8 + "=" + table * 8);
 console.log(table + "x" + 9 + "=" + table * 9);
 console.log(table + "x" + 10 + "=" + table * 10);


//chapter#6
 //Question:3

 
 function greetUser() {
        // Get the name from the input field
        const name = document.getElementById("username").value;

        // Check if the input is empty
        if (name.trim() === "") {
            document.getElementById("greeting").innerText = "Please enter your name.";
        } else {
            // Display the greeting
            document.getElementById("greeting").innerText = `Hello, ${name}! Welcome!`;
        }
    }


    //question5

    function displayTable() {
        // Get the input number
        let num = document.getElementById("number").value;

        // Default to 5 if input is empty
        if (num.trim() === "") {
            num = 5;
        } else {
            num = parseInt(num);
        }

        // Generate the multiplication table
        let table = `<table>`;
        table += `<tr><th colspan="2">Multiplication Table of ${num}</th></tr>`;
        for (let i = 1; i <= 10; i++) {
            table += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
        }
        table += `</table>`;

        // Display the table in the result section
        document.getElementById("result").innerHTML = table;
    }


