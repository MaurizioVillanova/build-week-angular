import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  },
  {
    path: "edit/:id",
    component: EditComponent
  },
  {
    path: "new",
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
