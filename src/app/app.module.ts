import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatImgComponent } from './component/cat-img/cat-img.component';
import { HttpClientModule } from "@angular/common/http";
import { CatService } from './service/catService';

@NgModule({
  declarations: [
    AppComponent,
    CatImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
