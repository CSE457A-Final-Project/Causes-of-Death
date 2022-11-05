import { defineStore } from 'pinia';
import { geoOrthographic, geoPath, geoMercator } from 'd3';
// import world from '../assets/data/countries.json';
import world from '../assets/data/custom.geo.json';

export default defineStore('world', () => {
  const projection = {
    '3d': (width, height) => geoOrthographic()
      .rotate([-15, -40])
      .fitSize([width, height], world)
      .translate([width / 2, height / 2]),
    '2d': (width, height) => geoMercator()
      .fitWidth(width, world)
      .translate([width / 2, height / 2]),
  };

  const getPathGenerator = (type, width, height) => new Promise(resolve => {
    const pathGenerator = geoPath();
    resolve(pathGenerator.projection(projection[type](width, height)));
  });

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return {
    getRandomColor,
    getPathGenerator,
    world: world.features,
  };
});
