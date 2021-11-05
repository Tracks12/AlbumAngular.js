import { Component, OnInit, Input } from '@angular/core';

class Card {
  title!: string;
  desc!: string;
  src!: string;
	likes!: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
	@Input() card!: Card;

	constructor() { }

	ngOnInit(): void {

	}
}
