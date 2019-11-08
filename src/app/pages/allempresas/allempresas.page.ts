import { Component, OnInit } from '@angular/core';
import { EmpresasService } from "../../services/empresas.service";


@Component({
  selector: 'app-allempresas',
  templateUrl: './allempresas.page.html',
  styleUrls: ['./allempresas.page.scss'],
})
export class AllempresasPage implements OnInit {

  empresas: any; 

  constructor (private empresa : EmpresasService) {
      console.log('Estas en create empresa ts')
  }

  ngOnInit() {
    //console.log(this.empresa.getEmpresas());
    this.empresa.getEmpresas().then(empre => {
      if(this.empresa !=null){ 
      this.empresas = empre;
      }else{
        console.log('No existen empresas');
      }
    });//Llamamos a la función getPost cuando la vista se cargue
  }
  
}
