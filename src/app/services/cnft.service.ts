import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CnftService {

    base = "https://api.cnft.io/"
    constructor(
        private http: HttpClient,
    ) { }

    public getListings(options) {

        var path = this.base + "market/listings"
        var body = this.buildBody(options)

        var headers: {} = {
            headers: { "Content-Type": "application/json" },
            responseType: 'json' as const
        }

        return this.http.post<any>(path, body, headers)
            .pipe(
                catchError(this.handleError)
            )
    }

    public getFilterList() {
        return {
            "Charles's samurai": false,
            "Cardano astronaut": false,
            "Charles's billion dollar console": false,
            "Charles's painting": false,
            "The mighty one poster": false,
            "Gold unicorn trophy": false,
            "Black desk": false,
            "Charles's safe": false,
            "Cardano wine": false,
            "Gold coffee table": false,
            "Charles's yukata": false,
            "Ben Goertzel's hat": false,
            "Silver careful massacre mask": false,
            "Japanese whiskey": false,
            "Sals ny pizza": false,
            "Charles's cigars": false,
            "Charles's fallen angel statue": false,
            "Charles's AR headset": false,
            "Infinity gauntlet": false,
            "Bison statue": false,
            "Charles's eagle statue": false,
            "Wen moon stand": false,
            "Wen shelley poster": false,
            "Trash can": false,
            "Basic left armchair": false,
            "Aparna's armchair": false,
            "The name's byron poster": false,
            "Gold Dan Schaub's mask": false,
            "Premium right armchair": false,
            "Premium left chair": false,
            "Gold venetian mask": false,
            "Charles's PC": false,
            "Gold rocket": false,
            "Newton's cradle": false,
            "Gold floor lamp": false,
            "Cardano rock pi": false,
            "Saxophone": false,
            "Premium right chair": false,
            "Premium office chair": false,
            "Pool boss poster": false,
            "The spark poster": false,
            "Charles's lambo": false,
            "Molten tar monster poster": false,
            "Charles's kachina doll": false,
            "Vital lick poster": false,
            "Silver coffee table": false,
            "Charles's hat": false,
            "Cigarettes": false,
            "Go game": false,
            "Charles's leather jacket": false,
            "Gold shelves": false,
            "American whiskey": false,
            "Gold bed": false,
            "Premium left armchair": false,
            "Red ball": false,
            "Bird statue": false,
            "Alpaca statue": false,
            "Charles's gnome": false,
            "Charles's face mask": false,
            "Mask statue": false,
            "Black Dan Schaub's mask": false,
            "Dan Friedman's telescope": false,
            "Little birds poster": false,
            "Black table": false,
            "Gold hanger": false,
            "Silver Dan Schaub's mask": false,
            "Basic left chair": false,
            "Rocket fuel poster": false,
            "Silver rocket": false,
            "Monney girl poster": false,
            "Bird gossip statue": false,
            "Charles's tractor": false,
            "Mega bull poster": false,
            "Silver floor lamp": false,
            "Shakuhachi flute": false,
            "Silver bird mask": false,
            "Basic right armchair": false,
            "Basic right chair": false,
            "Charles's atv": false,
            "Charles's silver roses": false,
            "Basic office chair": false,
            "Hash it out poster": false,
            "Buzzin poster": false,
            "Aparna's wine": false,
            "Boxes coffee table": false,
            "Silver hanger": false,
            "White table": false,
            "White desk": false,
            "Cardano live sign": false,
            "Charles's starter pack": false,
            "Charles's mic": false,
            "Boxes desk": false,
            "White bookshelf": false,
            "White bed": false,
            "White shelves": false
        }
    }

    private buildBody(options) {

        var sortmap = {
            "asc" : 1,
            "desc" : -1
        }

        var sort = {}
        sort[options.sort] = sortmap[options.sortOrder]

        return { 
            "search": "",
            "types": [
                "listing",
                "auction",
                "offer"
            ], 
            "project": "CardanoCity", 
            "sort": sort, 
            "priceMin": (options.priceMin != null && options.priceMin != '' ? (options.priceMin * 100000) : 0), 
            "priceMax": (options.priceMax != null && options.priceMax != '' ? options.priceMax : null), 
            "page": options.page, 
            "verified": true, 
            "nsfw": false, 
            "sold": false 
        }
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(error);
    }
}

