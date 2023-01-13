import { Router } from '@angular/router';
import { Transferencia } from './../../models/transferencia.model';
import { Component, Output, EventEmitter, Injectable } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-transferencia.componet.html',
  styleUrls: ['./nova-tranferencia.componet.scss'],
})
export class NovaTransferenciaComponet {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova trasnsferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };
    this.service.add(valorEmitir).subscribe((resultado) =>{
      console.log(resultado);
      this.limparFormulario();
      this.router.navigateByUrl('extrato');
    },
      (error) => console.error(error)
    );

  }

  limparFormulario(){
    this.valor = 0;
    this.destino = 0;


  }
}


