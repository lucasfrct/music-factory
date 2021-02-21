/*
 * Autor: Lucas Costa
 * data: Fev de 2021
 */
import { Injectable } from '@angular/core'
import { Socket, SocketIoConfig } from 'ngx-socket-io'



@Injectable({
    providedIn: 'root',
})

export class SocketService extends Socket {

	constructor() {
		super({ url: 'http://127.0.0.1:3000', options: {} })
	 }

	public connection(fn: any) {
		this.on("connect", fn)
	}

	public send(name: string, value: any){ 
		this.emit(name, value) 
	}
    
	public receive(name: string, fn: any) {
		this.on(name, fn)
    }
}