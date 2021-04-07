import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class CacheService {

    public storage: Storage

    constructor() {
        this.storage = window.localStorage;
    }

    public set(key: string, value: any): boolean {
        this.storage.setItem(key, JSON.stringify(value))
        return true
    }

    public get(key: string): any {
        let data: any = this.storage.getItem(key)
        return JSON.parse(data)
    }

    public remove(key: string): boolean {
        this.storage.removeItem(key)
        return true;
    }

    clear(): boolean {
        this.storage.clear();
        return true;
    }
    


}
