
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'component-1',
    templateUrl: './component-1.component.html',
    styleUrls: []
})
export class Component1 {

    @Input()
    public label: string;

    @Output()
    public clickSalvar = new EventEmitter();

    salvar(botao: number) {
        this.label = 'Nome - Filho';
        this.clickSalvar.next(botao);
    }
}
