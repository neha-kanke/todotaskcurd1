import { Component, OnInit } from '@angular/core';
import { postArr } from 'src/app/shared/const/post';
import { Ipost } from 'src/app/shared/model/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
postdata:Array<Ipost>=postArr
  constructor() { }

  ngOnInit(): void {
  }

}
