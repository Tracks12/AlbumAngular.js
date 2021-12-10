import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Card } from "./types";

@Injectable({
  providedIn: 'root'
})

export class PostService {
	serverUrl = 'https://my-json-server.typicode.com';
	postsPath = '/bhubr/album-api/posts';

  constructor(private http: HttpClient) { }

	getAllPosts(): Promise<Card[]> {
		return this.http
			.get<Card[]>(`${this.serverUrl}${this.postsPath}`)
			.toPromise();
	}

	getPost(id: number): Promise<Card> {
		return this.http
			.get<Card>(`${this.serverUrl}${this.postsPath}/${id}`)
			.toPromise();
	}
}
