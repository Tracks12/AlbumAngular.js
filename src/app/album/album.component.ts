import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Card } from '../types';
import { POSTS } from "../posts";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {
	cards: Card[] = [];

	constructor(private postService: PostService) { }

	ngOnInit(): void {
		this.postService.getAllPosts()
			.then((res) => this.cards = res);
	}
}
