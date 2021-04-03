import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';
import { CacheService } from './cache.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {

    private materialize: Angular2MaterializeV1Service
    private cache: CacheService
    private mockUser: any = {
        name: "lucasfrct",
        seartchs: ['album dt', 'fernanda brum'],
        librariees: [],
        playlists: [],
        podcasts: [],
        artistis: [],
        albuns: [],
        favorites: [],
        currentAudio: {},
        currentAudioList: [],
        sesseionAudioList: []
    }

    public user: any


    constructor(angular2MaterializeService: Angular2MaterializeV1Service, cacheService: CacheService) {
        this.materialize = angular2MaterializeService
        this.cache = cacheService
    }

    public loadChace () {
        let username: string = "lucasfrct"
        
        this.user = this.cache.get(username)
        console.log("User: ", this.user)
        
    }

    ngOnInit(): void {
        this.loadChace()
    }

    public ngAfterViewInit(): void {
        this.materialize.autoInit();

        // NOTE - autoInit() only works on the currently loaded items in view
        // this.materialize.dismissAllToasts();
        // const instance(s) = this.materialize.initAutocomplete('#id, .class, element', {options});
        // const instance(s) = this.materialize.initCarousel('#id, .class, element', {options});
        // const instance(s) = this.materialize.initCharacterCount('#id, .class, element', {options});
        // const instance(s) = this.materialize.initChips('#id, .class, element', {options});
        // const instance(s) = this.materialize.initCollapsible('#id, .class, element', {options});
        // const instance(s) = this.materialize.initDatePicker('#id, .class, element', {options});
        // const instance(s) = this.materialize.initDropdown('#id, .class, element', {options});
        // const instance(s) = this.materialize.initFloatingActionButton('#id, .class, element', {options});
        // const instance(s) = this.materialize.initMaterialboxed('#id, .class, element', {options});
        // const instance(s) = this.materialize.initModal('#id, .class, element', {options});
        // const instance(s) = this.materialize.initParallax('#id, .class, element', {options});
        // const instance(s) = this.materialize.initPushpin('#id, .class, element', {options});
        // const instance(s) = this.materialize.initScrollSpy('#id, .class, element', {options});
        // const instance(s) = this.materialize.initSelect('#id, .class, element', {options});
        // const instance(s) = this.materialize.initSidenav('#id, .class, element', {options});
        // const instance(s) = this.materialize.initSlider('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTabs('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTapTarget('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTimepicker('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTooltip('#id, .class, element', {options});
        // const instance = this.materialize.toast({options});
        // this.materialize.textareaAutoResize();
        // this.materialize.updateTextFields();
    }

}
