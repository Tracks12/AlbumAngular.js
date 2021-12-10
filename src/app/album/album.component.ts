import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Card } from '../types';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {
	cards: Card[] = [];

	constructor(private postService: PostService) { }

	async ngOnInit(): Promise<void> {
		this.cards = await this.postService.getAllPosts();
	}
}
