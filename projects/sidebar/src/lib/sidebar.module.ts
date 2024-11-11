import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    SidebarComponent, LinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent, LinkComponent
  ]
})
export class SidebarModule { }
