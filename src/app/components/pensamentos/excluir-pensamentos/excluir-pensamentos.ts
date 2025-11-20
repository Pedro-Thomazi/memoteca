import { Component } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  imports: [],
  templateUrl: './excluir-pensamentos.html',
  styleUrl: './excluir-pensamentos.css',
})
export class ExcluirPensamentos {
  pensamento: PensamentoInterface = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(["/listarPensamento"])
      })
    }
  }

  cancelar() {
    this.router.navigate(["/listarPensamento"])
  }
}
