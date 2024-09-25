import { Component } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // Marcar o componente como standalone
  imports: [NgFor, NgStyle],  // Importar as diretivas necessárias
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefas = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer compras', concluida: true },
    { descricao: 'Lavar o carro', concluida: false },
    { descricao: 'Preparar o jantar', concluida: true },
    { descricao: 'Terminar o projeto', concluida: false }
  ];

  alternarConclusao(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
