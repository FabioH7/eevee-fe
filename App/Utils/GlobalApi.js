
import axios from 'axios'
const BASE_URL="https://places.googleapis.com/v1/places:searchNearby";
const API_KEY="Your Google Place API Key";
const CLERK_API_KEY='Your Clerk APK Key';
const FIREBASE_API="Your Firebase API Key"
const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key':API_KEY,
        'X-Goog-FieldMask':[
    'places.displayName',
    'places.formattedAddress',
    'places.location',
    'places.evChargeOptions',
    'places.shortFormattedAddress',
    'places.photos','places.id']
    }
}

const places = [
    {
        "id": 16,
        "url": "https://media.istockphoto.com/id/1470356035/photo/electric-car-battery-charging-station-on-a-city-street-a-modern-gas-station-with-electricity.jpg?s=612x612&w=0&k=20&c=qqkRp4bEx7N_y7EGacBm4jk3y-BGHbFtRvYjHfowtmw=",
        "code": 16,
        "address": "Albania, St.1",        
        "name": "EV Charging Station 1",
        "city": "Tirana",
        "country": "Albania",
        "latitude": 41.3275,
        "longitude": 19.8187,
        "evChargeOptions": [
            {
                "level": "Level 1 Charging",
                "power": "Varies"
            },
            {
                "level": "Level 2 Charging",
                "power": "7 kW"
            },
            {
                "level": "DC Fast Charging (DCFC)",
                "power": "50 kW"
            },
            {
                "level": "Tesla Superchargers",
                "power": "120 kW"
            },
            {
                "level": "Solar Charging",
                "power": "Varies"
            }
        ],
        "totalChargers": "4",
        "occupiedChargers": "2",
        "randomOption": "DC Fast Charging (DCFC)",
        "group_id": "1"
    },
    {
        "id": 17,
        "url": "https://media.istockphoto.com/id/1346690802/photo/electric-car-power-station.jpg?s=612x612&w=0&k=20&c=kO_a0cJUvfuZxHat03Nt2vOwPaVeWdmjvw_U4979NyM=",
        "code": 17,
        "address": "Albania, St.2",
        "name": "EV Charging Station 2",
        "city": "Tirana",
        "country": "Albania",
        "latitude": 41.3268,
        "longitude": 19.8168,
        "evChargeOptions": [
            {
                "level": "Level 1 Charging",
                "power": "Varies"
            },
            {
                "level": "Level 2 Charging",
                "power": "7 kW"
            },
            {
                "level": "DC Fast Charging (DCFC)",
                "power": "50 kW"
            },
            {
                "level": "Tesla Superchargers",
                "power": "120 kW"
            },
            {
                "level": "Wireless Charging",
                "power": "Varies"
            }
        ],
        "totalChargers": "4",
        "occupiedChargers": "2",
        "randomOption": "Wireless Charging",
        "group_id": "1"
    },
    {
        "id": 18,
        "url": "https://media.istockphoto.com/id/1153573157/photo/electric-vehicle-charging-station-ev.jpg?s=612x612&w=0&k=20&c=gxA6AlTeUxgYY7AR9PEEv82DRsgIyBAchGJA5CMpy5k=",
        "code": 18,
        "address": "Albania, St.3",
        "name": "EV Charging Station 3",
        "city": "Tirana",
        "country": "Albania",
        "latitude": 41.3279,
        "longitude": 19.8186,
        "evChargeOptions": [
            {
                "level": "Level 1 Charging",
                "power": "Varies"
            },
            {
                "level": "Level 2 Charging",
                "power": "7 kW"
            },
            {
                "level": "DC Fast Charging (DCFC)",
                "power": "50 kW"
            },
            {
                "level": "Tesla Superchargers",
                "power": "120 kW"
            },
            {
                "level": "Solar Charging",
                "power": "Varies"
            }
        ],
        "totalChargers": "4",
        "occupiedChargers": "2",
        "randomOption": "Solar Charging",
        "group_id": "1"
    },
    {
        "id": 19,
        "url": "https://media.istockphoto.com/id/1330924745/photo/charge-station-for-electric-cars-electric-cars-at-charging-station-3d-rendering.jpg?s=612x612&w=0&k=20&c=_Hxj2YVrpZ2XPjseoAeqJp_POWM7Dyui1r7Ku5Hklvs=",
        "code": 19,
        "address": "Albania, St.4",
        "name": "EV Charging Station 4",
        "city": "Tirana",
        "country": "Albania",
        "latitude": 41.3261,
        "longitude": 19.8194,
        "evChargeOptions": [
            {
                "level": "Level 1 Charging",
                "power": "Varies"
            },
            {
                "level": "Level 2 Charging",
                "power": "7 kW"
            },
            {
                "level": "DC Fast Charging (DCFC)",
                "power": "50 kW"
            },
            {
                "level": "Tesla Superchargers",
                "power": "120 kW"
            },
            {
                "level": "Wireless Charging",
                "power": "Varies"
            }
        ],
        "totalChargers": "4",
        "occupiedChargers": "2",
        "randomOption": "Tesla Superchargers",
        "group_id": "1"
    },
    {
        "id": 20,
        "url": "https://media.istockphoto.com/id/1153573157/photo/electric-vehicle-charging-station-ev.jpg?s=612x612&w=0&k=20&c=gxA6AlTeUxgYY7AR9PEEv82DRsgIyBAchGJA5CMpy5k=",
        "code": 20,
        "address": "Albania, St.5",
        "name": "EV Charging Station 5",
        "city": "Tirana",
        "country": "Albania",
        "latitude": 41.3268,
        "longitude": 19.8168,
        "evChargeOptions": [
            {
                "level": "Level 1 Charging",
                "power": "Varies"
            },
            {
                "level": "Level 2 Charging",
                "power": "7 kW"
            },
            {
                "level": "DC Fast Charging (DCFC)",
                "power": "50 kW"
            },
            {
                "level": "Solar Charging",
                "power": "Varies"
            },
            {
                "level": "Wireless Charging",
                "power": "Varies"
            }
        ],
        "totalChargers": "4",
        "occupiedChargers": "2",
        "randomOption": "Wireless Charging",
        "group_id": "1"
    },
        {
            "id": 1,
            "url": "https://media.istockphoto.com/id/1470356035/photo/electric-car-battery-charging-station-on-a-city-street-a-modern-gas-station-with-electricity.jpg?s=612x612&w=0&k=20&c=qqkRp4bEx7N_y7EGacBm4jk3y-BGHbFtRvYjHfowtmw=",
            "code": 1,
            "name": "EV Charging Station 1",
            "address": "Albania, St.35",
            "city": "Fier",
            "country": "Albania",
            "latitude": 40.720173084279566,
            "longitude": 19.553442995181364,
            "evChargeOptions": [
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "10",
            "occupiedChargers": "5",
            "randomOption": "DC Fast Charging (DCFC)",
            "group_id": "3"
        },
        {
            "id": 2,
            "url": "https://media.istockphoto.com/id/1346690802/photo/electric-car-power-station.jpg?s=612x612&w=0&k=20&c=kO_a0cJUvfuZxHat03Nt2vOwPaVeWdmjvw_U4979NyM=",
            "code": 2,
            "name": "EV Charging Station 2",
            "address": "Albania, St.39",
            "city": "Vlora",
            "country": "Albania",
            "latitude": 40.48763268869591,
            "longitude": 19.47755741092051,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "10",
            "occupiedChargers": "5",
            "randomOption": "Tesla Superchargers",
            "group_id": "3",
        },
        {
            "id": 3,
            "url": "https://media.istockphoto.com/id/1153573157/photo/electric-vehicle-charging-station-ev.jpg?s=612x612&w=0&k=20&c=gxA6AlTeUxgYY7AR9PEEv82DRsgIyBAchGJA5CMpy5k=",
            "code": 3,
            "name": "Durres Charging Station",
            "address": "Albania, St.35",
            "city": "Durres",
            "country": "Albania",
            "latitude": 41.287745326136836,
            "longitude": 19.51287676905776,
            "evChargeOptions": [
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "7",
            "occupiedChargers": "3",
            "randomOption": "Tesla Superchargers",
            "group_id": "2"
        },
        {
            "id": 4,
            "url": "https://media.istockphoto.com/id/1330924745/photo/charge-station-for-electric-cars-electric-cars-at-charging-station-3d-rendering.jpg?s=612x612&w=0&k=20&c=_Hxj2YVrpZ2XPjseoAeqJp_POWM7Dyui1r7Ku5Hklvs=",
            "code": 4,
            "name": "Durres Charging Station",
            "address": "Albania, St.98",
            "city": "Berat",
            "country": "Albania",
            "latitude": 40.723579075345526,
            "longitude": 19.9434890347776,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "5",
            "occupiedChargers": "2",
            "randomOption": "Level 1 Charging",
            "group_id": "3"
        },
        {
            "id": 5,
            "url": "https://media.istockphoto.com/id/1153573157/photo/electric-vehicle-charging-station-ev.jpg?s=612x612&w=0&k=20&c=gxA6AlTeUxgYY7AR9PEEv82DRsgIyBAchGJA5CMpy5k=",
            "code": 5,
            "name": "Durres Charging Station",
            "address": "Albania, St.39",
            "city": "Kukes",
            "country": "Albania",
            "latitude": 42.066412308076586,
            "longitude": 20.46225916662092,
            "evChargeOptions": [
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "10",
            "occupiedChargers": "5",
            "randomOption": "Wireless Charging",
            "group_id": "3"
        },
        {
            "id": 6,
            "url": "https://media.istockphoto.com/id/1366654789/photo/pamplona-navarra-spain-january-13-2022-electric-car-charging-next-to-charging-station.jpg?s=612x612&w=0&k=20&c=F9LXepJJPe-6njSst5p5KNcw7tNIghojdXHQDdTGa0U=",
            "code": 6,
            "address": "Albania, St.8",
            "name": "Durres Charging Station",
            "city": "Vlora",
            "country": "Albania",
            "latitude": 40.47679563324256,
            "longitude": 19.49918674333823,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "10",
            "occupiedChargers": "8",
            "randomOption": "DC Fast Charging (DCFC)",
            "group_id": "3"
        },
        {
            "id": 7,
            "url": "https://media.istockphoto.com/id/1839487478/photo/charging-station.jpg?s=612x612&w=0&k=20&c=1oqDPoMv908paVKd__YBjECGSC1boJ2liPmE9jHb_CI=",
            "code": 7,
            "address": "Albania, St.3",
            "name": "Durres Charging Station",
            "city": "Elbasan",
            "country": "Albania",
            "latitude": 41.1082275615439,
            "longitude": 20.071449240152702,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "6",
            "occupiedChargers": "3",
            "randomOption": "Level 2 Charging",
            "group_id": "3"
        },
        {
            "id": 8,
            "url": "https://media.istockphoto.com/id/1839487478/photo/charging-station.jpg?s=612x612&w=0&k=20&c=1oqDPoMv908paVKd__YBjECGSC1boJ2liPmE9jHb_CI=",
            "code": 8,
            "address": "Albania, St.98",
            "name": "Durres Charging Station",
            "city": "Korce",
            "country": "Albania",
            "latitude": 40.621774243423964,
            "longitude": 20.76971756644816,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                }
            ],
            "totalChargers": "8",
            "occupiedChargers": "4",
            "randomOption": "Solar Charging",
            "group_id": "3"
        },
        {
            "id": 9,
            "url": "https://media.istockphoto.com/id/1000877980/photo/electric-car-in-charging-station-new-technology-new-innovation-future-energy.jpg?s=612x612&w=0&k=20&c=l7mdsdLGRd9qWDRXZkP-eGsHyHc3lRTPQkUzwUCx3Ds=",
            "code": 9,
            "name": "Durres Charging Station",
            "address": "Albania, St.98",
            "city": "Durres",
            "country": "Albania",
            "latitude": 41.32146677620085,
            "longitude": 19.46961810422231,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                }
            ],
            "totalChargers": "10",
            "occupiedChargers": "5",
            "randomOption": "Level 2 Charging",
            "group_id": "3"
        },
        {
            "id": 10,
            "url": "https://media.istockphoto.com/id/962134794/photo/electric-charging-station-in-estonia.jpg?s=612x612&w=0&k=20&c=fxGfSD5IqhX5EFhDNVVo8Eb_vgEqbWj_hZruTtn1eEc=",
            "code": 10,
            "address": "Albania, St.98",
            "name": "Durres Charging Station",
            "city": "Tirana",
            "country": "Albania",
            "latitude": 41.361142087336944,
            "longitude": 19.720318823683797,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "4",
            "occupiedChargers": "0",
            "randomOption": "Level 1 Charging",
            "group_id": "3"
        },
        {
            "id": 11,
            "url": "https://media.istockphoto.com/id/1256581498/photo/electric-car-charging-station-hybrid-car-electric-charger-station-in-the-car-park-electric.jpg?s=612x612&w=0&k=20&c=pIpAVYyCUrCqCPsRY-eq3F2BC0ZAuWr6CjfxTSSU_64=",
            "code": 11,
            "address": "Albania, St.98",
            "name": "Durres Charging Station",
            "city": "Korce",
            "country": "Albania",
            "latitude": 40.8868777211484,
            "longitude": 20.677638402239072,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "6",
            "occupiedChargers": "3",
            "randomOption": "Tesla Superchargers",
            "group_id": "3"
        },
        {
            "id": 12,
            "url": "https://media.istockphoto.com/id/925110782/photo/electric-vehicle-charging-pile.jpg?s=612x612&w=0&k=20&c=dWOFMNBGXcTm1auFgmV-V0013mzx5bJEtMDXqgx66yI=",
            "code": 12,
            "address": "Albania, St.4",
            "name": "Durres Charging Station",
            "city": "Tirana",
            "country": "Albania",
            "latitude": 41.338680332569275,
            "longitude": 19.78615095849523,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "8",
            "occupiedChargers": "6",
            "randomOption": "Wireless Charging",
            "group_id": "1"
        },
        {
            "id": 13,
            "url": "https://media.istockphoto.com/id/659958690/photo/electric-vehicle-charging-pile.jpg?s=612x612&w=0&k=20&c=i9W1PWt4tks6JyUueO5fUcqZqo0aHxOyq3TPMypf5qA=",
            "code": 13,
            "address": "Albania, St.35",
            "name": "Durres Charging Station",
            "city": "Kukes",
            "country": "Albania",
            "latitude": 42.15122797042674,
            "longitude": 20.53916346001261,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "10",
            "occupiedChargers": "5",
            "randomOption": "Solar Charging",
            "group_id": "3"
        },
        {
            "id": 14,
            "url": "https://media.istockphoto.com/id/912838122/photo/electric-vehicle-charging-station.jpg?s=612x612&w=0&k=20&c=4zbW9_1B2QpVCcOUmFnkCVtgm7fWJoeevbThnEMmGzY=",
            "code": 14,
            "address": "Albania, St.378",
            "name": "Durres Charging Station",
            "city": "Durres",
            "country": "Albania",
            "latitude": 41.33400287257008,
            "longitude": 19.47900223324594,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Solar Charging",
                    "power": "Varies"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                }
            ],
            "totalChargers": "10",
            "occupiedChargers": "2",
            "randomOption": "Tesla Superchargers",
            "group_id": "2"
        },
        {
            "id": 15,
            "url": "https://media.istockphoto.com/id/1060580382/photo/electro-car-charging-station.jpg?s=2048x2048&w=is&k=20&c=bEt8lfnCrAOrpMJFK1p6W2uqXHq9dyU2mxZB3MHYFqU=",
            "code": 15,
            "address": "Albania, St.8",
            "name": "Durres Charging Station",
            "city": "Vlora",
            "country": "Albania",
            "latitude": 40.45576936891378,
            "longitude": 19.486655463445423,
            "evChargeOptions": [
                {
                    "level": "Level 1 Charging",
                    "power": "Varies"
                },
                {
                    "level": "Level 2 Charging",
                    "power": "7 kW"
                },
                {
                    "level": "DC Fast Charging (DCFC)",
                    "power": "50 kW"
                },
                {
                    "level": "Tesla Superchargers",
                    "power": "120 kW"
                },
                {
                    "level": "Wireless Charging",
                    "power": "Varies"
                }
            ],
            "totalChargers": "3",
            "occupiedChargers": "1",
            "randomOption": "Level 2 Charging",
            "group_id": "3"
        },
    ]

const users = [
    {
        "id": 1,
        "fullName": "John Doe",
        "email": "johndoe@gmail.com",
        "password": "123456",
        "group_id": "1"
    },
    {
        "id": 2,
        "fullName": "Jane Doe",
        "email": "janedoe@gmail.com",
        "password": "123456",
        "group_id": "2"
    }
]

const groups = [
    {
        'name': 'Tirana Ev Charging',
        'id': '1'
    },
    {
        'name': 'Durres Ev Charging',
        'id': '2'
    }
]


const NewNearByPlace= (data) => places.filter((item)=> item.city.includes(data) || item.address.includes(data) || item.name.includes(data));

export default{
    NewNearByPlace,
    API_KEY,
    CLERK_API_KEY,
    FIREBASE_API
}
