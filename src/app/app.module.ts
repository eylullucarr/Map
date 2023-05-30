import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxMapLibreGLModule, TitleComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
