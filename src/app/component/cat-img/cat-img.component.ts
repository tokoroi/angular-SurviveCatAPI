import { Component, OnInit } from '@angular/core';
import { Catmodel } from 'src/app/model/catModel';
import { HttpClient } from '@angular/common/http';
import { CatService } from 'src/app/service/catService';

@Component({
  selector: 'app-cat-img',
  templateUrl: './cat-img.component.html',
  styleUrls: ['./cat-img.component.css']
})
export class CatImgComponent implements OnInit{

  catdata? : Catmodel;
  error?: string;


  constructor(private catService: CatService, private http: HttpClient) { }

  // 画面を表示した際にgetCatImgを呼び出し猫を表示する
  ngOnInit() {
    this.getCatImg();
  }
  
  // 更新ボタンが押された際にロード画像を表示し、getCatImgを呼び出す
  onClick(){
    this.catdata = undefined; // 更新時にcatdataをundefinedにリセット
    this.getCatImg();
  }
  // サービス側でThe Cat APIを呼び出し取得した猫画像URLをcatdataに格納
  getCatImg(){
    this.catService.getCatImgService().subscribe(
      (data: any) => {
        this.catdata = data[0]; // 取得した画像をcatdataに格納
        console.log(this.catdata);
      },
      (error) => {
        this.error = '画像の取得に失敗しました。';
      }
    );
  }
}
