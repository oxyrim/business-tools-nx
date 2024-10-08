import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[btLibsUiIfFalse]',
  standalone: true,
})
export class IfFalseDirective {
  
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  private embeddedTemplatedAdded = false;

  @Input() set btLibsUiIfFalse(condition: boolean) {
    if(!condition && !this.embeddedTemplatedAdded) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.embeddedTemplatedAdded = true;
    } else if (condition && this.embeddedTemplatedAdded) {
      this.viewContainerRef.clear();
      this.embeddedTemplatedAdded = false;
    }
  }
}
