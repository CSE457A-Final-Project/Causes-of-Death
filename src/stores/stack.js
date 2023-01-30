import { defineStore } from 'pinia';
import {
  stack as Stack,
  stackOrderAscending,
  scaleLinear,
} from 'd3';
import causes from '../assets/data/test.json';

const keys = [];

for (let i = 4; i < causes.meta.length; i++) {
  keys.push(i);
}

const stack = Stack()
  .keys(keys)
  .value((d, key) => d[key] / d[2])
  .order(stackOrderAscending);

const getCountries = year => Object
  .entries(causes[year])
  .filter(data => data[0] !== 'sum');

export default defineStore('stack', {
  state: () => {
    const year = 1990;
    const data = getCountries(year);
    const base = 100;

    return {
      year,
      data,
      meta: causes.meta,
      base,
      x: null,
      search: '',
    };
  },

  actions: {
    setXScale(width) {
      this.x = scaleLinear()
        .domain([0, 1])
        .range([0, width]);
    },
    setYear(year) {
      this.year = year;
      this.updateData();
    },
    updateData() {
      this.containers = [];
      const regexp = new RegExp(this.search, 'i');
      this.data = Object
        .entries(causes[this.year])
        .filter(d => d[0] !== 'sum' && regexp.test(d[1][0]));
    },
    getStackedData(data) {
      return stack([data]);
    },
    scaleColor(percent) {
      if (percent < 0.1) {
        return '#99D594';
      }
      if (percent < 0.2) {
        return '#FEE08B';
      }
      if (percent < 0.3) {
        return '#FC8D59';
      }
      return '#D53E4F';
    },
  },
});
