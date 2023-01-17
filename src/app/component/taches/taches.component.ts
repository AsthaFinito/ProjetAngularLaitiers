import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import { DragDropModule } from '@angular/cdk/drag-drop' ;

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  taches: Array<Tache> = [];
  newTache: Tache = {
    titre : '',
    termine : false,
    statut:''
  };  

  filter:Array<string>= ['En cours','Undefined','En Attente','Termine']
  staut:Array<string>= ['En cours','Undefined','En Attente','Termine']
  titreU:string ='';
  titreA:string ='';
  titreC:string ='';
  titreT:string =''; 

  constructor(private tacheService: TachesService,
    private userService: UserService,
    private router: Router){ }
  
  ngOnInit(): void {
    this.tacheService.getTaches().subscribe({
      next: (data:Array<Tache>) => { this.taches = data; }
    });
   
  }  

  ajouter() {
    
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push(data);
      }
    });
    
  }  

  supprimer(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.taches = this.taches.filter(t => tache._id != t._id);
      }
    });

  }

  modifier(tache: Tache) {
    tache.termine = !tache.termine;
    this.tacheService.updateTaches(tache).subscribe({
      next: (data) => {
      }
    });
  }

  loggout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }

  
}
