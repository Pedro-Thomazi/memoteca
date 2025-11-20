import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Pensamento } from "../pensamento/pensamento";
import { NgFor, NgIf } from '@angular/common';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento, NgFor, NgIf],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listaPensamentos: PensamentoInterface[] = []

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
