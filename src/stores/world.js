/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { defineStore } from 'pinia';
import {
  geoOrthographic, geoPath, geoMercator, schemeReds, scaleQuantile,
} from 'd3';
// import world from '../assets/data/countries.json';
import world from '../assets/data/custom.geo.json';
import death from '../assets/data/test.json';
// import csv from '../assets/data/cause_of_deaths.csv';
// import pop from '../assets/data/pppppppppopulation.csv';

// console.log('pop', pop);
// const result = {};
// const meta = new Array(32);
// const tempMeta = {};
// let i = 0;
// Object.keys(csv[0]).forEach(key => {
//   if (key === 'Code' || key === 'Year') return;
//   meta[i] = key;
//   tempMeta[key] = i;
//   i++;
// });
// meta.splice(1, 0, 'population', 'sum', 'percent');

// csv.forEach((d, i) => {
//   result[d.Year] = result[d.Year] || {};
//   result[d.Year][d.Code] = result[d.Year][d.Code] || new Array(32);
//   Object.entries(d).forEach(([key, value]) => {
//     if (key === 'Code' || key === 'Year') return;
//     result[d.Year][d.Code][tempMeta[key]] = key === 'Country/Territory' ? value : Number(value);
//   });
// });
// for (let i = 0; i < meta.length; i++) {
//   if (meta[i] === 'Country/Territory') {
//     meta[i] = 'name';
//     break;
//   }
// }
// result.meta = meta;
// // Object.entries(result).forEach(([year, Country]) => {
// //   let total = 0

// //   Object.entries(Country).forEach(([country]) => {

// //   })
// // })
// let all = 0;
// let max = -Infinity;
// let maxPercent = -Infinity;
// for (const year in result) {
//   if (year === 'meta') continue;
//   let total = 0;
//   for (const country in result[year]) {
//     const arr = result[year][country];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof country[i] === 'string') {
//         continue;
//       }
//       sum += arr[i];
//     }
//     if (sum > max) {
//       max = sum;
//     }
//     let p = pop
//       .find(e => e.Year === year && e['ISO3 Alpha-code'] === country)['Total Population, as of 1 January (thousands)']
//       .replaceAll(' ', '');
//     // console.log(p['Total Population, as of 1 January (thousands)']);
//     if (!p) {
//       console.log(year, country);
//     } else {
//       p = Number(p) * 1000;
//     }
//     const percent = sum / p;
//     if (percent > maxPercent) {
//       maxPercent = percent;
//     }
//     arr.splice(1, 0, p, sum, percent);
//     total += sum;
//   }
//   result[year].sum = total;
//   all += total;
// }
// result.sum = all;
// result.max = max;
// result.maxPercent = maxPercent;

// console.log('result', result);

// const blob = new Blob([JSON.stringify(result)], { type: 'application/json' });
// const url = URL.createObjectURL(blob);
// const a = document.createElement('a');
// a.download = 'test.json';
// a.href = url;
// a.click();

const projection = {
  '3D': width => geoOrthographic()
    .rotate([-15, -40])
    .fitSize([width, width], world)
    .translate([width / 2, width / 2]),
  '2D': width => geoMercator()
    .fitWidth(width, world)
    .translate([width / 2, width / 2]),
};

export default defineStore('world', {
  state: () => ({
    type: '3D',
    year: 1990,
    width: 0,
    height: 0,
    pathGenerator: null,
    countries: null,
    data: death[1990],
    projection: null,
    colorScale: scaleQuantile(schemeReds[9]).domain([0, death.maxPercent]),
    meta: death.meta,
    click: null,
  }),

  actions: {
    setType(type) {
      if (this.type === type) {
        return;
      }
      this.type = type;
      this.updateHeight();
      this.projection = projection[this.type](this.width);
      this.pathGenerator = geoPath(this.projection);
    },
    updateHeight() {
      if (this.type === '3D') {
        this.height = this.width;
      } else if (this.type === '2D') {
        this.height = this.width / 1.35;
      }
    },
    init(width) {
      this.width = width;
      this.updateHeight();
      this.projection = projection[this.type](this.width);
      this.pathGenerator = geoPath(this.projection);
      this.countries = world.features;
    },
    setYear(year) {
      this.year = year;
      this.data = death[this.year];
    },
    newPathGenerator() {
      this.pathGenerator = geoPath(this.projection);
    },
    setClick(code) {
      this.click = code;
    },
  },
});
