// console.log(window.document)

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList')

addTaskBtn.addEventListener('click', ()=>{
    const taskValue = taskInput.value.trim();
    if(taskValue === '') return

    const li = document.createElement('li')
    const taskNumber = taskList.children.length + 1 //adding order number

    li.textContent= `${taskNumber}. ${taskValue}`
    taskList.appendChild(li)
    taskInput.value = ''
})

import { test } from "./test.js";
 console.log(test)
