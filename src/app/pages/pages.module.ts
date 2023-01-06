import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverMouseDirective } from '../directives/over-mouse.directive';


@NgModule({
  declarations: [
    HomeComponent,
    OverMouseDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    HomeComponent
    
  ]
})
export class PagesModule { }
