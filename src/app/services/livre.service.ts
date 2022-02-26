import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livre } from '../model/livre.model';
import{catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  

    apiURL: string = 'http://localhost:8080/livres/api';
    constructor(private http : HttpClient) {
    }
    listeLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.apiURL);
    }
    ajouterLivre( prod: Livre):Observable<Livre>{
      return this.http.post<Livre>(this.apiURL, prod, httpOptions);
      }

      supprimerLivre(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        consulterLivre(id: number): Observable<Livre> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Livre>(url);
          }

          updateLivre(prod :Livre) : Observable<Livre>
          {
          return this.http.put<Livre>(this.apiURL, prod, httpOptions);
          }

    /*ImageUpload(nomL:String,prix:number,img:File):Observable<any>{
    var formData:any=new FormData();
    formData.append("nomL",nomL);
    formData.append("prix",prix);
    formData.append("img",img);
    return this.http.post<Livre>(this.apiURL, formData,{
      reportProgress:true,
      observe:'events'
    }).pipe(
      catchError((err:any)=>{
        alert(err.message);
        return throwError(err.message);
      })
    );
    }*/
      
}


