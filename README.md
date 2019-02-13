# NG Utils

## Introduction
A collection of common services for everyday angular application developemnt.

## Requirements

## Install
```
$ npm i ng-utils
```

## Available Services
### Action Emitter
**Summary**

This service turns actions into stream of events that can be subscribed to. Serves as a companion to Angular built-in EventEmitter. EventEmitter is template-friendly, while ActionEmitter is @Injectables-friendly.

**Sample Code**
```
//file1.ts
import { ActionEmitter } from '@isaiahiroko/ng-utils'

@Component({
    ...
})
export class FireActions {
    constructor (private actions: ActionEmitter) {    
        //fire an action
        this.actions.emit({
            type: '[SampleType]',
            title: 'any title',
            data: 'any data',
        })
    }
}

//file2.ts
import { ActionEmitter } from '@isaiahiroko/ng-utils'

@Component({
    ...
})
export class ReactToActions {

    constructor (private actions: ActionEmitter) {
        //listen to an action
        this.actions.typeOf('[SampleType]').subscribe((action: any) {
            //do sth with action
        })
    }

}
```

### Asset Service
### Auth Service
### Config Service
### Email Service
### Access Control Service
### Routing State Service
### 'JIT' Script Loader Service
### Shipping Pricer Service
### Utilities

## [LICENSE](./LICENSE.md)