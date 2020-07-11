/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class WindowService {

    private http: HttpClient

    private endipoint = 'http://127.0.0.1:6060/explorer';
    
    constructor(httpClient: HttpClient) { 
        this.http = httpClient
    }

    public load(path) {
        return this.http.get(this.endipoint, { params:  { path: path, format: 'audio' } })
    }

    public history() {
        return [ "C:/", "D:/" , "D:/Musics/"]
    }

}