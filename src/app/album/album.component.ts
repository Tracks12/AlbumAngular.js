import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {
	cards = [
		{
			title: "La nuit",
			desc: "C'est beau une ville la nuit !",
			src: "https://unsplash.com/photos/JH0wCegJsrQ/download?force=true&w=640",
			likes: 115
		},
		{
			title: "San Francisco",
			desc: "Le Golden Gate !",
			src: "https://unsplash.com/photos/1kf69eE7VR4/download?force=true&w=640",
			likes: 428
		},
		{
			title: "",
			desc: "",
			src: "",
			likes: 0
		}
	];

	constructor() { }

	ngOnInit(): void {

	}
}
