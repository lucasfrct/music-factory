/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class StorageService {

    private http: HttpClient

    public collections: any = []
    public metadata: any = {} 

    constructor(httpClient: HttpClient) { 
        this.http = httpClient
    }

    public save(collection) {
        if(collection.name && collection.name.length > 0) {
            window.localStorage.setItem(collection.name, JSON.stringify(collection))
        }
    }

    public remove(collection) {
        window.localStorage.removeItem(collection.name)
    }

    public load() {
        this.collections = []
        
        Object.keys(localStorage).reduce((obj, name) => {
            if("metadata" == name) {
                this.metadata = JSON.parse(localStorage.getItem(name))
            } else {
                this.collections.push(JSON.parse(localStorage.getItem(name)))
            }
            return obj
        }, [])

        return this.collections
        
    }

    public saveMetadata(collection) {
        if(collection.name && collection.name.length > 0) {
            var data = JSON.parse(JSON.stringify(collection)) 
            var title = (data.name.length > 0) ? data.name : ""
            var metadata = { name: "metadata", title: title } 
            this.save(metadata)
        }
    }

    public clear() {
        window.localStorage.clear()
    }

}