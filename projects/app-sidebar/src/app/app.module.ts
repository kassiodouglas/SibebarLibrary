import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule, SidebarService } from 'sidebar';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarContentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
