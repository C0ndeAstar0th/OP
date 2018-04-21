
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class Guard2 implements CanActivate {

    constructor(private router: Router,
                private _ss: StorageService
            ) { }

    canActivate() {
           if (this._ss.isAuthenticated()) {
               this.router.navigate(['/home']);
        }
        return true;
    }
}
