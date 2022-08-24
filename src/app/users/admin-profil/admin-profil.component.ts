import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.scss']
})
export class AdminProfilComponent implements OnInit {
  currentUser: any;
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
