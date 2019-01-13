import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ServicesModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
