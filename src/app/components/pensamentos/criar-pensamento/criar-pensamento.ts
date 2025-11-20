import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento: PensamentoInterface = {
    conteudo: "",
    autoria: "",
    modelo: "modelo1"
  }

  constructor(private service: PensamentoService, private router: Router) {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamento"])
    })
  }
}
