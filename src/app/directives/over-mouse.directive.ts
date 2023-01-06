import { Directive,ElementRef,Input,OnChanges} from '@angular/core';

@Directive({
  selector: '[overUp]' //el nombre es personalizado
})
export class OverMouseDirective implements OnChanges{
  @Input() invalid!: boolean | undefined;
  $element = this.elementRef.nativeElement as HTMLInputElement

  constructor(private elementRef: ElementRef) {
  }
  ngOnChanges(): void {
    if(this.invalid){
      this.$element.classList.add('border-red-500')
    } else {
      this.$element.classList.remove('border-red-500')
    }
       
  }
}
  