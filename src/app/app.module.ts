import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterial } from './angularMaterial/angularMaterial.module';
import { HeaderComponent } from './components/header/header.component';
import { CorpoComponent } from './components/corpo/corpo.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestesComponent } from './testes/testes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CorpoComponent,
    FooterComponent,
    TestesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterial
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
