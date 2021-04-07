import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private searchSource = new BehaviorSubject('')
    public search = this.searchSource.asObservable()

    private userSource = new BehaviorSubject('')
    public user = this.userSource.asObservable()

    constructor() { }

    changeSearch(search: string) {
        this.searchSource.next(search)
    }

    changeUser(user: any) {
        this.userSource.next(user)
    }

}
