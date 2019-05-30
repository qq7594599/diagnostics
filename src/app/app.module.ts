import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InteractiveUiModule } from './interactive-ui/interactive-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    SideBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InteractiveUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
