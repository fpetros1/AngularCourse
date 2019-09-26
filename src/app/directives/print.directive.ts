import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
    selector: 'input[printDirective]'
})
export class PrintDirective {

    @Input()
    private prefixo: string = 'Sem Prefixo';

    constructor(
        private elementRef: ElementRef
    ){}
    
    @HostListener('keyup', [ '$event.target' ])
    public printValue($event) {
        console.log(`${this.prefixo} - ${this.elementRef.nativeElement.value}`);
    }

    @HostListener('click', [ '$event.target' ])
    public printClick($event) {
        console.log('O input foi clicado');
    }
}