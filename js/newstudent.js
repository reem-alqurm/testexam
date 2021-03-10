'use strict';
let newob ;
let arrayofstudent = [];
let getlist;
let articleEl = document.getElementById('article');
let ulEl = document.createElement('ul');
articleEl.appendChild(ulEl);
let olel = document.createElement('ol');
articleEl.appendChild(olel);
let table = document.createElement ('table');
articleEl.appendChild(table);
function Student(studentname , classname){
    this.studentname = studentname;
    this.classname=classname;
    arrayofstudent.push(this);

}
let formEl = document.getElementById('newstudent');
formEl.addEventListener ('submit', mystudentfunction);
 tableheadrender();
function mystudentfunction (event)
{
    
    event.preventDefault();
        const name = event.target.studentname.value;
        const cname = document.getElementById('Classname').value;
        // console.log(name);
        // console.log(cname);
        newob = new Student (name , cname);
        newob.render();
        newob.tablerender();
        newob.savetolocal();
        newob.getfromlocal();
}

Student.prototype.render= function(){
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= `${this.studentname} regestered  ${this.classname}class`;
    console.log(arrayofstudent);
}

function tableheadrender()
{
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent= "Student Name";
    let th2 = document.createElement('th');
    tr1.appendChild(th2);
    th2.textContent= "Student class";

}
Student.prototype.tablerender = function()
{
    let tr2 = document.createElement('tr');
    table.appendChild(tr2);
    let th3= document.createElement('th');
    tr2.appendChild(th3);
    th3.textContent= this.studentname;
    let th4 = document.createElement('th');
    tr2.appendChild(th4);
    th4.textContent= this.classname;

}
console.log(arrayofstudent);
 Student.prototype.savetolocal = function(){

 localStorage.setItem('student',JSON.stringify(arrayofstudent));

} 
Student.prototype.getfromlocal = function(){
    
     getlist =JSON.parse (localStorage.getItem('student'));
     if(getlist){
         arrayofstudent=getlist;
         let oli = document.createElement('li');
         olel.appendChild(oli);
           for(let i = 0 ; i < getlist.length; i++)
           {
               
               oli.textContent= `${getlist[i].studentname} Registered  ${getlist[i].classname} Class`;
     
           } 
     }
     else{
         arrayofstudent=[];
     }
    
    }
    function getData()
    {
        getlist =JSON.parse (localStorage.getItem('student'));
        if(getlist){
            arrayofstudent=getlist;
           
              for(let i = 0 ; i < getlist.length; i++)
              {
                              let oli = document.createElement('li');
                               olel.appendChild(oli);

                  oli.textContent= `${getlist[i].studentname} Registered  ${getlist[i].classname} Class`;
        
              } 
        }
        else{
            arrayofstudent=[];
        }
       

    }
    getData();

   