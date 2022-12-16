import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {
  post!: Post;
  id!: number;

  constructor(private postSrv:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // dà all'id il valore trovato nella route
    this.dettaglio(); // parte il GET
  }

  dettaglio(){
    this.postSrv.leggiPost(this.id).subscribe((res) => { // GET dal json in base all'id del post
      this.post = res;
      }
    );
  };

}
