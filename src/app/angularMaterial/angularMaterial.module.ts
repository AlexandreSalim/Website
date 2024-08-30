import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class AngularMaterial { }
