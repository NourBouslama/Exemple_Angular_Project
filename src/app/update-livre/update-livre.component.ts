import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  constructor(private activatedRoute: ActivatedRoute,
    private livreService: LivreService,
    private router :Router) { }

  ngOnInit(): void {
    this.livreService.consulterLivre(this.activatedRoute.snapshot.params.id).
 subscribe( liv =>{ this.currentLivre = liv; } ) ;
  }
  updateLivre() {
    this.livreService.updateLivre(this.currentLivre).subscribe(liv => {
    this.router.navigate(['/livres']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }
    
}
