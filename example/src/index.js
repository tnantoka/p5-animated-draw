import p5 from 'p5';
import Animated from 'p5-animated-draw';

new p5(sketch => {
  const animated = new Animated(sketch);

  sketch.setup = () => {
    sketch.createCanvas(300, 300);

    sketch.strokeWeight(3);

    const { width, height } = sketch;
    animated.addCircle({ x: width * 0.5, y: height * 0.5 }, width * 0.8, sketch.color('red'));
    animated.addLine({ x: width * 0.1, y: height * 0.1 }, { x: width * 0.9, y: height * 0.1 }, sketch.color('green'));
    animated.addLine({ x: width * 0.9, y: height * 0.1 }, { x: width * 0.9, y: height * 0.9 }, sketch.color('green'));
    animated.addLine({ x: width * 0.9, y: height * 0.9 }, { x: width * 0.1, y: height * 0.9 }, sketch.color('blue'));
    animated.addLine({ x: width * 0.1, y: height * 0.9 }, { x: width * 0.1, y: height * 0.1 }, sketch.color('blue'));
  };

  sketch.draw = () => {
    sketch.clear();
    animated.draw();
  };
});
