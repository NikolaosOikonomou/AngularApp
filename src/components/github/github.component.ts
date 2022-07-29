import { Component, OnInit } from '@angular/core';
import { User } from './githubmodels';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user!:User;
  searchName!:string;

  constructor(private githubservice:GithubService) { }

  OnGetUserHandler(){
    this.githubservice.GetUser(this.searchName).subscribe({
      next: response => this.user = response,
      error: error => console.log(error),
      complete: () => console.log("Done"),
    })
  }

  ngOnInit(): void {
    
  }

}
