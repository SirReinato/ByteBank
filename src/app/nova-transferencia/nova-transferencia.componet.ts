import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-transferencia.componet.html',
  styleUrls: ['./nova-tranferencia.componet.scss'],
})
export class NovaTransferenciaComponet {
  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova trasnsferencia');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
