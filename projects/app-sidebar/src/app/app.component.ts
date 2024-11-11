import { Component } from '@angular/core';
import { SidebarService } from 'sidebar';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sidebarService:SidebarService){}

  openSidebar() {
    this.sidebarService.emitOpen(SidebarContentComponent);
  }
}
