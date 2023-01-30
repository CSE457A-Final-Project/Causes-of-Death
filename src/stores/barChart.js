import { defineStore } from 'pinia';
import { scaleBand, scaleSqrt, max } from 'd3';
import causes from '../assets/data/reasons.json';

let maxCount = 0;

const setMaxCount = data => maxCount = max(data, d => d[0]);

export default defineStore('barChart', {
  state: () => {
    const year = 1990;
    const base = 50;
    const data = causes[year];

    const domain = Object.keys(data);

    const y = scaleBand()
      .domain(domain)
      .range([0, domain.length * base])
      .padding([0.2]);

    return {
      year,
      base,
      y,
      x: null,
      data: Object.values(data),
      order: 'unordered',
    };
  },

  actions: {
    setXScale(width) {
      this.x = scaleSqrt()
        .domain([0, setMaxCount(this.data)])
        .range([0, width - 220]);
    },
    setYear(year) {
      this.year = year;
      this.orderData();
      this.x.domain([0, setMaxCount(this.data)]);
    },
    getCausesCount() {
      return Object.keys(causes[this.year]).length;
    },
    scaleColor(count) {
      const low = maxCount / 4;
      const middle = low * 2;
      const high = low * 3;

      if (count < low) {
        return '#99D594';
      }
      if (count < middle) {
        return '#FEE08B';
      }
      if (count < high) {
        return '#FC8D59';
      }
      return '#D53E4F';
    },
    orderData() {
      const data = Object.values(causes[this.year]);
      if (this.order === 'descending') {
        data.sort((a, b) => b[0] - a[0]);
      } else if (this.order === 'ascending') {
        data.sort((a, b) => a[0] - b[0]);
      }
      this.y.domain(data.map(d => d[1]));
      this.data = data;
    },
  },
});
