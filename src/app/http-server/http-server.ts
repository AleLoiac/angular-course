import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { resolve } from 'path';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http-server',
  imports: [],
  templateUrl: './http-server.html',
  styleUrl: './http-server.css',
})
export class HttpServer {
  http = inject(HttpClient);

  posts = signal<Post[]>([]);
  loading = signal(false);

  loadPosts() {
    this.loading.set(true);
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe(async (response) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      this.loading.set(false);
      this.posts.set(response);
    });
  }

  addPost() {
    const post: Post = {
      userId: 1,
      title: 'Title',
      body: 'Angular framework',
      id: 0,
    };

    this.http
      .post<Post>('http://localhost:3000/posts', post)
      .subscribe((res) => this.posts.update((v) => [...v, res]));
  }

  ngOnInit() {
    //this.loadPosts();
  }
}
