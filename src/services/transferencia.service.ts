import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {

  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia
  }

  add(transferencia: any){
    this.melhorar(transferencia)
    this.listaTransferencia.push(transferencia);
  }

  private melhorar(transferencia: any){
    transferencia.data = new Date();
  }
}
