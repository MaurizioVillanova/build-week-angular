import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  post!: Post;
  id!: number;

  @ViewChild('fEdit', { static: true }) form!: NgForm; // identifica il form

  postForm = {
    title: '',
    body: '',
  }

  constructor(private postSrv: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // dà all'id il valore trovato nella route
    this.leggi(); // parte il GET del post identificato
  }

  leggi() {
    this.postSrv.leggiPost(this.id).subscribe((res) => {
      this.post = res;
      this.postForm = { // in base al post identificato con GET tramite id nel parametro, gli input del form si popolano con i dettaglio dell'oggetto del json
        title: this.post.title,
        body: this.post.body
      }
    }
    );
  }

  cambia() { // al click parte la chiamata PUT di modifica del json
    if (confirm("Are you sure to edit the post?")) {
      this.postSrv.editPost(this.id, this.form.value).subscribe((ris) => { // al PUT si passano l'id del post attuale e i nuovi valori degli input del form
        this.post = ris;
        this.router.navigate(['/']);
      })
    }
  }

}


