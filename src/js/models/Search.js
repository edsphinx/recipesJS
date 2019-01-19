import axios from 'axios';
import { key, proxy, api } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}${api}search?key=${key}&q=${this.query}`); 
            this.result = res.data.recipes;
            // console.log(this.result);
        }catch (err){
            alert(err);
        }
        
    }
}