import MomentumChart from '../../index.js';
import * as d3 from "d3";
import { profit2010to2018, profit2010to2018Lv2 } from '../../exampleData';

const example = () => {
  let board = new MomentumChart.Board('#app', {
    attr: {
      width: '1000',
      height: '400',
      viewBox: "0 0 1000 400"
    }
  });

  // board.data(profit2010to2018);
  let line2 = board.line('', {
    generator: {
      x: function (d, i) {
        return 10 + i * 30;
      },
      y: function (d) {
        return 300 - d.profit;
      }
    },
    modify: {
      attr: {
        stroke: 'red',
        'stroke-width': 2
      }
    }
  });

  line2.render(profit2010to2018);

  profit2010to2018Lv2.push({ year: 2019, profit: 210 });

  board.transition({
    delay: 1000,
    duration: 3000,
    ease: d3.easeCubicOut
  }, profit2010to2018Lv2);

};

export default example;
