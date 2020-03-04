import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HammerModule
} from '@angular/platform-browser';
import { AppComponent } from '@app/component';
import { AppRoutingModule } from '@app/routing-module';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule
  ],
  providers: []
})
export class AppModule {
}
