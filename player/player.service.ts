import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class PlayerListService {

    private http: any
    private bgsUrl = '../../assets/data/bgs.json'
    private listUrl = '../../assets/data/list.json'

    public constructor(http: HttpClient) {
        this.http = http
    }

    public getBgs() {
        return this.http.get(this.bgsUrl)
    }

    public getList() {
        return this.http.get(this.listUrl)
    }

}

@Injectable({
    providedIn: 'root',
})

export class CatalogService {

    private http: any
    private bgsUrl = '../../assets/data/bgs.json'
    private listUrl = '../../assets/data/list.json'

    public constructor(http: HttpClient) {
        this.http = http
    }

    public getBgs() {
        return this.http.get(this.bgsUrl)
    }

    public getList() {
        return this.http.get(this.listUrl)
    }

}