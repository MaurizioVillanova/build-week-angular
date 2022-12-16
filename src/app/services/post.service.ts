import { Injectable } from '@angular/core';
import { Post } from '../interface/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post [] = [];

  constructor(private http:HttpClient) { }

  getPost() {
    return this.http.get<Post[]>("http://localhost:3000/posts") // get generica dei post
  }

  leggiPost(id:number) {
    return this.http.get<Post>("http://localhost:3000/posts/" + id) // get dei singoli post per id
  }

  cancellaPost(id:number) {
    return this.http.delete("http://localhost:3000/posts/" + id) // delete singolo post per id
  }

  newPost(post: Post) {
    return this.http.post<Post>("http://localhost:3000/posts", post) // creazione nuovo post con passaggio del body
  }

  editPost(id: number, post: Post) {
    return this.http.put<Post>("http://localhost:3000/posts/" + id, post) // modifica post per id con passaggio del body
  }
}
