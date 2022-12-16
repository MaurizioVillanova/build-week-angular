import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private postSrv: PostService,private route: ActivatedRoute, private router: Router) { }

  @ViewChild('f', { static: true }) form!: NgForm; // identifica il form

  posts!: Post;

  postForm = { // form con valori non definit
    id: '',
    title: '',
    body: '',
  }

  ngOnInit(): void {
    this.form.statusChanges?.subscribe(status => { // verifica i cambiamenti del form
      console.log('Form status: ', status)
    })
  }

  crea() { // al click
    if (confirm("Are you sure to add a new post?")) { // dopo la conferma
      this.postSrv.newPost(this.form.value).subscribe((res) => { // parte la funzione POST che inserisce nel json i dati inseriti nel form
        this.posts = res;
        this.router.navigate(['/']);
      })


    }
  }
}
