'use strict';
let formEl = document.getElementById('newbransh');
formEl.addEventListener('submit', addnewbranch);
let articleEl = document.getElementById('article');
let tableEl = document.createElement('table');
articleEl.appendChild(tableEl);
let getlocal;
function random ( max, min){
    return Math.floor(Math.random ()* (max-min)+min);
}
let hour = ['8', '9','10','11','12','1','2','3','4','5','6','7','8'];
let avgco = 0;


function Bransh(name , min , max , avg )
{
    this.name=name;
    this.max=max;
    this.min=min;
    this.avg=avg;
    this.randomcu =[];
    this.cooki=[];
    this.total=0;
    Bransh.allbransh.push(this);
}
Bransh.allbransh = [];
Bransh.prototype.randomCutomer = function(){
    for (let i =0; i< hour.length; i++){
        this.randomcu.push( random(this.max,this.min));
    }
    
}

Bransh.prototype.cookiesoldparhour = function(){
    for(let j = 0; j< hour.length; j++){
        this.cooki.push(Math.ceil(this.randomcu[j]*this.avg));
        this.total+= this.cooki[j];        
    }
}
Bransh.prototype.save= function (){
   localStorage.setItem('newc', JSON.stringify(Bransh.allbransh));

}
Bransh.prototype.getformlocal= function(){
    getlocal = JSON.parse(localStorage.getItem('newc'));
    let oli = document.createElement('ol');
    articleEl.appendChild (oli);
    let liel = document.createElement ('li');
    oli.appendChild(liel);
    for(let x= 0 ;x< getlocal.length; x++){
        liel.textContent= `${getlocal[x].name} has a min ${getlocal[x].min}`;
    }
    


}
function headertablerender ()
{
    let trh = document.createElement('tr');
    tableEl.appendChild(trh);
    let th1 = document.createElement('th');
    trh.appendChild(th1);
    th1.textContent= 'Branch Name';
    for(let i = 0; i < hour.length ; i++){
    let th2 = document.createElement('th');
    trh.appendChild(th2);
    th2.textContent= 'At  '+ hour[i]  ;
    }
    let tht = document.createElement('th');
    trh.appendChild(tht);
    tht.textContent = 'Total';
  

}
headertablerender(); 

Bransh.prototype.tablebodyrender = function(){
    let trb = document.createElement('tr');
    tableEl.appendChild(trb);
    let td1 = document.createElement('td');
    trb.appendChild(td1);
    td1.textContent= this.name;
    let total2=0;
    for(let i = 0; i < hour.length ; i++){
    let td2= document.createElement('td');
    trb.appendChild(td2);
    td2.textContent= this.randomcu[i];

}
    let tdt = document.createElement('td');
    trb.appendChild(tdt);
    tdt.textContent=this.total;
}

let savetolocal ;
function addnewbranch(event){
    event.preventDefault();
    let branname = event.target.branshname.value;
    let mincut = event.target.minimum.value;
    let maxcut = event.target.maximum.value;
    let avgco = event.target.avareg.value;
    let newbar = new Bransh (branname , mincut , maxcut , avgco);
    newbar.randomCutomer(mincut,maxcut); 
     newbar.cookiesoldparhour(avgco);
    newbar.tablebodyrender();
    newbar.save();
    newbar.getformlocal();

}

