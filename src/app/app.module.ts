import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TypographyComponent } from './components/typography/typography.component';
import { BasicAccordionComponent } from './components/basic-accordion/basic-accordion.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TablesComponent } from './components/tables/tables.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    TypographyComponent,
    BasicAccordionComponent,
    SliderComponent,
    ModalComponent,
    ProgressBarComponent,
    TablesComponent,
    TabsComponent,
    EditPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
