import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { PicturePreviewComponent } from './cmps/picture-preview/picture-preview.component';
import { PictureDetailsComponent } from './pages/picture-details/picture-details.component';
import { PictureViewComponent } from './cmps/picture-view/picture-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    PicturePreviewComponent,
    PictureDetailsComponent,
    PictureViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
