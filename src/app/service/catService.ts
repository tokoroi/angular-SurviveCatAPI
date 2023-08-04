import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { Catmodel } from "../model/catModel";

@Injectable({
    providedIn: 'root'
})

export class CatService{
    constructor(private http: HttpClient) {}

    // The Cat  APIを呼び出し猫画像URLを取得
    getCatImgService(): Observable<Catmodel>{
            const apiUrl = 'https://api.thecatapi.com/v1/images/search';
            return this.http.get<Catmodel>(apiUrl).pipe(
                catchError(error => {
                    console.error('画像の取得に失敗しました。', error);
                return throwError('画像の取得に失敗しました。');
                })
            );    
    }
}