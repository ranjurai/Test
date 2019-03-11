import { Component, OnInit } from '@angular/core';
import { GitRepoService } from './services/git-repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gitRespositories: Array<any> = [];
  constructor(private gitRepoService: GitRepoService) { }

  ngOnInit() {
    this.getAllRepos();
  }


  getAllRepos() {
    this.gitRespositories = [];
    this.gitRepoService.getAllRespos('test').subscribe((res) => {
      if(res && res.items && res.items.length>0) {
       res.items.map(item => {
         let gitRepoItem = {
            name: item.name,
            description: item.description,
            image: item.owner && item.owner.avatar_url,
            open_issues: item.open_issues,
            forks_count: item.forks_count
         }
         this.gitRespositories.push(gitRepoItem);
       });
      }
    }, err => {
     console.log('err', err);
    })
  }

}
