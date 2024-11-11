import { AfterViewInit, Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit,AfterViewInit  {
  roles!: any;
  menus!: any;

  isOpen = false;

  inClosing = false;

  @Input() contentComponent: any;

  @ViewChild('contentContainer', { read: ViewContainerRef, static: true }) contentContainer!: ViewContainerRef;

  // classLinks = "disabled:opacity-40 flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-3 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700";

  classSidebar = "z-50 fixed bottom-0 left-0 w-11/12 md:w-72 h-screen overflow-y-auto transition-transform duration-500 bg-white dark:bg-gray-800 transform shadow-sm";

  classCloseBUtton = "text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-xl absolute right-3 top-2 h-8 w-8 z-50";

  classBackdrop = "absolute left-0 top-0 w-screen h-screen bg-slate-800 bg-opacity-80 z-40 transition-opacity duration-500";

  constructor(private sidebarService: SidebarService, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {}

  ngAfterViewInit() {
    // if (this.contentComponent) {
    //   const factory = this.componentFactoryResolver.resolveComponentFactory(this.contentComponent);
    //   this.contentContainer.createComponent(factory, undefined, this.injector);
    // }
  }

  ngOnInit(): void {
    setTimeout(() => this.isOpen = true, 0);
    this.initMenus();

    if (this.contentComponent) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.contentComponent);
      this.contentContainer.createComponent(factory, undefined, this.injector);
    }
  }

  close() {
    this.inClosing = true;
    this.isOpen = false;

    setTimeout(() => {
      this.sidebarService.emitClose();
    }, 500);
  }


  initMenus() {
    this.menus = { admin: { open: false } };
  }

  openMenu(menu: string) {
    if (this.menus[menu]) {
      this.menus[menu].open = !this.menus[menu].open;
    }
  }
}
