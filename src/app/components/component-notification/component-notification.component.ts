import { Component, OnInit, OnDestroy } from '@angular/core'
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'notifications',
    template: ' '
})
export class ComponentNotification implements OnInit, OnDestroy{

    private notificationSubscription: Subscription;

    constructor(
        private notificationService: NotificationService
    ){}

    ngOnInit() {
        this.notificationSubscription = 
            this.notificationService
            .getObservable()
            .subscribe((message: string) => {
                this.showAlert(message);      
        });
    }

    showAlert(text: string) {
        alert(text);
    }

    ngOnDestroy() {
        this.notificationSubscription.unsubscribe();
    }
}