import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { CriarPensamento } from "./components/pensamentos/criar-pensamento/criar-pensamento";
import { FormsModule } from '@angular/forms';
import { ListarPensamento } from "./components/pensamentos/listar-pensamento/listar-pensamento";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    CriarPensamento,
    FormsModule,
    ListarPensamento
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memoteca');
}
