import { Routes } from '@angular/router';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';
import { ListarPensamento } from './components/pensamentos/listar-pensamento/listar-pensamento';
import { ExcluirPensamentos } from './components/pensamentos/excluir-pensamentos/excluir-pensamentos';
import { EditarPensamento } from './components/pensamentos/editar-pensamento/editar-pensamento';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamento
  },
  {
    path: 'listarPensamento',
    component: ListarPensamento
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentos
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamento
  },
];
