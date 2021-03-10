'use strict';

let articleEl = document.getElementById('article');
let table = document.createElement('table');
articleEl.appendChild(table);
let formEl = document.getElementById ('newCustomer');
let total =0;
let rowcount=0;

function Resturant (cutName ,ordarname ,price ){
    this.custName=cutName;
    this.ordarname=ordarname;
    this.price=price;
    this.orderquntity = 0;
    Resturant.alldata.push(this)
}
Resturant.alldata=[];

Resturant.prototype.arndomQuntity= function()
{
    let random = this.orderquntity = Math.floor(Math.random()*(10-1+1)+1);
    total=total+random;
    return random;
}

Resturant.prototype.tableheaderrender= function(){
    let trh = document.createElement('tr');
    table.appendChild(trh);
    let th1 = document.createElement('th');
    trh.appendChild(th1);
    th1.textContent= 'Customer Name';
    let th2 = document.createElement('th');
    trh.appendChild(th2);
    th2.textContent= 'Order Name';
    let th3 = document.createElement('th');
    trh.appendChild(th3);
    th3.textContent= 'Order price';
    let th4 = document.createElement('th');
    trh.appendChild(th4);
    th4.textContent= 'Order Quntity';
    
}
Resturant.prototype.tablebodyrener=function(){
    let trb = document.createElement('tr');
    table.appendChild(trb);
    let td1 = document.createElement('td');
    trb.appendChild(td1);
    td1.textContent= this.custName;
    let td2 = document.createElement('td');
    trb.appendChild(td2);
    td2.textContent= this.ordarname;
    let td3 = document.createElement('td');
    trb.appendChild(td3);
    td3.textContent= this.price;
    let td4 = document.createElement('td');
    trb.appendChild(td4);
    td4.textContent= this.orderquntity;
    rowcount++;

}
Resturant.prototype.tablefooterrender=function(){
    let trf = document.createElement('tr');
    table.appendChild(trf);
    let td5 = document.createElement('td');
    trf.appendChild(td5);
    td5.textContent= 'Totale';
    let td6 = document.createElement('td');
    trf.appendChild(td6);
    td6.textContent= '';
    let td7 = document.createElement('td');
    trf.appendChild(td7);
    td7.textContent= '';
    let td8 = document.createElement('td');
    trf.appendChild(td8);
    td8.textContent= total;
}

formEl.addEventListener('submit', addnewscusomer);

function addnewscusomer(event){
    
    event.preventDefault();
let name = event.target.cutname.value;
let order = event.target.ordername.value;
let orprice = event.target.orderprice.value;
let newcut = new Resturant (name, order,orprice);
newcut.arndomQuntity();
newcut.tablebodyrener();
table.deleteRow(rowcount);
newcut.tablefooterrender();

}

let reem = new Resturant ('reem','chees' , 10);
reem.arndomQuntity();
reem.tableheaderrender();
reem.tablebodyrener();
reem.tablefooterrender();
let ali = new Resturant ('ali','burgar' , 20);
ali.arndomQuntity();
ali.tablebodyrener();
table.deleteRow(rowcount);
ali.tablefooterrender();


