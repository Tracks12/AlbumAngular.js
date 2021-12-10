import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	pages = [
		{ href: "", text: "Home" },
		{ href: "about", text: "About" },
		{ href: "contact", text: "Contact" }
	];

	constructor() { }

	ngOnInit(): void {

	}
}
