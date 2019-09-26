
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { ArrayToStringPipe } from 'src/app/pipes/array-to-string.pipe';
import { TouchSequence } from 'selenium-webdriver';

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

    constructor(
        private notificationService: NotificationService
    ){}

    salvar(botao: number) {
        this.label = 'Nome - Filho';
        this.notificationService.sendNotification(`
            Botão ${botao} foi clicado
        `);
        this.clickSalvar.next(botao);
    }
}
