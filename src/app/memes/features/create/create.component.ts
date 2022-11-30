import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/data-access/app.state";
import {loadMemes} from "../../data-access/meme.actions";
import {selectMemes, selectStatus} from "../../data-access/meme.selectors";
import {ImgflipMeme} from "../../data-access/models/imgflip-meme";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  status$ = this.store.select(selectStatus);
  memes$ = this.store.select(selectMemes);

  selectedMeme: ImgflipMeme | null = null;
  custom = false;

  // TODO: needs to be upgraded to a custom amount of text boxes
  text0 = '';
  text1 = '';

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(loadMemes());
  }

  ngOnInit(): void {
  }

  selectMeme(meme: ImgflipMeme) {
    this.selectedMeme = meme;
  }

}
