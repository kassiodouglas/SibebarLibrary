import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private componentRef!: ComponentRef<any>;
  private originalBodyOverflow!: string;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  emitOpen(content:any) {
    this.render(content);
  }

  emitClose() {
    this.destroy();
  }

  private render(content:any) {
    try {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SidebarComponent);
      this.componentRef = componentFactory.create(this.injector);
      this.componentRef.instance.contentComponent = content;

      this.appRef.attachView(this.componentRef.hostView);

      const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);

      Object.assign(domElem.style, {
        position: 'fixed',
        zIndex: '9000',
        left: '0',
        top: '0',
        height: '100vh',
        width: '100vw',
      });

      this.originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

    } catch (error) {
      console.error('Failed to render Sidebar:', error);
    }
  }

  private destroy() {
    if (this.componentRef) {
      // Verifique se a referência do componente existe antes de continuar
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();

      // Restaurar o estilo do body
      document.body.style.overflow = this.originalBodyOverflow || 'auto';

      // Remover o elemento do DOM manualmente
      const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
      if (domElem && domElem.parentNode) {
        domElem.parentNode.removeChild(domElem);
      }

      // Redefinir a referência para evitar múltiplas chamadas de `destroy` no mesmo componente
      this.componentRef = null!;
    }
  }

}
