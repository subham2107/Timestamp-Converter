const year=document.querySelector('#year-input');
const month=document.querySelector('#month-input');
const date=document.querySelector('#date-input');
const hour=document.querySelector('#hour-input');
const minute=document.querySelector('#minute-input');
const second=document.querySelector('#second-input');
const button=document.querySelector('#convert-button');
const output=document.querySelector('#epoch-output');
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
  output.value = "";
  year.value = "";
  month.value = "";
  date.value = "";
  hour.value = "";
  minute.value = "";
  second.value = "";
});

function addZero(x)
{
  if(x.length===1)
  x='0'+x;
  return x;
}
button.addEventListener('click',()=>{
  humanDate = `${addZero(year.value)}-${addZero(month.value)}-${addZero(date.value)}T${addZero(hour.value)}:${addZero(minute.value)}:${addZero(second.value)}`;
  const myDate = new Date(humanDate);   
  output.value = (myDate.getTime())/1000;
});

