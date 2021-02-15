const year=document.querySelector('#year-output');
const month=document.querySelector('#month-output');
const date=document.querySelector('#date-output');
const hour=document.querySelector('#hour-output');
const minute=document.querySelector('#minute-output');
const second=document.querySelector('#second-output');
const button=document.querySelector('#convert-button');
const input=document.querySelector('#epoch-input');
const resetButton=document.querySelector('#reset-button');
const currentEpoch=document.querySelector('#current-epoch');
const localTime=document.querySelector('#local-time');


setInterval(()=>{
  currentEpoch.innerHTML = Math.floor(new Date().getTime()/1000);
  //currentEpoch.innerHTML = Math.floor(Date.now()/1000);   //this works too..
},1000);

setInterval(()=>{
  localTime.innerHTML = new Date();
},1000);

resetButton.addEventListener('click',()=>{
  input.value = "";
  year.value = "";
  month.value = "";
  date.value = "";
  hour.value = "";
  minute.value = "";
  second.value = "";
});



button.addEventListener('click',()=>{
  let epochDate = new Date(parseInt(input.value));//1611041456000
  year.value = epochDate.getFullYear();
  month.value = epochDate.getMonth()+1;
  date.value = epochDate.getDate();
  hour.value = epochDate.getHours();
  minute.value = epochDate.getMinutes();
  second.value = epochDate.getSeconds(); 
});

