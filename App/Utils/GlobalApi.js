
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
        "code": 1,
        'name':'EV Charging Station 1',
        "address": "Albania,St.35",
        "city": "Fier",
        "country": "Albania",
        "latitude": 40.720173084279566,
        "longitude": 19.553442995181364
    },
    {
        "id": 2,
        "code": 2,
        'name':'EV Charging Station 2',
        "address": "Albania,St.39",
        "city": "Vlora",
        "country": "Albania",
        "latitude": 40.48763268869591,
        "longitude": 19.47755741092051
    },
    {
        "id": 3,
        "code": 3,
        'name':'Durres Charging Station',
        "address": "Albania,St.35",
        "city": "Durres",
        "country": "Albania",
        "latitude": 41.287745326136836,
        "longitude": 19.51287676905776
    },
    {
        "id": 4,
        "code": 4,
        "address": "Albania,St98",
        'name':'Durres Charging Station',
        "city": "Berat",
        "country": "Albania",
        "latitude": 40.723579075345526,
        "longitude": 19.9434890347776
    },
    {
        "id": 5,
        "code": 5,
        'name':'Durres Charging Station',
        "address": "Albania,St.39",
        "city": "Kukes",
        "country": "Albania",
        "latitude": 42.066412308076586,
        "longitude": 20.46225916662092
    },
    {
        "id": 6,
        "code": 6,
        "address": "Albania,St.8",
        'name':'Durres Charging Station',
        "city": "Vlora",
        "country": "Albania",
        "latitude": 40.47679563324256,
        "longitude": 19.49918674333823
    },
    {
        "id": 7,
        "code": 7,
        "address": "Albania,St.3",
        'name':'Durres Charging Station',
        "city": "Elbasan",
        "country": "Albania",
        "latitude": 41.1082275615439,
        "longitude": 20.071449240152702
    },
    {
        "id": 8,
        "code": 8,
        "address": "Albania,St98",
        'name':'Durres Charging Station',
        "city": "Korce",
        "country": "Albania",
        "latitude": 40.621774243423964,
        "longitude": 20.76971756644816
    },
    {
        "id": 9,
        "code": 9,
        'name':'Durres Charging Station',
        "address": "Albania,St98",
        "city": "Durres",
        "country": "Albania",
        "latitude": 41.32146677620085,
        "longitude": 19.46961810422231
    },
    {
        "id": 10,
        "code": 10,
        "address": "Albania,St98",
        'name':'Durres Charging Station',
        "city": "Tirana",
        "country": "Albania",
        "latitude": 41.361142087336944,
        "longitude": 19.720318823683797
    },
    {
        "id": 11,
        "code": 11,
        "address": "Albania,St98",
        'name':'Durres Charging Station',
        "city": "Korce",
        "country": "Albania",
        "latitude": 40.8868777211484,
        "longitude": 20.677638402239072
    },
    {
        "id": 12,
        "code": 12,
        "address": "Albania,St.4",
        'name':'Durres Charging Station',
        "city": "Tirana",
        "country": "Albania",
        "latitude": 41.338680332569275,
        "longitude": 19.78615095849523
    },
    {
        "id": 13,
        "code": 13,
        "address": "Albania,St.35",
        'name':'Durres Charging Station',
        "city": "Kukes",
        "country": "Albania",
        "latitude": 42.15122797042674,
        "longitude": 20.53916346001261
    },
    {
        "id": 14,
        "code": 14,
        "address": "Albania,St.378",
        'name':'Durres Charging Station',
        "city": "Durres",
        "country": "Albania",
        "latitude": 41.33400287257008,
        "longitude": 19.47900223324594
    },
    {
        "id": 15,
        "code": 15,
        "address": "Albania,St.8",
        'name':'Durres Charging Station',
        "city": "Vlora",
        "country": "Albania",
        "latitude": 40.45576936891378,
        "longitude": 19.486655463445423
    }
]


const NewNearByPlace=(data)=> places.filter((item)=>item.city.includes(data));

export default{
    NewNearByPlace,
    API_KEY,
    CLERK_API_KEY,
    FIREBASE_API
}
