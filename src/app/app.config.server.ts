import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};
