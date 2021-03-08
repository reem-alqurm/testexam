'use strict';

function Resturant (ordarname ,price ){
    this.ordarname=ordarname;
    this.price=price;
    this.orderquntity = 0;
    Resturant.alldata.push(this);
}
Resturant.alldata=[];

Resturant.prototype.arndomQuntity= function()
{
    return this.orderquntity = Math.floor(Math.random()*(10-1+1)+1);

}

let reem = new Resturant ('chees' , 10);
reem.arndomQuntity();
console.log(reem.orderquntity);