import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pensamento',
  imports: [NgClass, RouterLink],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {

  @Input()
  pensamento: PensamentoInterface = {
    id: 0,
    conteudo: "Arroz",
    autoria: "Eu",
    modelo: "modelo3"
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) return "pensamento-g"
    else return "pensamento-p"
  }
}
