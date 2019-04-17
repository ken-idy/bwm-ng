import { Rental } from './rental.model';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private rentals: Rental[] = [{

    id:"1",
    title:"Central Apartment",
    city: "The Hague",
    street: "waldorpstraat",
    category: "apartment",
    image:"http://via.placeholder.com/350x250",
    bedrooms: 4,
    description: "Very nice apartment",
    dailyRate:34,
    shared: false,
    createdAt: "24/02/2019"
    
    },
    {
    
      id:"2",
      title:"Central Apartment 2",
      city: "Rotterdam",
      street: "waldorpstraat",
      category: "apartment",
      image:"http://via.placeholder.com/350x250",
      bedrooms: 4,
      description: "Very nice apartment",
      dailyRate:34,
      shared: true,
      createdAt: "24/02/2019"
      
      },
      {
    
        id:"3",
        title:"Central Apartment 3",
        city: "Delft",
        street: "aluminstraat",
        category: "house",
        image:"http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate:34,
        shared: false,
        createdAt: "24/02/2019"
        
        },
        {
    
          id:"4",
          title:"Central Apartment 4",
          city: "Utrecht",
          street: "waterstraat",
          category: "apartment",
          image:"http://via.placeholder.com/350x250",
          bedrooms: 5,
          description: "Very nice apartment",
          dailyRate:34,
          shared: false,
          createdAt: "24/02/2019"
          
          },
        ]

        public getRentals(): Observable<Rental[]> {
          const rentalObservable: Observable<Rental[]> = new Observable((observer) => {

             setTimeout(() => {
               
               observer.next(this.rentals);
             },1000);

             setTimeout(() => {
               
              observer.error("error message");
            },2000);

            setTimeout(() => {
               
              observer.complete();
            },3000);
        

          });
          return rentalObservable;
        }

  constructor() { }
}
