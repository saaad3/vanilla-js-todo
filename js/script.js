"use strict";

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  const userInput = input.value;
  const newToDo = {
    toDo: userInput,
    status: false
  }
  toDos.push(newToDo);
});
