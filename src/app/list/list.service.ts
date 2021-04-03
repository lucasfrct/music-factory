import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    private endpoint: string = "deezer/" //  endpoint: https://api.deezer.com/

    constructor(private http: HttpClient) { 

    }

    public album(number: number = 302127): any {
        let resource: string = String("album/"+number)
        return this.http.get(this.endpoint+resource)
    }

    public search(value: string): any {
        let resource: string = String("search?q="+value)
        return this.http.get(this.endpoint+resource)
    }
}
