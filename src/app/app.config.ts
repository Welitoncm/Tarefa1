import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Ajuste o caminho conforme necessário

const routes: Routes = [
  { path: '', component: AppComponent }, // Ajuste o componente conforme o necessário
];

export const appConfig = [
  provideRouter(routes)
];
