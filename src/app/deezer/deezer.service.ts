import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeezerService {

    private endpoint: string = "deezer/" //  endpoint: https://api.deezer.com/

    constructor(private http: HttpClient) {  }

    public album(number: number = 302127): any {
        return this.http.get(this.endpoint+String("album/"+number))
    }

    public search(value: string): any {
        return this.http.get(this.endpoint+String("search?q="+value))
    }
}
