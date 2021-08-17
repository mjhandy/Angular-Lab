import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { TypographyComponent} from './components/typography/typography.component';
import { BasicAccordionComponent} from './components/basic-accordion/basic-accordion.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TablesComponent } from './components/tables/tables.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'typography', component: TypographyComponent},
  { path: 'basic-accordion', component: BasicAccordionComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'prograss-bar', component: ProgressBarComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'tabs', component: TabsComponent},
  { path: 'edit-pane', component: EditPanelComponent }

];

RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
