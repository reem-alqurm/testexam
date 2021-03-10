'use strict';
let articleEl = document.getElementById('article');
let tableEl = document.createElement('table');
articleEl.appendChild (tableEl);
let formEl = document.getElementById('studentform');
let total = 0;
let getlist;
function Student ( name ,email , mobilenumber,tutation ){
    this.name=name;
    this.email=email;
    this.mobilenumber=mobilenumber;
    this.id=0;
    this.studentAge=0;
    this.tuition=tutation;
    
    Student.allStudent.push(this);
}
Student.allStudent=[];

Student.prototype.generatrandomage= function  (){
    return this.studentAge= Math.floor(Math.random()*(24-18)+18);
}

function tableheaderrender(){
let trh = document.createElement ('tr');
tableEl.appendChild(trh);
let th1 = document.createElement('th');
trh.appendChild(th1);
th1.textContent= 'id';
let th2 = document.createElement('th');
trh.appendChild(th2);
th2.textContent= 'Name';
let th3 = document.createElement('th');
trh.appendChild(th3);
th3.textContent= 'Mobile';
let th4 = document.createElement('th');
trh.appendChild(th4);
th4.textContent= 'Age';
let th5 = document.createElement('th');
trh.appendChild(th5);
th5.textContent= 'Tuition';
}
tableheaderrender();

formEl.addEventListener('submit', addnewstudent);
function addnewstudent(event){
    event.preventDefault();
    let email = event.target.studentemail.value;
    let mobileNum = event.target.studentnumber.value;
    let studentnm = email.split('@');
    // let selected = event.options [event.selectedIndex].value;
    let selected = event.target.options[event.target.selectedIndex].value; 
    // let selected = document.getElementById("tuition").value
    let newstudent = new Student(studentnm,email,mobileNum,selected);
    newstudent.id++; 
    total = total +selected; 
    newstudent.save();
    newstudent.get();
    newstudent.generatrandomage();
    newstudent.tablebodyrender();

}

Student.prototype.tablebodyrender = function(){
let trb = document.createElement ('tr');
tableEl.appendChild(trb);
let td6 = document.createElement('td');
trb.appendChild(td6);
td6.textContent= this.id;
let td7 = document.createElement('td');
trb.appendChild(td7);
td7.textContent= this.name;
let td8 = document.createElement('td');
trb.appendChild(td8);
td8.textContent= this.mobilenumber;
let td9 = document.createElement('td');
trb.appendChild(td9);
td9.textContent= this.studentAge;
let td10 = document.createElement('td');
trb.appendChild(td10);
td10.textContent= this.tuition;



}

let totalEl = document.createElement('h3');
articleEl.appendChild(totalEl);
totalEl.textContent= 'Total:  ' + total;


Student.prototype.save = function (){
    localStorage.setItem('newstud', JSON.stringify(this.allStudent));
}
Student.prototype.get = function ()
{
    getlist = JSON.parse(localStorage.getItem('newstud'));
    if(getlist){
        allStudent = getlist;
        for(let j = 0; j< getlist.length ; j++)
        {
           this.allStudent[j].tablebodyrender();

        }
       
    }
    else{
        this.allStudent =[];
    }

}