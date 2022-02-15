import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { TextareaComponent } from './textarea/textarea.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: FormPageComponent},
  {path: "top-3", component: ScorePageComponent},
  {path: "textarea", component: TextareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
