import { Injectable } from "@angular/core";
import { EmailRequestPayload, EmailResponsePayload } from "@isaiahiroko/ng-contracts";
import { RemoteStore } from "@isaiahiroko/ng-aeon";
import { forkJoin, empty } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";
import { Config } from "./config.service";

@Injectable()
export class EmailService{

    constructor(
        private remote: RemoteStore,
        private config: Config,
    ){}
    
    send(payload: EmailRequestPayload, callback: Function = () => {}){
        forkJoin(
            this.config.select<string>('store.remote.urls.APIbase')
        ).pipe(
            mergeMap((APIbase) => {
                return this.remote.aPost(
                    `${APIbase}/email`,
                    payload
                )
            }),
            catchError((e) => {
                callback(e)
                return empty()
            })
        ).subscribe((response: EmailResponsePayload) => {
            callback(response)
        })
    }
}