import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImgflipApiResult} from "./models/imgflip-api-result";
import {ImgflipMeme} from "./models/imgflip-meme";

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) { }

  getMemes() {
    return this.http.get<ImgflipApiResult<{ memes: ImgflipMeme[] }>>('https://api.imgflip.com/get_memes');
  }
}
