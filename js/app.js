// form to fill 
'usestrect';
function randomMark(min , max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
    
}
let sut=[];
let divel = document.getElementById('article')
let table= document.createElement('table'); 
let totale = 0;
function Student(stuName , number, age)
 {
     this.stuName=stuName;
     this.age=age;
     this.number=number;
     this.marke =0;
     sut.push(this);

}

Student.prototype.updatemark = function()
{
    this.marke=randomMark(50,100) ;
    totale+=this.marke;


}

function headrrender()
{
divel.appendChild(table);
let tr = document.createElement('tr');
table.appendChild(tr);
 let th1 = document.createElement('th');
tr.appendChild(th1);th1.textContent = 'Student name';
let th2 = document.createElement('th');
tr.appendChild(th2);
th2.textContent = 'Student number';
let th3 = document.createElement('th');
tr.appendChild(th3);
th3.textContent = 'Student age';
let th4 = document.createElement('th');
tr.appendChild(th4);
th4.textContent = 'Student marke';
}

Student.prototype.render=function()
{
    let tr2 = document.createElement('tr');
    table.appendChild(tr2);
    let td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent= this.stuName;
    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent= this.number;
    let td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.textContent= this.age;
    let td4 = document.createElement('td');
    tr2.appendChild(td4);
    td4.textContent= this.marke;

}
function footerrender ()
{
    
    let trf = document.createElement('tr');
    table.appendChild(trf);
    let tdf =document.createElement('td');
    trf.appendChild(tdf);
    tdf.textContent='Totale';

    let tdf1 =document.createElement('td');
    trf.appendChild(tdf1);
    tdf1.textContent='';

let tdf2 =document.createElement('td');
    trf.appendChild(tdf2);
    tdf2.textContent='';

let tdf3 =document.createElement('td');
    trf.appendChild(tdf3);
    tdf3.textContent=totale;

}

headrrender();
let zaid = new Student ('zaid', 1234 , 18 , 50);
zaid.updatemark();
zaid.render();

let mohammed = new Student ('mohammed', 2010 , 25 , 50);
mohammed.updatemark();
mohammed.render();

let Reem = new Student ('Reem', 3793 , 27 , 50);
Reem.updatemark();
Reem.render();
footerrender();
