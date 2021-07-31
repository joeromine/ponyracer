import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, RacesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(title: Title) {
    title.setTitle('Pony App');
  }
}
