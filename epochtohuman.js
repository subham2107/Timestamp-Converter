const year=document.querySelector('#year-output');
const month=document.querySelector('#month-output');
const date=document.querySelector('#date-output');
const hour=document.querySelector('#hour-output');
const minute=document.querySelector('#minute-output');
const second=document.querySelector('#second-output');
const button=document.querySelector('#convert-button');
const input=document.querySelector('#epoch-input');

button.addEventListener('click',()=>{
  let epochDate = new Date(parseInt(input.value));//1611041456000
  year.value = epochDate.getFullYear();
  month.value = epochDate.getMonth()+1;
  date.value = epochDate.getDate();
  hour.value = epochDate.getHours();
  minute.value = epochDate.getMinutes();
  second.value = epochDate.getSeconds(); 
});