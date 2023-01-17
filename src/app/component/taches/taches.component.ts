import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css'],
  
})
export class TachesComponent implements OnInit {
  taches: Array<Tache> = [];
  tachesUndefined: Array<Tache> = [];
  tachesEnAttente: Array<Tache> = [];
  tachesTermine: Array<Tache> = [];
  newTache: Tache = {
    titre : '',
    termine : false,
    statut:''
  };
  newTache_undefined: Tache = {
      titre : '',
      termine : false,
      statut:''
  };
  newTache_en_attente: Tache = {
        titre : '',
        termine : false,
        statut:''
  };
  newTache_Termine: Tache = {
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
    ajouterUndi() {
    
    this.tacheService.ajoutTaches(this.newTache_undefined).subscribe({
      next: (data) => {
        this.tachesUndefined.push(data);
      }
    });
    
  }  
  ajouterAttente() {
    
    this.tacheService.ajoutTaches(this.newTache_en_attente).subscribe({
      next: (data) => {
        this.tachesEnAttente.push(data);
      }
    });
    
  } 
  ajouterTermine() {
    
    this.tacheService.ajoutTaches(this.newTache_Termine).subscribe({
      next: (data) => {
        this.tachesTermine.push(data);
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
  supprimerUndi(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.tachesUndefined = this.tachesUndefined.filter(t => tache._id != t._id);
      }
    });

  }
  supprimerAttente(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.tachesEnAttente = this.tachesEnAttente.filter(t => tache._id != t._id);
      }
    });

  }
  supprimerTermine(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.tachesTermine = this.tachesTermine.filter(t => tache._id != t._id);
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

  drop(event: CdkDragDrop<Array<Tache>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
   
  }
}
