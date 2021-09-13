import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CnftService {

    base = "https://api.cnft.io/"
    constructor(
        private http: HttpClient,
    ) { }

    public async getListings(options) {

        var path = this.base + "market/listings"
        var body = this.buildBody(options)

        var headers: {} = {
            headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
            responseType: 'json' as const
        }

        return await this.http.post<any>(path, body, headers)
          .pipe(
            catchError(this.handleError)
          ).toPromise();

        //return this.mockData()
    }

    private mockData() {
        return {
            "found": 200,
            "assets": [
                {
                    "id": "613b6f2c557490595ebdab92",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743132363137",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit12617",
                        "thumbnail": "ipfs://QmReqjRUZ6EAaJxi3FmNsRjtRoUfzy5XVS1JSW6uJN43YD",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmReqjRUZ6EAaJxi3FmNsRjtRoUfzy5XVS1JSW6uJN43YD",
                                "name": "Unit12617",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Daedalus"
                            },
                            {
                                "value": "724272"
                            },
                            {
                                "poster": "Shelley poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Saxophone",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Charles's cigars",
                                        "instances": "6454"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "The spark poster",
                                        "instances": "8525"
                                    },
                                    {
                                        "name": "Rocket fuel poster",
                                        "instances": "13290"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "Charles's AR headset",
                                        "instances": "7028"
                                    },
                                    {
                                        "name": "Infinity gauntlet",
                                        "instances": "7038"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "Alpaca statue",
                                        "instances": "11075"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Trash can",
                                        "instances": "7679"
                                    },
                                    {
                                        "name": "Buzzin poster",
                                        "instances": "13544"
                                    },
                                    {
                                        "name": "Black desk",
                                        "instances": "4363"
                                    },
                                    {
                                        "name": "Japanese whiskey",
                                        "instances": "6326"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "Gold shelves",
                                        "instances": "10085"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "29"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631285036570
                },
                {
                    "id": "613b770e5465a4fb215e683b",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743136313132",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit16112",
                        "thumbnail": "ipfs://QmWKQKAiXzTtJfqtVeQhDdvFo39ULqFPtioiG8sGiJosP9",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmWKQKAiXzTtJfqtVeQhDdvFo39ULqFPtioiG8sGiJosP9",
                                "name": "Unit16112",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Daedalus"
                            },
                            {
                                "value": "642689"
                            },
                            {
                                "poster": "Goguen poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver coffee table",
                                        "instances": "9099"
                                    },
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Monney girl poster",
                                        "instances": "13314"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Silver Dan Schaub's mask",
                                        "instances": "13185"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "Charles's PC",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Infinity gauntlet",
                                        "instances": "7038"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "Premium right chair",
                                        "instances": "8486"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Silver careful massacre mask",
                                        "instances": "6319"
                                    },
                                    {
                                        "name": "Buzzin poster",
                                        "instances": "13544"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's kachina doll",
                                        "instances": "8569"
                                    },
                                    {
                                        "name": "Charles's safe",
                                        "instances": "4879"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "28"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631287054425
                },
                {
                    "id": "613b57cfce43cec76ecb8c3e",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743037383432",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit07842",
                        "thumbnail": "ipfs://QmTs7RHTHdys5GonLwCPTahYPbBQ1bKkbniAKVMrTQnvVY",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmTs7RHTHdys5GonLwCPTahYPbBQ1bKkbniAKVMrTQnvVY",
                                "name": "Unit07842",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Atala Prism"
                            },
                            {
                                "value": "858672"
                            },
                            {
                                "poster": "Basho poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Charles's tractor",
                                        "instances": "13322"
                                    },
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Bird statue",
                                        "instances": "10990"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "Monney girl poster",
                                        "instances": "13314"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "Silver Dan Schaub's mask",
                                        "instances": "13185"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "Charles's face mask",
                                        "instances": "11085"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Bison statue",
                                        "instances": "7107"
                                    },
                                    {
                                        "name": "Vital lick poster",
                                        "instances": "8582"
                                    },
                                    {
                                        "name": "Cardano wine",
                                        "instances": "5193"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Gold Dan Schaub's mask",
                                        "instances": "8330"
                                    },
                                    {
                                        "name": "Buzzin poster",
                                        "instances": "13544"
                                    },
                                    {
                                        "name": "Aparna's armchair",
                                        "instances": "8031"
                                    },
                                    {
                                        "name": "Red ball",
                                        "instances": "10432"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "37"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631279055290
                },
                {
                    "id": "613b78fe5148476958d846ca",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743134333037",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit14307",
                        "thumbnail": "ipfs://QmcLaDS4eZV2ym2QSR8qZ7dBj2Ly1Z5WwCausGmXY1EeSf",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmcLaDS4eZV2ym2QSR8qZ7dBj2Ly1Z5WwCausGmXY1EeSf",
                                "name": "Unit14307",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Cardano"
                            },
                            {
                                "value": "683780"
                            },
                            {
                                "poster": "Basho poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Charles's tractor",
                                        "instances": "13322"
                                    },
                                    {
                                        "name": "Premium left chair",
                                        "instances": "8385"
                                    },
                                    {
                                        "name": "Bird statue",
                                        "instances": "10990"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "Monney girl poster",
                                        "instances": "13314"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "The spark poster",
                                        "instances": "8525"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "Charles's PC",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Buzzin poster",
                                        "instances": "13544"
                                    },
                                    {
                                        "name": "Red ball",
                                        "instances": "10432"
                                    },
                                    {
                                        "name": "Ben Goertzel's hat",
                                        "instances": "6319"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's kachina doll",
                                        "instances": "8569"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "Charles's safe",
                                        "instances": "4879"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "30"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631287550773
                },
                {
                    "id": "613b55764f661b63c7610ee6",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743434313634",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit44164",
                        "thumbnail": "ipfs://QmQ7skpfoLCW2TyNwW1oGjHc1GA8UKYqPZ81jSSMXZ4vj9",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmQ7skpfoLCW2TyNwW1oGjHc1GA8UKYqPZ81jSSMXZ4vj9",
                                "name": "Unit44164",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Atala Prism"
                            },
                            {
                                "value": "193144"
                            },
                            {
                                "poster": "Goguen poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Charles's lambo",
                                        "instances": "8536"
                                    },
                                    {
                                        "name": "Gold venetian mask",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Red ball",
                                        "instances": "10432"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "11"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631278454137
                },
                {
                    "id": "613b694846ea6260567f8465",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743037343636",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit07466",
                        "thumbnail": "ipfs://QmV6d9zSWjhTKhCYUJXVxWtPguFR1m8j8tomRERn2GEjmN",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmV6d9zSWjhTKhCYUJXVxWtPguFR1m8j8tomRERn2GEjmN",
                                "name": "Unit07466",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Cardano"
                            },
                            {
                                "value": "870422"
                            },
                            {
                                "poster": "Voltaire poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Charles's atv",
                                        "instances": "13427"
                                    },
                                    {
                                        "name": "Basic left armchair",
                                        "instances": "7692"
                                    },
                                    {
                                        "name": "Saxophone",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Premium left chair",
                                        "instances": "8385"
                                    },
                                    {
                                        "name": "Charles's silver roses",
                                        "instances": "13428"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Monney girl poster",
                                        "instances": "13314"
                                    },
                                    {
                                        "name": "Silver rocket",
                                        "instances": "13294"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "Rocket fuel poster",
                                        "instances": "13290"
                                    },
                                    {
                                        "name": "Charles's AR headset",
                                        "instances": "7028"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Gold venetian mask",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "Vital lick poster",
                                        "instances": "8582"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "American whiskey",
                                        "instances": "10116"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Wen moon stand",
                                        "instances": "7519"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Trash can",
                                        "instances": "7679"
                                    },
                                    {
                                        "name": "Charles's gnome",
                                        "instances": "11082"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "The name's byron poster",
                                        "instances": "8314"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "36"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631283528418
                },
                {
                    "id": "613b57c2ee9273c03ce2d96c",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743132343739",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit12479",
                        "thumbnail": "ipfs://QmWcNxc9qVeVxwWEABH9hse6TpCaUFGJWvba7NH6aYDoQD",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmWcNxc9qVeVxwWEABH9hse6TpCaUFGJWvba7NH6aYDoQD",
                                "name": "Unit12479",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Daedalus"
                            },
                            {
                                "value": "728235"
                            },
                            {
                                "poster": "Voltaire poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Molten tar monster poster",
                                        "instances": "8567"
                                    },
                                    {
                                        "name": "Mask statue",
                                        "instances": "11122"
                                    },
                                    {
                                        "name": "Bird statue",
                                        "instances": "10990"
                                    },
                                    {
                                        "name": "Gold coffee table",
                                        "instances": "5848"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Pool boss poster",
                                        "instances": "8501"
                                    },
                                    {
                                        "name": "Charles's AR headset",
                                        "instances": "7028"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Gold venetian mask",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's hat",
                                        "instances": "9877"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Charles's fallen angel statue",
                                        "instances": "6991"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "Japanese whiskey",
                                        "instances": "6326"
                                    },
                                    {
                                        "name": "Sals ny pizza",
                                        "instances": "6349"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    },
                                    {
                                        "name": "Gold bed",
                                        "instances": "10122"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "29"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631279042938
                },
                {
                    "id": "613b51e569139b51fbb38c90",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743233313032",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit23102",
                        "thumbnail": "ipfs://QmXApErF9thdhNVQcWRdR3YNRSdQRkSUirkfyy3qk7abeC",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmXApErF9thdhNVQcWRdR3YNRSdQRkSUirkfyy3qk7abeC",
                                "name": "Unit23102",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Cardano"
                            },
                            {
                                "value": "503691"
                            },
                            {
                                "poster": "Shelley poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Basic left armchair",
                                        "instances": "7692"
                                    },
                                    {
                                        "name": "Molten tar monster poster",
                                        "instances": "8567"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "Pool boss poster",
                                        "instances": "8501"
                                    },
                                    {
                                        "name": "Charles's AR headset",
                                        "instances": "7028"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Charles's eagle statue",
                                        "instances": "7147"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "American whiskey",
                                        "instances": "10116"
                                    },
                                    {
                                        "name": "Wen shelley poster",
                                        "instances": "7655"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "23"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631277541315
                },
                {
                    "id": "613b57bde4a67aea1af9db7d",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743131353838",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit11588",
                        "thumbnail": "ipfs://QmdnAZF886MYQAmFZ3dSifPw7x8A4iRFYjnTMzymDvK5ia",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmdnAZF886MYQAmFZ3dSifPw7x8A4iRFYjnTMzymDvK5ia",
                                "name": "Unit11588",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Daedalus"
                            },
                            {
                                "value": "750646"
                            },
                            {
                                "poster": "Shelley poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver coffee table",
                                        "instances": "9099"
                                    },
                                    {
                                        "name": "Mask statue",
                                        "instances": "11122"
                                    },
                                    {
                                        "name": "Bird statue",
                                        "instances": "10990"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Silver rocket",
                                        "instances": "13294"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "Rocket fuel poster",
                                        "instances": "13290"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Premium right chair",
                                        "instances": "8486"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Silver careful massacre mask",
                                        "instances": "6319"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Basic office chair",
                                        "instances": "13443"
                                    },
                                    {
                                        "name": "Charles's gnome",
                                        "instances": "11082"
                                    },
                                    {
                                        "name": "Newton's cradle",
                                        "instances": "8463"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's kachina doll",
                                        "instances": "8569"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "The name's byron poster",
                                        "instances": "8314"
                                    },
                                    {
                                        "name": "Gold shelves",
                                        "instances": "10085"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "31"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631279037956
                },
                {
                    "id": "613b7d4ab539a6ff12469f90",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743038373432",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit08742",
                        "thumbnail": "ipfs://QmYWdC9Vbs3G8Pc4m1dZsGwbqSSNcx2qNYrTVBzmhMX11w",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmYWdC9Vbs3G8Pc4m1dZsGwbqSSNcx2qNYrTVBzmhMX11w",
                                "name": "Unit08742",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Ouroboros"
                            },
                            {
                                "value": "831461"
                            },
                            {
                                "poster": "Goguen poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Bird statue",
                                        "instances": "10990"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Gold coffee table",
                                        "instances": "5848"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "Rocket fuel poster",
                                        "instances": "13290"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "Charles's PC",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Bison statue",
                                        "instances": "7107"
                                    },
                                    {
                                        "name": "Cardano wine",
                                        "instances": "5193"
                                    },
                                    {
                                        "name": "American whiskey",
                                        "instances": "10116"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Wen moon stand",
                                        "instances": "7519"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Trash can",
                                        "instances": "7679"
                                    },
                                    {
                                        "name": "Aparna's armchair",
                                        "instances": "8031"
                                    },
                                    {
                                        "name": "Ben Goertzel's hat",
                                        "instances": "6319"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Gold rocket",
                                        "instances": "8455"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "The name's byron poster",
                                        "instances": "8314"
                                    },
                                    {
                                        "name": "Charles's cigars",
                                        "instances": "6454"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "35"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631288650828
                },
                {
                    "id": "613b7927b034909ea063c53a",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743134333238",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit14328",
                        "thumbnail": "ipfs://QmRHx9BWEkvQFJaAzxn6f15gjW5z3JLS7W4hRzZwbW63hP",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmRHx9BWEkvQFJaAzxn6f15gjW5z3JLS7W4hRzZwbW63hP",
                                "name": "Unit14328",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Atala Prism"
                            },
                            {
                                "value": "683378"
                            },
                            {
                                "poster": "Voltaire poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Charles's tractor",
                                        "instances": "13322"
                                    },
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Silver rocket",
                                        "instances": "13294"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Silver Dan Schaub's mask",
                                        "instances": "13185"
                                    },
                                    {
                                        "name": "The spark poster",
                                        "instances": "8525"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "Charles's AR headset",
                                        "instances": "7028"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "Wen shelley poster",
                                        "instances": "7655"
                                    },
                                    {
                                        "name": "Alpaca statue",
                                        "instances": "11075"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Red ball",
                                        "instances": "10432"
                                    },
                                    {
                                        "name": "Charles's fallen angel statue",
                                        "instances": "6991"
                                    },
                                    {
                                        "name": "Japanese whiskey",
                                        "instances": "6326"
                                    },
                                    {
                                        "name": "Newton's cradle",
                                        "instances": "8463"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "29"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631287591583
                },
                {
                    "id": "613b6b890d038da9eb5d1f83",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743239353131",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit29511",
                        "thumbnail": "ipfs://QmPo2cKgfBadch4jPa4aBHeWpmwBDoqw9WGvHFWMhaRmYE",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmPo2cKgfBadch4jPa4aBHeWpmwBDoqw9WGvHFWMhaRmYE",
                                "name": "Unit29511",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Ouroboros"
                            },
                            {
                                "value": "395412"
                            },
                            {
                                "poster": "Basho poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Molten tar monster poster",
                                        "instances": "8567"
                                    },
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "Charles's lambo",
                                        "instances": "8536"
                                    },
                                    {
                                        "name": "Premium left chair",
                                        "instances": "8385"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "Charles's AR headset",
                                        "instances": "7028"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Charles's hat",
                                        "instances": "9877"
                                    },
                                    {
                                        "name": "Basic office chair",
                                        "instances": "13443"
                                    },
                                    {
                                        "name": "Buzzin poster",
                                        "instances": "13544"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Charles's safe",
                                        "instances": "4879"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "19"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631284105410
                },
                {
                    "id": "613b6b3c3483337c27951cd9",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743134373432",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit14742",
                        "thumbnail": "ipfs://QmZ6a1SY544pj8SngVGqLzz3M7ZC4UVJvR3VCDiWn7Z9hD",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmZ6a1SY544pj8SngVGqLzz3M7ZC4UVJvR3VCDiWn7Z9hD",
                                "name": "Unit14742",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Cardano"
                            },
                            {
                                "value": "673107"
                            },
                            {
                                "poster": "Byron poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Basic left armchair",
                                        "instances": "7692"
                                    },
                                    {
                                        "name": "Molten tar monster poster",
                                        "instances": "8567"
                                    },
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "Charles's PC",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Charles's hat",
                                        "instances": "9877"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Basic office chair",
                                        "instances": "13443"
                                    },
                                    {
                                        "name": "Buzzin poster",
                                        "instances": "13544"
                                    },
                                    {
                                        "name": "Japanese whiskey",
                                        "instances": "6326"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "Gold bed",
                                        "instances": "10122"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "28"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631284028213
                },
                {
                    "id": "613b746520cd4646dc8bd490",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743137383336",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit17836",
                        "thumbnail": "ipfs://QmdPxVxvRc5qQndRbkFGHeMEhPNWM2hJsNMQB5tMe6Pqwe",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmdPxVxvRc5qQndRbkFGHeMEhPNWM2hJsNMQB5tMe6Pqwe",
                                "name": "Unit17836",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Atala Prism"
                            },
                            {
                                "value": "606358"
                            },
                            {
                                "poster": "Voltaire poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Mask statue",
                                        "instances": "11122"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Charles's silver roses",
                                        "instances": "13428"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "Monney girl poster",
                                        "instances": "13314"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Gold venetian mask",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "Premium right armchair",
                                        "instances": "8380"
                                    },
                                    {
                                        "name": "Charles's eagle statue",
                                        "instances": "7147"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "Alpaca statue",
                                        "instances": "11075"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Basic office chair",
                                        "instances": "13443"
                                    },
                                    {
                                        "name": "Gold unicorn trophy",
                                        "instances": "4025"
                                    },
                                    {
                                        "name": "Charles's fallen angel statue",
                                        "instances": "6991"
                                    },
                                    {
                                        "name": "Gold shelves",
                                        "instances": "10085"
                                    },
                                    {
                                        "name": "Japanese whiskey",
                                        "instances": "6326"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "26"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631286373622
                },
                {
                    "id": "613b57c7ce43cec76ecb8c3c",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743135333631",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit15361",
                        "thumbnail": "ipfs://QmZoBEWUbpwZ9yt9W8RGoMA2wRUCd7DqmznncPrGu8NyBt",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmZoBEWUbpwZ9yt9W8RGoMA2wRUCd7DqmznncPrGu8NyBt",
                                "name": "Unit15361",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Atala Prism"
                            },
                            {
                                "value": "659084"
                            },
                            {
                                "poster": "Shelley poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Silver coffee table",
                                        "instances": "9099"
                                    },
                                    {
                                        "name": "Mask statue",
                                        "instances": "11122"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Premium left chair",
                                        "instances": "8385"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "Charles's face mask",
                                        "instances": "11085"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Gold venetian mask",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "The mighty one poster",
                                        "instances": "2188"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Alpaca statue",
                                        "instances": "11075"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Gold Dan Schaub's mask",
                                        "instances": "8330"
                                    },
                                    {
                                        "name": "Charles's fallen angel statue",
                                        "instances": "6991"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Gold rocket",
                                        "instances": "8455"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "The name's byron poster",
                                        "instances": "8314"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "28"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631279047874
                },
                {
                    "id": "613b6f0613dccb914b4d7826",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743037383636",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit07866",
                        "thumbnail": "ipfs://QmQJbNqtmmQ9w3r5x6vhjABskAeFi6CCrx5J31yp5KfrNt",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmQJbNqtmmQ9w3r5x6vhjABskAeFi6CCrx5J31yp5KfrNt",
                                "name": "Unit07866",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Ouroboros"
                            },
                            {
                                "value": "857843"
                            },
                            {
                                "poster": "Goguen poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Charles's atv",
                                        "instances": "13427"
                                    },
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Mask statue",
                                        "instances": "11122"
                                    },
                                    {
                                        "name": "Saxophone",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Charles's lambo",
                                        "instances": "8536"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Bird statue",
                                        "instances": "10990"
                                    },
                                    {
                                        "name": "Gold coffee table",
                                        "instances": "5848"
                                    },
                                    {
                                        "name": "Monney girl poster",
                                        "instances": "13314"
                                    },
                                    {
                                        "name": "Silver rocket",
                                        "instances": "13294"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Silver Dan Schaub's mask",
                                        "instances": "13185"
                                    },
                                    {
                                        "name": "Rocket fuel poster",
                                        "instances": "13290"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "American whiskey",
                                        "instances": "10116"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Alpaca statue",
                                        "instances": "11075"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Trash can",
                                        "instances": "7679"
                                    },
                                    {
                                        "name": "Ben Goertzel's hat",
                                        "instances": "6319"
                                    },
                                    {
                                        "name": "Charles's gnome",
                                        "instances": "11082"
                                    },
                                    {
                                        "name": "Newton's cradle",
                                        "instances": "8463"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "The name's byron poster",
                                        "instances": "8314"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "35"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631284998915
                },
                {
                    "id": "613b619fe4a67aea1af9dbec",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743436373436",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit46746",
                        "thumbnail": "ipfs://Qmd4NDU1sGrSLwtKa3b2PGYo5qmRf4pvhQC96sK2XBr7rV",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://Qmd4NDU1sGrSLwtKa3b2PGYo5qmRf4pvhQC96sK2XBr7rV",
                                "name": "Unit46746",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Ouroboros"
                            },
                            {
                                "value": "161181"
                            },
                            {
                                "poster": "Byron poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    },
                                    {
                                        "name": "Gold bed",
                                        "instances": "10122"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "9"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631281567300
                },
                {
                    "id": "613b6735c069cebd648643c8",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743338393837",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit38987",
                        "thumbnail": "ipfs://QmTd4n3Ho56Q4VWvFjZn8uVCAHtFhTrfDwbA8PrFKmGsLk",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmTd4n3Ho56Q4VWvFjZn8uVCAHtFhTrfDwbA8PrFKmGsLk",
                                "name": "Unit38987",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Cardano"
                            },
                            {
                                "value": "260109"
                            },
                            {
                                "poster": "Shelley poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Charles's atv",
                                        "instances": "13427"
                                    },
                                    {
                                        "name": "Basic left armchair",
                                        "instances": "7692"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Pool boss poster",
                                        "instances": "8501"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "Charles's eagle statue",
                                        "instances": "7147"
                                    },
                                    {
                                        "name": "Gold hanger",
                                        "instances": "12491"
                                    },
                                    {
                                        "name": "Silver careful massacre mask",
                                        "instances": "6319"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "14"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631282997795
                },
                {
                    "id": "613b46ad9e2bda894784b6e0",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743232333937",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit22397",
                        "thumbnail": "ipfs://QmR3R5Zkr9tLYrLzt288wnHHfoRHhNdvPBr9qF4N56pnUq",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmR3R5Zkr9tLYrLzt288wnHHfoRHhNdvPBr9qF4N56pnUq",
                                "name": "Unit22397",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Atala Prism"
                            },
                            {
                                "value": "516798"
                            },
                            {
                                "poster": "Shelley poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Black table",
                                        "instances": "12324"
                                    },
                                    {
                                        "name": "Mask statue",
                                        "instances": "11122"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Monney girl poster",
                                        "instances": "13314"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "Charles's face mask",
                                        "instances": "11085"
                                    },
                                    {
                                        "name": "Gold venetian mask",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "Premium right armchair",
                                        "instances": "8380"
                                    },
                                    {
                                        "name": "Charles's eagle statue",
                                        "instances": "7147"
                                    },
                                    {
                                        "name": "Wen shelley poster",
                                        "instances": "7655"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's hat",
                                        "instances": "9877"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's safe",
                                        "instances": "4879"
                                    },
                                    {
                                        "name": "Gold rocket",
                                        "instances": "8455"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "23"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631274669517
                },
                {
                    "id": "613b6de3850108aabca2e3da",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743138333931",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit18391",
                        "thumbnail": "ipfs://QmUvM8vqmyd5AjuzvzUxEaBFBHD5nkBACPzGPRuq94YChW",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmUvM8vqmyd5AjuzvzUxEaBFBHD5nkBACPzGPRuq94YChW",
                                "name": "Unit18391",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "IOHK"
                            },
                            {
                                "value": "593694"
                            },
                            {
                                "poster": "Byron poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Charles's tractor",
                                        "instances": "13322"
                                    },
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "Silver rocket",
                                        "instances": "13294"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "Boxes coffee table",
                                        "instances": "16651"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Gold venetian mask",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "American whiskey",
                                        "instances": "10116"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Charles's hat",
                                        "instances": "9877"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Buzzin poster",
                                        "instances": "13544"
                                    },
                                    {
                                        "name": "Charles's fallen angel statue",
                                        "instances": "6991"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "28"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631284707434
                },
                {
                    "id": "613b45e3db67d9f7865e7bd0",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743138303538",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit18058",
                        "thumbnail": "ipfs://QmaktnRcHx7K4X7oqppNx84tDzrtxAGn4uEBfusdtpMAXz",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmaktnRcHx7K4X7oqppNx84tDzrtxAGn4uEBfusdtpMAXz",
                                "name": "Unit18058",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Daedalus"
                            },
                            {
                                "value": "601437"
                            },
                            {
                                "poster": "Voltaire poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Charles's tractor",
                                        "instances": "13322"
                                    },
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "Premium left chair",
                                        "instances": "8385"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Gold coffee table",
                                        "instances": "5848"
                                    },
                                    {
                                        "name": "Cardano rock pi",
                                        "instances": "8469"
                                    },
                                    {
                                        "name": "Silver bird mask",
                                        "instances": "13377"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Dan Friedman's telescope",
                                        "instances": "11988"
                                    },
                                    {
                                        "name": "American whiskey",
                                        "instances": "10116"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Charles's leather jacket",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Basic office chair",
                                        "instances": "13443"
                                    },
                                    {
                                        "name": "Red ball",
                                        "instances": "10432"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Charles's mic",
                                        "instances": "21770"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Charles's cigars",
                                        "instances": "6454"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "27"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631274467496
                },
                {
                    "id": "613b45e90afdddb461b4cc00",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743133333830",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit13380",
                        "thumbnail": "ipfs://QmXsqxKvyLLeGx1ttCJ1qizoxToSH6U7oCEESqfHxYthDc",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmXsqxKvyLLeGx1ttCJ1qizoxToSH6U7oCEESqfHxYthDc",
                                "name": "Unit13380",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Cardano"
                            },
                            {
                                "value": "705401"
                            },
                            {
                                "poster": "Basho poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Charles's atv",
                                        "instances": "13427"
                                    },
                                    {
                                        "name": "Charles's tractor",
                                        "instances": "13322"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Charles's silver roses",
                                        "instances": "13428"
                                    },
                                    {
                                        "name": "Basic right chair",
                                        "instances": "13406"
                                    },
                                    {
                                        "name": "Silver floor lamp",
                                        "instances": "13364"
                                    },
                                    {
                                        "name": "The spark poster",
                                        "instances": "8525"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Premium right armchair",
                                        "instances": "8380"
                                    },
                                    {
                                        "name": "Bird gossip statue",
                                        "instances": "13317"
                                    },
                                    {
                                        "name": "Alpaca statue",
                                        "instances": "11075"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Premium left armchair",
                                        "instances": "10193"
                                    },
                                    {
                                        "name": "Charles's hat",
                                        "instances": "9877"
                                    },
                                    {
                                        "name": "Gold Dan Schaub's mask",
                                        "instances": "8330"
                                    },
                                    {
                                        "name": "Gold shelves",
                                        "instances": "10085"
                                    },
                                    {
                                        "name": "Red ball",
                                        "instances": "10432"
                                    },
                                    {
                                        "name": "Charles's fallen angel statue",
                                        "instances": "6991"
                                    },
                                    {
                                        "name": "Black desk",
                                        "instances": "4363"
                                    },
                                    {
                                        "name": "Japanese whiskey",
                                        "instances": "6326"
                                    },
                                    {
                                        "name": "Sals ny pizza",
                                        "instances": "6349"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "29"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631274473496
                },
                {
                    "id": "613b51f2496e5cd586d40452",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743437373536",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit47756",
                        "thumbnail": "ipfs://QmZ8gK9gEGV5XJJxoLpV3rA73jRwBtGdBgmi7HMKya24tQ",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmZ8gK9gEGV5XJJxoLpV3rA73jRwBtGdBgmi7HMKya24tQ",
                                "name": "Unit47756",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "IOHK"
                            },
                            {
                                "value": "149370"
                            },
                            {
                                "poster": "Voltaire poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Charles's atv",
                                        "instances": "13427"
                                    },
                                    {
                                        "name": "Premium left chair",
                                        "instances": "8385"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    },
                                    {
                                        "name": "Gold bed",
                                        "instances": "10122"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "9"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631277554367
                },
                {
                    "id": "613b57b966f3bdd4c80879ed",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743131323335",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit11235",
                        "thumbnail": "ipfs://QmZ9HgYKkLy8DsiLefgGgMW7mvrAk1vNDumGWEp3oMhkvd",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmZ9HgYKkLy8DsiLefgGgMW7mvrAk1vNDumGWEp3oMhkvd",
                                "name": "Unit11235",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "Ouroboros"
                            },
                            {
                                "value": "759995"
                            },
                            {
                                "poster": "Goguen poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Silver hanger",
                                        "instances": "19067"
                                    },
                                    {
                                        "name": "Mega bull poster",
                                        "instances": "13344"
                                    },
                                    {
                                        "name": "Gold coffee table",
                                        "instances": "5848"
                                    },
                                    {
                                        "name": "Gold floor lamp",
                                        "instances": "8464"
                                    },
                                    {
                                        "name": "Charles's starter pack",
                                        "instances": "21716"
                                    },
                                    {
                                        "name": "Rocket fuel poster",
                                        "instances": "13290"
                                    },
                                    {
                                        "name": "Charles's PC",
                                        "instances": "8446"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "Hash it out poster",
                                        "instances": "13454"
                                    },
                                    {
                                        "name": "Charles's painting",
                                        "instances": "2152"
                                    },
                                    {
                                        "name": "Infinity gauntlet",
                                        "instances": "7038"
                                    },
                                    {
                                        "name": "Charles's eagle statue",
                                        "instances": "7147"
                                    },
                                    {
                                        "name": "Cigarettes",
                                        "instances": "9981"
                                    },
                                    {
                                        "name": "Alpaca statue",
                                        "instances": "11075"
                                    },
                                    {
                                        "name": "Little birds poster",
                                        "instances": "12003"
                                    },
                                    {
                                        "name": "Black Dan Schaub's mask",
                                        "instances": "11321"
                                    },
                                    {
                                        "name": "Premium office chair",
                                        "instances": "8492"
                                    },
                                    {
                                        "name": "Go game",
                                        "instances": "10012"
                                    },
                                    {
                                        "name": "Basic right armchair",
                                        "instances": "13378"
                                    },
                                    {
                                        "name": "Basic left chair",
                                        "instances": "13289"
                                    },
                                    {
                                        "name": "Ben Goertzel's hat",
                                        "instances": "6319"
                                    },
                                    {
                                        "name": "Charles's gnome",
                                        "instances": "11082"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "White shelves",
                                        "instances": "39915"
                                    },
                                    {
                                        "name": "Gold rocket",
                                        "instances": "8455"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "The name's byron poster",
                                        "instances": "8314"
                                    },
                                    {
                                        "name": "Aparna's wine",
                                        "instances": "16436"
                                    },
                                    {
                                        "name": "White desk",
                                        "instances": "20246"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "32"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631279033764
                },
                {
                    "id": "613b5f4e1db81b3382f76527",
                    "unit": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed556e69743435363931",
                    "price": 100000000,
                    "policy": "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed",
                    "metadata": {
                        "name": "CardanoCityUnit45691",
                        "thumbnail": "ipfs://QmTiYALM7Na185hUt3mxeufff1ehm4YaHcK4daB2W3VKF1",
                        "mediaType": "image/png",
                        "files": [
                            {
                                "src": "ipfs://QmTiYALM7Na185hUt3mxeufff1ehm4YaHcK4daB2W3VKF1",
                                "name": "Unit45691",
                                "mediaType": "image/png"
                            }
                        ],
                        "tags": [
                            {
                                "base": "IOHK"
                            },
                            {
                                "value": "174630"
                            },
                            {
                                "poster": "Byron poster"
                            },
                            {
                                "contents": [
                                    {
                                        "name": "Shakuhachi flute",
                                        "instances": "13366"
                                    },
                                    {
                                        "name": "White table",
                                        "instances": "19348"
                                    },
                                    {
                                        "name": "American whiskey",
                                        "instances": "10116"
                                    },
                                    {
                                        "name": "White bookshelf",
                                        "instances": "36281"
                                    },
                                    {
                                        "name": "White bed",
                                        "instances": "39878"
                                    },
                                    {
                                        "name": "Gold rocket",
                                        "instances": "8455"
                                    },
                                    {
                                        "name": "Cardano live sign",
                                        "instances": "21694"
                                    },
                                    {
                                        "name": "Boxes desk",
                                        "instances": "25391"
                                    },
                                    {
                                        "name": "Gold shelves",
                                        "instances": "10085"
                                    }
                                ]
                            },
                            {
                                "description": "CardanoCity"
                            },
                            {
                                "numberOfItems": "11"
                            }
                        ]
                    },
                    "verified": {
                        "verified": true,
                        "project": "CardanoCity"
                    },
                    "paymentSession": null,
                    "sold": false,
                    "dateListed": 1631280974488
                }
            ]
        }
    }

    public getFilterList() {
        return {
            "Charles's samurai" : false,
            "Cardano astronaut" : false,
            "Charles's billion dollar console" : false,
            "Charles's painting" : false,
            "The mighty one poster" : false,
            "Gold unicorn trophy" : false,
            "Black desk" : false,
            "Charles's safe" : false,
            "Cardano wine" : false,
            "Gold coffee table" : false,
            "Charles's yukata" : false,
            "Ben Goertzel's hat" : false,
            "Silver careful massacre mask" : false,
            "Japanese whiskey" : false,
            "Sals ny pizza" : false,
            "Charles's cigars" : false,
            "Charles's fallen angel statue" : false,
            "Charles's AR headset" : false,
            "Infinity gauntlet" : false,
            "Bison statue" : false,
            "Charles's eagle statue" : false,
            "Wen moon stand" : false,
            "Wen shelley poster" : false,
            "Trash can" : false,
            "Basic left armchair" : false,
            "Aparna's armchair" : false,
            "The name's byron poster" : false,
            "Gold Dan Schaub's mask" : false,
            "Premium right armchair" : false,
            "Premium left chair" : false,
            "Gold venetian mask" : false,
            "Charles's PC" : false,
            "Gold rocket" : false,
            "Newton's cradle" : false,
            "Gold floor lamp" : false,
            "Cardano rock pi" : false,
            "Saxophone" : false,
            "Premium right chair" : false,
            "Premium office chair" : false,
            "Pool boss poster" : false,
            "The spark poster" : false,
            "Charles's lambo" : false,
            "Molten tar monster poster" : false,
            "Charles's kachina doll" : false,
            "Vital lick poster" : false,
            "Silver coffee table" : false,
            "Charles's hat" : false,
            "Cigarettes" : false,
            "Go game" : false,
            "Charles's leather jacket" : false,
            "Gold shelves" : false,
            "American whiskey" : false,
            "Gold bed" : false,
            "Premium left armchair" : false,
            "Red ball" : false,
            "Bird statue" : false,
            "Alpaca statue" : false,
            "Charles's gnome" : false,
            "Charles's face mask" : false,
            "Mask statue" : false,
            "Black Dan Schaub's mask" : false,
            "Dan Friedman's telescope" : false,
            "Little birds poster" : false,
            "Black table" : false,
            "Gold hanger" : false,
            "Silver Dan Schaub's mask" : false,
            "Basic left chair" : false,
            "Rocket fuel poster" : false,
            "Silver rocket" : false,
            "Monney girl poster" : false,
            "Bird gossip statue" : false,
            "Charles's tractor" : false,
            "Mega bull poster" : false,
            "Silver floor lamp" : false,
            "Shakuhachi flute" : false,
            "Silver bird mask" : false,
            "Basic right armchair" : false,
            "Basic right chair" : false,
            "Charles's atv" : false,
            "Charles's silver roses" : false,
            "Basic office chair" : false,
            "Hash it out poster" : false,
            "Buzzin poster" : false,
            "Aparna's wine" : false,
            "Boxes coffee table" : false,
            "Silver hanger" : false,
            "White table" : false,
            "White desk" : false,
            "Cardano live sign" : false,
            "Charles's starter pack" : false,
            "Charles's mic" : false,
            "Boxes desk" : false,
            "White bookshelf" : false,
            "White bed" : false,
            "White shelves" : false
        }
    }

    private buildBody(options) {
        return 'search=cardanocity' +
            '&sort=' + options.sort.toLowerCase() +
            '&order=' + options.sortOrder.toLowerCase() +
            '&page=' + options.page +
            '&pricemin=' + (options.priceMin != null && options.priceMin != '' ? options.priceMin : 0) +
            '&pricemax=' + (options.priceMax != null && options.priceMax != '' ? options.priceMax : 999999999999999) +
            '&verified=true'
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
