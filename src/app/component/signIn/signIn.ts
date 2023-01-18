import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Liste, Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-taches',
  templateUrl: './signIn.html',
 // styleUrls: ['./taches.component.css'],
  
})
export class CreationCompte{

    user: User = { login: '', password: '' };

}