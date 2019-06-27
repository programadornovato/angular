import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrameworkService } from './../framework.service';
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  framework:Array<any>=[];
  constructor(private ruta:ActivatedRoute,private _servicio:FrameworkService) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      console.log(this._servicio.regresaUnFramework(params['id']));
      this.framework=this._servicio.regresaUnFramework(params['id']);
    });
  }

  ngOnInit() {
  }

}
