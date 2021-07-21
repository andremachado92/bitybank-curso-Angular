import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor?: number;
  destino?: number;

  transferir(): void {
    console.log('Solicitado');
    console.log('Valor', this.valor);
    console.log('Solicitado', this.destino);
   this.aoTransferir.emit({valor: this.valor, destino: this.destino});
  }
}
