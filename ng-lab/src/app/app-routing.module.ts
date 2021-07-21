import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { TypographyComponent} from './components/typography/typography.component';
import { BasicAccordionComponent} from './components/basic-accordion/basic-accordion.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'typography', component: TypographyComponent},
  { path: 'basic-accordion', component: BasicAccordionComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'modal', component: ModalComponent}

];

RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
