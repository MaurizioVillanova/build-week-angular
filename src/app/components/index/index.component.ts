import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  posts: Post[] = [];
  displayedColumns: string[] = ['id', 'title', 'body', 'button']; // Angular Material per paginazione di tabelle
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private postSrv: PostService) {
  }

  ngOnInit(): void {
    this.scriviPost(); // GET
  }

  scriviPost() {
    this.postSrv.getPost().subscribe((res) => {
      this.posts = res; // GET di tutti i post del json
      this.dataSource = new MatTableDataSource<any>(this.posts);
      this.dataSource.paginator = this.paginator;
    }
    );
  }

  delete(id: number, index: number) { // al click DELETE in base all'id del post
    if (confirm("Are you sure to delete?")) {
      this.postSrv.cancellaPost(id).subscribe((ris) => {
        console.log(ris)
        this.posts?.splice(index, 1) // eliminazione di 1 oggetto a partire dal post con id identificato tramite parametro
      });
    }
  }
}
