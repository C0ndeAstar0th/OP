import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../components/models/session';
import { InfoUser } from '../components/models/infoUser';
import { Http } from '@angular/http';
import { JwtHelper } from '../components/models/wt';

@Injectable()
export class StorageService {

    private localStorageService;
    private currentSession: Session = null;
    private infoUser: InfoUser;


    constructor(private router: Router, public _http: Http) {
        this.localStorageService = localStorage;
         this.currentSession = this.loadSessionData();
    }

    setCurrentSession(session: Session): void {
        this.currentSession = session;
        this.localStorageService.setItem('currentUser', JSON.stringify(session));
     }

    loadSessionData(): Session {
        const sessionStr = this.localStorageService.getItem('currentUser');
        return (sessionStr) ? <Session>JSON.parse(sessionStr) : null;
    }

    getCurrentSession(): Session {
        return this.currentSession;
    }

    removeCurrentSession(): void {
        this.localStorageService.removeItem('currentUser');
        this.localStorageService.removeItem('flow');
        this.currentSession = null;

    }

    getCurrentUser(): InfoUser {
        let user: InfoUser;
        const jwtHelper = new JwtHelper();
        const session: Session = this.getCurrentSession();
        const parsedToken = jwtHelper.decodeToken(session.token);

        user = parsedToken.context.user;

        return user;
    }

    isAuthenticated(): boolean {
        return (this.getCurrentToken() != null) ? true : false;
    }

    getCurrentToken(): string {
        const session = this.getCurrentSession();
        return (session && session.token) ? session.token : null;
    }

    logout(): void {
        this.removeCurrentSession();
        this.router.navigate(['/login']);
    }

    setFlow(inflow): void {
        const flow = inflow;
        this.localStorageService.setItem('flow', JSON.stringify(inflow));
    }

    getFlow() {
        const flow = this.localStorageService.getItem('flow');
    return flow;
    }
}
