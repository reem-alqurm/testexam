'use strict';
let articleEl = document.getElementById('article');
let tableEl = document.createElement('table');
articleEl.appendChild (tableEl);
let formEl = document.getElementById('studentform');
let total = 0;
let getlist;
let id=0;
let allStudent=[];

function Student ( name ,email , mobilenumber,tutation ){
    this.name=name;
    this.email=email;
    this.mobilenumber=mobilenumber;
    
    this.studentAge=0;
    this.tuition=tutation;
    total=total+this.tuition;
   allStudent.push(this);
}

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
let th6 = document.createElement('th');
trh.appendChild(th6);
th6.textContent= 'Email';
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
    studentnm = studentnm[0];
    let tuition = parseInt(event.target.tuition.value) ; 
    
    let newstudent = new Student(studentnm,email,mobileNum,tuition);
    id++; 
    
    newstudent.save();
    newstudent.generatrandomage();
    tablebodyrender();


}
let totalEl = document.createElement('h3');
articleEl.appendChild(totalEl);
totalEl.textContent= 'Total :  ' + total;

 function tablebodyrender (){
let trb = document.createElement ('tr');
tableEl.appendChild(trb);
let td6 = document.createElement('td');
trb.appendChild(td6);
let td7 = document.createElement('td');
trb.appendChild(td7);
let td8 = document.createElement('td');
trb.appendChild(td8);
let td9 = document.createElement('td');
trb.appendChild(td9);
let td10 = document.createElement('td');
trb.appendChild(td10);
let td11 = document.createElement('td');
trb.appendChild(td11);
for(let y = 0 ; y <allStudent.length ; y++){
    td6.textContent= id;
    td7.textContent= allStudent[y].name;
    td8.textContent= allStudent[y].email;
    td9.textContent= allStudent[y].mobilenumber;
    td10.textContent= allStudent[y].studentAge;
    td11.textContent= allStudent[y].tuition;
    totalEl.textContent= 'Total :  ' + total;

}

}




Student.prototype.save = function (){
    localStorage.setItem('newstud', JSON.stringify(allStudent));
}
function get()
{
    getlist = JSON.parse(localStorage.getItem('newstud'));
    if(getlist){
        allStudent = getlist;
        tablebodyrender();
        }
       else{
        allStudent =[];
    }
    }
    get ();

