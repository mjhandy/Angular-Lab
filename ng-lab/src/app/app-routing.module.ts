import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { TypographyComponent} from './components/typography/typography.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'typography', component: TypographyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
