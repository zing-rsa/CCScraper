import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import items from './items.json'

@Injectable({
    providedIn: 'root'
})
export class AlphaService {

    private base = 'https://alphastaking.com/ccassets'

    private items = items;

    constructor(
        private http: HttpClient
    ) {
        if (!environment.production) {
            this.base = 'http://localhost:4200/api'
        }
    }

    public getUnits() {

        var path = this.base + "/units"

        return this.http.get<any>(path)
            .pipe(
                catchError(this.handleError)
            )
    }

    public getFLoors() {

        var path = this.base + "/floor"

        return this.http.get<any>(path)
            .pipe(
                catchError(this.handleError)
            )
    }

    public getItems() {
        return this.items
    }

    public getItemsMap() {
        return {
            "1": "Charles's samurai",
            "Charles's samurai": "1",
            "2": "Cardano astronaut",
            "Cardano astronaut": "2",
            "3": "Charles's billion dollar console",
            "Charles's billion dollar console": "3",
            "4": "Charles's painting",
            "Charles's painting": "4",
            "5": "The mighty one poster",
            "The mighty one poster": "5",
            "6": "Gold unicorn trophy",
            "Gold unicorn trophy": "6",
            "7": "Black desk",
            "Black desk": "7",
            "8": "Charles's safe",
            "Charles's safe": "8",
            "9": "Cardano wine",
            "Cardano wine": "9",
            "10": "Gold coffee table",
            "Gold coffee table": "10",
            "11": "Charles's yukata",
            "Charles's yukata": "11",
            "12": "Silver careful massacre mask",
            "Silver careful massacre mask": "12",
            "13": "Ben Goertzel's hat",
            "Ben Goertzel's hat": "13",
            "14": "Japanese whiskey",
            "Japanese whiskey": "14",
            "15": "Sals ny pizza",
            "Sals ny pizza": "15",
            "16": "Charles's cigars",
            "Charles's cigars": "16",
            "17": "Charles's fallen angel statue",
            "Charles's fallen angel statue": "17",
            "18": "Charles's AR headset",
            "Charles's AR headset": "18",
            "19": "Infinity gauntlet",
            "Infinity gauntlet": "19",
            "20": "Bison statue",
            "Bison statue": "20",
            "21": "Charles's eagle statue",
            "Charles's eagle statue": "21",
            "22": "Wen moon stand",
            "Wen moon stand": "22",
            "23": "Wen shelley poster",
            "Wen shelley poster": "23",
            "24": "Trash can",
            "Trash can": "24",
            "25": "Basic left armchair",
            "Basic left armchair": "25",
            "26": "Aparna's armchair",
            "Aparna's armchair": "26",
            "27": "The name's byron poster",
            "The name's byron poster": "27",
            "28": "Gold Dan Schaub's mask",
            "Gold Dan Schaub's mask": "28",
            "29": "Premium right armchair",
            "Premium right armchair": "29",
            "30": "Premium left chair",
            "Premium left chair": "30",
            "31": "Gold venetian mask",
            "Gold venetian mask": "31",
            "32": "Charles's PC",
            "Charles's PC": "32",
            "33": "Gold rocket",
            "Gold rocket": "33",
            "34": "Newton's cradle",
            "Newton's cradle": "34",
            "35": "Gold floor lamp",
            "Gold floor lamp": "35",
            "36": "Saxophone",
            "Saxophone": "36",
            "37": "Cardano rock pi",
            "Cardano rock pi": "37",
            "38": "Premium right chair",
            "Premium right chair": "38",
            "39": "Premium office chair",
            "Premium office chair": "39",
            "40": "Pool boss poster",
            "Pool boss poster": "40",
            "41": "The spark poster",
            "The spark poster": "41",
            "42": "Charles's lambo",
            "Charles's lambo": "42",
            "43": "Molten tar monster poster",
            "Molten tar monster poster": "43",
            "44": "Charles's kachina doll",
            "Charles's kachina doll": "44",
            "45": "Vital lick poster",
            "Vital lick poster": "45",
            "46": "Silver coffee table",
            "Silver coffee table": "46",
            "47": "Charles's hat",
            "Charles's hat": "47",
            "48": "Cigarettes",
            "Cigarettes": "48",
            "49": "Go game",
            "Go game": "49",
            "50": "Charles's leather jacket",
            "Charles's leather jacket": "50",
            "51": "Gold shelves",
            "Gold shelves": "51",
            "52": "American whiskey",
            "American whiskey": "52",
            "53": "Gold bed",
            "Gold bed": "53",
            "54": "Premium left armchair",
            "Premium left armchair": "54",
            "55": "Red ball",
            "Red ball": "55",
            "56": "Bird statue",
            "Bird statue": "56",
            "57": "Alpaca statue",
            "Alpaca statue": "57",
            "58": "Charles's gnome",
            "Charles's gnome": "58",
            "59": "Charles's face mask",
            "Charles's face mask": "59",
            "60": "Mask statue",
            "Mask statue": "60",
            "61": "Black Dan Schaub's mask",
            "Black Dan Schaub's mask": "61",
            "62": "Dan Friedman's telescope",
            "Dan Friedman's telescope": "62",
            "63": "Little birds poster",
            "Little birds poster": "63",
            "64": "Black table",
            "Black table": "64",
            "65": "Gold hanger",
            "Gold hanger": "65",
            "66": "Silver Dan Schaub's mask",
            "Silver Dan Schaub's mask": "66",
            "67": "Basic left chair",
            "Basic left chair": "67",
            "68": "Rocket fuel poster",
            "Rocket fuel poster": "68",
            "69": "Silver rocket",
            "Silver rocket": "69",
            "70": "Monney girl poster",
            "Monney girl poster": "70",
            "71": "Bird gossip statue",
            "Bird gossip statue": "71",
            "72": "Charles's tractor",
            "Charles's tractor": "72",
            "73": "Mega bull poster",
            "Mega bull poster": "73",
            "74": "Silver floor lamp",
            "Silver floor lamp": "74",
            "75": "Shakuhachi flute",
            "Shakuhachi flute": "75",
            "76": "Silver bird mask",
            "Silver bird mask": "76",
            "77": "Basic right armchair",
            "Basic right armchair": "77",
            "78": "Basic right chair",
            "Basic right chair": "78",
            "79": "Charles's atv",
            "Charles's atv": "79",
            "80": "Charles's silver roses",
            "Charles's silver roses": "80",
            "81": "Basic office chair",
            "Basic office chair": "81",
            "82": "Hash it out poster",
            "Hash it out poster": "82",
            "83": "Buzzin poster",
            "Buzzin poster": "83",
            "84": "Aparna's wine",
            "Aparna's wine": "84",
            "85": "Boxes coffee table",
            "Boxes coffee table": "85",
            "86": "Silver hanger",
            "Silver hanger": "86",
            "87": "White table",
            "White table": "87",
            "88": "White desk",
            "White desk": "88",
            "89": "Cardano live sign",
            "Cardano live sign": "89",
            "90": "Charles's starter pack",
            "Charles's starter pack": "90",
            "91": "Charles's mic",
            "Charles's mic": "91",
            "92": "Boxes desk",
            "Boxes desk": "92",
            "93": "White bookshelf",
            "White bookshelf": "93",
            "94": "White bed",
            "White bed": "94",
            "95": "White shelves",
            "White shelves": "95"
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
