"use strict";

let myCalculator = {
    getNumber: [],
    valueOne: 0,
    inputValue: 0,
    actionButtonPress: 0,
    result: 0,
    selected_button: 0,
    operators: ""
};

const clearDisplay = () => {
    myCalculator.getNumber = [];
    myCalculator.inputValue = myCalculator.valueOne = myCalculator.result = myCalculator.actionButtonPress = 0;
    document.querySelector("#input_value").value = 0;
    releaseDot();
    removeAllClass();
};

const removeAllClass= () =>{
    myCalculator.selected_button = document.querySelectorAll(".active_button");

    for (let i = 0; i < myCalculator.selected_button.length; i++) {
        myCalculator.selected_button[i].classList.remove('active_button');
        myCalculator.selected_button[i].disabled = false;

    }
};


const getNumbers = (id) => {
    myCalculator.getNumber.push(id);
    myCalculator.inputValue = parseFloat(myCalculator.getNumber.join(""));
    console.log("button pressed");
    document.querySelector("#input_value").value = myCalculator.inputValue;

    removeAllClass();

    if (id === ".") {
        preventDotAction();
    }
};


const calculateEquation = () => {
    if (myCalculator.actionButtonPress !== 0) {
        myCalculator.getNumber = myCalculator.getNumber.join("");
        myCalculator.getNumber = parseFloat(myCalculator.getNumber);

        if (myCalculator.operators === "+") {
            myCalculator.result = myCalculator.valueOne + myCalculator.getNumber;
            viewOutput();
            additionRemoveStyle();
        }

        if (myCalculator.operators === "-") {
            myCalculator.result = myCalculator.valueOne - myCalculator.getNumber;
            viewOutput();
            subtractionRemoveStyle();
        }

        if (myCalculator.operators === "*") {
            myCalculator.result = myCalculator.valueOne * myCalculator.getNumber;
            viewOutput();
            multiplicationRemoveStyle();
        }

        if (myCalculator.operators === "/") {
            myCalculator.result = myCalculator.valueOne / myCalculator.getNumber;
            viewOutput();
            divisionRemoveStyle();
        }

        myCalculator.getNumber = [0];
        myCalculator.actionButtonPress = 0;
        equalAddStyle();
        console.log("Equal button Pressed");
    }
};

const addition = () => {
    if (myCalculator.actionButtonPress !== 1) {

        checkCalculateValue();
        additionAddStyle();
        equalRemoveStyle();
        myCalculator.actionButtonPress = 1;
        myCalculator.operators = "+";
        document.querySelector("#operation-sign").value = myCalculator.operators;
        console.log("Addition button Pressed");
    }
};

const subtraction = () => {
    if (myCalculator.actionButtonPress !== 2) {

        checkCalculateValue();
        subtractionAddStyle();
        equalRemoveStyle();
        myCalculator.actionButtonPress = 2;
        myCalculator.operators = "-";
        document.querySelector("#operation-sign").value = myCalculator.operators;
        console.log("Subtraction button Pressed");
    }

};

const multiplication = () => {
    if (myCalculator.actionButtonPress !== 3) {

        checkCalculateValue();
        multiplicationAddStyle();
        equalRemoveStyle();
        myCalculator.actionButtonPress = 3;
        myCalculator.operators = "*";
        document.querySelector("#operation-sign").value = myCalculator.operators;
        console.log("Multiplication button Pressed");
    }
};

const division = () => {
    if (myCalculator.actionButtonPress !== 4) {

        checkCalculateValue();
        divisionAddStyle();
        equalRemoveStyle();
        myCalculator.actionButtonPress = 4;
        myCalculator.operators = "/";
        document.querySelector("#operation-sign").value = myCalculator.operators;
        console.log("Division button Pressed");
    }
};

const viewOutput = () => {
    console.log("Result Printed");

    myCalculator.getNumber = [0];
    document.querySelector("#input_value").value = myCalculator.result;
};


const checkCalculateValue = () => {
    if (myCalculator.valueOne === 0) {
        myCalculator.valueOne = myCalculator.inputValue;
        myCalculator.getNumber = [0];
        console.log("Value Saved");
        releaseDot();
    } else {
        myCalculator.valueOne = myCalculator.result;
        console.log("saved value for next calculation");
        releaseDot();
    }
};

const preventDotAction = () => {
    let preventDot = document.querySelector(".dots");
    preventDot.disabled = true;
    preventDot.classList.add('dotButton');
    preventDot.innerHTML = "Used";
};

const releaseDot = () => {
    let preventDot = document.querySelector(".dots");
    preventDot.disabled = false;
    preventDot.classList.remove('dotButton');
    preventDot.innerHTML = "&#8729;";
};

const additionAddStyle = () => {
    document.querySelector(".addition").disabled = true;
    document.querySelector(".addition").classList.add('active_button');
};

const additionRemoveStyle = () => {
    document.querySelector(".addition").disabled = false;
    document.querySelector(".addition").classList.remove('active_button');
};

const equalAddStyle = () => {
    document.querySelector(".equal").disabled = true;
    document.querySelector(".equal").classList.add('active_button');
};

const equalRemoveStyle = () => {
    document.querySelector(".equal").disabled = false;
    document.querySelector(".equal").classList.remove('active_button');
};

const subtractionAddStyle = () => {
    document.querySelector(".subtraction").disabled = true;
    document.querySelector(".subtraction").classList.add('active_button');
};

const subtractionRemoveStyle = () => {
    document.querySelector(".subtraction").disabled = false;
    document.querySelector(".subtraction").classList.remove('active_button');
};

const multiplicationAddStyle = () => {
    document.querySelector(".multiplication").disabled = true;
    document.querySelector(".multiplication").classList.add('active_button');
};

const multiplicationRemoveStyle = () => {
    document.querySelector(".multiplication").disabled = false;
    document.querySelector(".multiplication").classList.remove('active_button');
};

const divisionAddStyle = () => {
    document.querySelector(".division").disabled = true;
    document.querySelector(".division").classList.add('active_button');
};

const divisionRemoveStyle = () => {
    document.querySelector(".division").disabled = false;
    document.querySelector(".division").classList.remove('active_button');
};


