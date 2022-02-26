import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  values1: string[];
  newLivre = new Livre();
  selectedFile=null;
  LivreForm:FormGroup;
  progress:number=0;
  msgs: any;

  constructor(private livreService:LivreService,private router :Router) 
  {
    /*this.LivreForm = this.formBuilder.group({

      name : new FormControl(''),
    price : new FormControl(''),
    image : new FormControl(''),
    //prop : new FormControl('')
     /* nomL : [''],
      prix : [''],
      img:[null]*/
     // image : new FormControl('')
      
    /*})*/
  }
  
 
  ngOnInit(): void {

  }
 

  addLivre(){
    this.livreService.ajouterLivre(this.newLivre)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['/livres']);
    
  }
/*
 onFileSelectd(event){
    ///console.log(event); 
    //this.selectedFile=event.target.files[0];
    const file=event.target.files ? event.target.files[0] : '';
    console.log(event);
    this.LivreForm.patchValue({
      img:file
    })
    this.LivreForm.get('img')?.updateValueAndValidity
  }submitImage(){
  this.livreService.ImageUpload(
    this.LivreForm.value.nomL,
    this.LivreForm.value.prix,
    this.LivreForm.value.image,

  ).subscribe((event:HttpEvent<any>)=>{
    switch(event.type){
      case HttpEventType.UploadProgress:
        //var eventTotal=event.total ? event.total : 0; not rquiered
        if(event.total){
          this.progress=Math.round((100/event.total)* event.loaded);
          this.msgs='Uploaded! ${this.progress}%';
        }
        break;
        case HttpEventType.Response:
          event.body;
          console.log(event.body);
    }   

  })
}
 */
}
