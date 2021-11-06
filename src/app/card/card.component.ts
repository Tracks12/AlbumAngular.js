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

	stateLike = false;

	constructor() { }

	likes() {
		this.stateLike = !this.stateLike;
		this.stateLike ? this.card.likes++ : this.card.likes--;
	}

	ngOnInit(): void {
		this.card.likes += this.stateLike ? 1 : 0
	}
}
