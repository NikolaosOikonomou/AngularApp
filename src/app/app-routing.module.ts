import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from 'src/components/github/github.component';
import { NobelComponent } from 'src/components/nobel/nobel.component';

const routes: Routes = [
  {path:"GitHub",component:GithubComponent},
  {path:"Nobel",component:NobelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
