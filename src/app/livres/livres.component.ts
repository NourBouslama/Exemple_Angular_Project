import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres : Livre[];
  livre:Livre;
  constructor(  private livreService: LivreService,private router :Router,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.livreService.listeLivre().subscribe(livs => {
    console.log(livs);
    this.livres = livs;
    });
  }
  supprimerLivre(p: Livre)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.livreService.supprimerLivre(p.idL).subscribe(() => {
console.log("livre supprimé");
});
this.router.navigate(['/livres']).then(() => {
window.location.reload();
});
}



}
