import { defineStore } from 'pinia';

import data from '../assets/data/cause_of_deaths.csv';

export default defineStore('death', () => {
    const getDataByYear = (year) => {
        return data.filter(e => e.Year == year)
    }
    return {
        getDataByYear
    };
});
