import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfoVentasService} from '../../services/info-ventas.service';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
empresas:any[];
resultData:any=[];
resultMesData:any=[];
  data: any = [];
  empresaMaxVentas=0;
  mesMasVentas="";
  ventas:any={
    'nameAgency':"",
    'finalPrice':0,
    'comision':0,
    'detalle':""
  };
  group:any=[];
  result:any=[];

  constructor(private InfoVentasService:InfoVentasService) {

   this.getData();
   this.getMaxVentas();

   }

  ngOnInit() {}
  getData(){
    this.InfoVentasService.getInfo().subscribe((resp):any=>
    {
      ///////////////////////Ordenando por nombre de agencia///////////////////
      resp.sort(function (a, b) {
        if (a.nameAgency > b.nameAgency) {
          return 1;
        }
        if (a.nameAgency < b.nameAgency) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
/////////////////ordenando por maximas ventas/////////////////////
      resp.sort(function (a, b) {
        if (a.finalPrice > b.finalPrice) {
          return 1;
        }
        if (a.Price < b.finalPrice) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      ///////////////////////Agrupando por nombre de agencia///////////////////

      let result = resp.reduce(function (r, a) {
        r[a.nameAgency] = r[a.nameAgency] || [];
        r[a.nameAgency].push(a);
        return r;
    }, Object.create(null));
    console.log("result",result)

////////////////////////AGRUPANDO POR NOMBRE DE EMPRESA Y CALCULANDO EMPRESA CON MAS VENTAS, COMISION Y TOTAL DE VENTAS////////////////////////////////////////
    var groupByName = function (miarray, prop) {
      return miarray.reduce(function(groups, item) {
          var val = item[prop];
          groups[val] = groups[val] || {nameAgency: item.namAgency, finalPrice: 0, comission:0};
          groups[val].finalPrice += item.finalPrice;
          groups[val].nameAgency = item.nameAgency;
          groups[val].comission += (item.finalPrice)*0.025;
          groups[val].month = new Date(item.datePayment).getMonth();

          return groups;
      }, {});
    }

    this.resultData = Object.values(groupByName(resp,'nameAgency'));
    const maxVentas = this.resultData.reduce((prev, current) => (prev.finalPrice > current.finalPrice) ? prev : current)
    this.empresaMaxVentas=maxVentas.finalPrice;
    console.log("maximaventa",  this.empresaMaxVentas);
    console.log("resultdata",this.resultData);
    console.log("groupbyName",groupByName(resp,'nameAgency'));

    //////////////////////////////////////////////////CALCULANDO MES CON MAS VENTAS/////////////////////////////
    var groupByDate = function (miarray, prop) {
      return miarray.reduce(function(groups, item) {
          var val = item[prop];
          groups[val] = groups[val] || {datePayment: item.datePayment, finalPrice: 0};
          groups[val].finalPrice += item.finalPrice;
          groups[val].month = new Date(item.datePayment).toLocaleString('default', { month: 'long' });

          return groups;
      }, {});
    }
    this.resultMesData = Object.values(groupByDate(resp,'datePayment'));
    console.log("resultmes",this.resultMesData);
    const mesMax=this.resultMesData.reduce((prev, current) => (prev.finalPrice > current.finalPrice) ? prev : current);
    this.mesMasVentas=mesMax.month.toUpperCase();
    console.log("mes con mas venta",mesMax.month);
    console.log("groupbyDate",groupByDate(this.resultMesData,'month'));



    });

    return this.data
  }
public groupBy( array , f )
{
  var groups = {};
  array.forEach( function( o )
  {
    var group = JSON.stringify( f(o) );
    groups[group] = groups[group] || [];
    groups[group].push( o );
  });
  return Object.keys(groups).map( function( group )
  {
    return groups[group];
  })
}
sum(obj) {
  return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
}
  getMaxVentas(){

  }



}
