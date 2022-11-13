import { defineStore } from 'pinia';

import data from '../assets/data/cause_of_deaths.csv';
import meta from '../assets/data/meta_countries.csv'

export default defineStore('death', () => {
    console.log(meta);
    const getDataByYear = (year) => {
        return data.filter(e => e.Year == year)
    }
    return {
        getDataByYear
    };
});
