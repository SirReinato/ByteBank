import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-transferencia.componet.html',
  styleUrls: ['./nova-tranferencia.componet.scss'],
})
export class NovaTransferenciaComponet {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova trasnsferencia');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparFormulario();

  }

  limparFormulario(){
    this.valor = 0;
    this.destino = 0;


  }
}


