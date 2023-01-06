import { Directive,ElementRef,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[overUp]' //el nombre es personalizado
})
export class OverMouseDirective implements OnInit{
  @Input() invalid!: boolean | undefined;
  $element = this.elementRef.nativeElement as HTMLInputElement

  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    if(this.invalid){
      this.$element.classList.add('border-red-500')
    } else {
      this.$element.classList.remove('border-red-500')
    }
       
  }
}
  