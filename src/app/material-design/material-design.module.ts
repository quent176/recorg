// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL AANGULAR
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialDesignModule { }
