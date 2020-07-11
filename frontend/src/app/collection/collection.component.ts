/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storage/storage.service'


@Component({
	selector: 'collection',
    templateUrl: './collection.html',
    styleUrls: [ './collection.css']
})

export class CollectionComponent implements OnInit {

    
    @Input() collection: any = {}
    @Output() changeCollection: EventEmitter<any> = new EventEmitter()
    
    public storage: StorageService = null
    
    public modal = false
    public collectionName = ""
    public collections = []
    
    public constructor(storage: StorageService) { 
        this.storage = storage
        //this.storage.clear()

    }
    
    public ngOnInit() { 

        
        this.collection = this.factoryCollection()
        this.collections = this.storage.load()

        if(Object.keys(this.storage.metadata).length > 0) {
            var collection = this.collections.filter((collection)=> {
                if(collection.name == this.storage.metadata.title) { return collection }
            })[0]

            if(collection) {
                this.collection = collection
                this.changeCollection.emit(this.collection)
            }
        }
    }

    public webToggle() {
        this.collection.web = !this.collection.web
        this.storage.save(this.collection)
        this.storage.saveMetadata(this.collection)
        this.changeCollection.emit(this.collection)
    }

    public newCollection(collectionName) {
        this.modalToggle()
        this.collection = this.factoryCollection()
        this.collection.name = collectionName
        this.storage.save(this.collection)
        this.collections = this.storage.load()
        this.changeCollection.emit(this.collection)
        this.collectionName = ""
    }

    public changeColl(collectionName) {

        this.collection = this.collections.filter((collection)=> {
            if(collection.name === collectionName) { return collection }
        })[0]

        this.storage.saveMetadata(this.collection)
        this.changeCollection.emit(this.collection)
    }
    
    public removeItem(collection) {
        this.storage.remove(collection)
        this.collections = this.storage.load()
        
        if(this.collections.length > 0) {
            this.collection = this.collections[0]
            this.storage.saveMetadata(this.collection)
        } else {
            this.collection = this.factoryCollection()
        }

        this.changeCollection.emit(this.collection)
    }

    public modalToggle() {
        this.modal = !this.modal
    }

    private factoryCollection() {
        let collection = {
            name: "",
            catalog: [],
            buffer: [],
            web: false,
            history: []
        }
        return collection
    }
}
