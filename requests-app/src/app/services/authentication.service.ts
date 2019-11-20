import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Authentication {
    private user: Observable<firebase.User>;

    constructor( private fireAuth: AngularFireAuth ){
        this.user = fireAuth.authState;
    }

    login(email: string, password: string): Promise<firebase.auth.UserCredential>{
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout(): Promise<void>{
        return this.fireAuth.auth.signOut();
    }

    resetPassword(email: string): void {
        this.fireAuth.auth.sendPasswordResetEmail(email);
    }

}