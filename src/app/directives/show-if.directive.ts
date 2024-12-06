import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ShowIf]'
})
export class ShowIfDirective {
  @Input() set ShowIf(condition: boolean){
    if(condition)
      this.viewContainer.createEmbeddedView(this.template, {texto: 'Trabajando con View Container'});
    else
    this.viewContainer.clear();
  }
  show: boolean=true;

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { 
  }

}
