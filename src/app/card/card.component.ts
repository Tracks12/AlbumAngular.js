import { Component, OnInit, Input } from '@angular/core';

import { Card } from "../types";

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
	@Input() card!: Card;

	likes = 0;
	stateLike = false;

	constructor() { }

	like() {
		this.stateLike = !this.stateLike;
		this.likes += this.stateLike ? 1 : -1;
	}

	ngOnInit(): void {

	}
}
