
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
            "id": 1,
            "url": "https://media.istockphoto.com/id/1470356035/photo/electric-car-battery-charging-station-on-a-city-street-a-modern-gas-station-with-electricity.jpg?s=612x612&w=0&k=20&c=qqkRp4bEx7N_y7EGacBm4jk3y-BGHbFtRvYjHfowtmw=",
            "code": 1,
            "name": "Fier Charging Station",
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
            "group_id": "3",
            "lowest_price": "0.6$",
            "lowest_price_time": "Noon"
        },
        {
            "id": 2,
            "url": "https://media.istockphoto.com/id/1346690802/photo/electric-car-power-station.jpg?s=612x612&w=0&k=20&c=kO_a0cJUvfuZxHat03Nt2vOwPaVeWdmjvw_U4979NyM=",
            "code": 2,
            "name": "Vlora Charging Station",
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
            "lowest_price": "0.4$",
            "lowest_price_time": "Morning"
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
            "group_id": "2",
            "lowest_price": "0.7$",
            "lowest_price_time": "Evening"
        },
        {
            "id": 4,
            "url": "https://media.istockphoto.com/id/1330924745/photo/charge-station-for-electric-cars-electric-cars-at-charging-station-3d-rendering.jpg?s=612x612&w=0&k=20&c=_Hxj2YVrpZ2XPjseoAeqJp_POWM7Dyui1r7Ku5Hklvs=",
            "code": 4,
            "name": "Berat Charging Station",
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
            "group_id": "3",
            "lowest_price": "0.5$",
            "lowest_price_time": "Noon"
        },
        {
            "id": 12,
            "url": "https://media.istockphoto.com/id/925110782/photo/electric-vehicle-charging-pile.jpg?s=612x612&w=0&k=20&c=dWOFMNBGXcTm1auFgmV-V0013mzx5bJEtMDXqgx66yI=",
            "code": 12,
            "address": "Albania, St.4",
            "name": "Tirana Charging Station",
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
            "group_id": "1",
            "lowest_price": "0.5$",
            "lowest_price_time": "Morning"
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


const NewNearByPlace= (data) => places.filter((item)=> item.city.includes(data));

export default{
    NewNearByPlace,
    API_KEY,
    CLERK_API_KEY,
    FIREBASE_API
}
