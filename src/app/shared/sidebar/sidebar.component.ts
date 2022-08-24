import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  roles: string[] = [];
  access: boolean;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private _router: Router) { }

  ngOnInit(): void {
    this.roles = this.tokenStorage.getUser().roles;
    console.log(this.roles);
if(this.roles[0]!="ROLE_ADMIN"){
this.access=false;
console.log(this.access);
}
else this.access=true;
  }

}
