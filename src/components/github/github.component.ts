import { Component, OnInit } from '@angular/core';
import { User } from './githubmodels';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:User | undefined;
  searchName!:string;
  errorMessage:string | undefined;
  showLoadingSpinner:boolean = false;

  constructor(private githubservice:GithubService) { }

  OnGetUserHandler(){
    this.user = undefined;
    this.errorMessage = undefined;
    this.showLoadingSpinner = true;
    this.githubservice.GetUser(this.searchName).subscribe({
      next: response => this.user = response,
      error: error => {this.errorMessage = `Opps Something went wrong, Error: ${error.status}`,this.showLoadingSpinner = false},
      complete: () => this.showLoadingSpinner = false,
    })
  }

  ngOnInit(): void {
    
  }

}
