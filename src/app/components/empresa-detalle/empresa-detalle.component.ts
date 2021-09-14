import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoVentasService} from '../../services/info-ventas.service';
@Component({
  selector: 'app-empresa-detalle',
  templateUrl: './empresa-detalle.component.html',
  styleUrls: ['./empresa-detalle.component.css']
})
export class EmpresaDetalleComponent implements OnInit {
  nombre_empresa: any;
  data:any=[];
  constructor(private activatedRoute: ActivatedRoute,private InfoVentasService:InfoVentasService ) {
    this.nombre_empresa = this.activatedRoute.snapshot.params.nombre_empresa;
   }

  ngOnInit() {
    console.log("nombre",this.nombre_empresa)
    this.getEmpresa(this.nombre_empresa)
  }

  getEmpresa(nombre_empresa){
    this.InfoVentasService.getInfo().subscribe(resp=>{

      console.log("this.data",this.data)

    var newArray = resp.filter(function (el) {
      return el.nameAgency == nombre_empresa
    });
    console.log(newArray);
    this.data=newArray;
    return this.data

    })
  }


}
