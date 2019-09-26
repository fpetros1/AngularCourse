import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class NotificationService {
    
    private source = new Subject();

    public getObservable() {
        return this.source.asObservable();
    }

    public sendNotification(message: string) {
        this.source.next(message);
    }

}