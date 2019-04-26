# p5-animated-draw

![](example.gif)

## Usage

```
# package.json
{
  "dependencies": {
    "p5": "^0.8.0",
    "p5-animated-draw": "tnantoka/p5-animated-draw"
  }
}
```

```
$ npm install
```

```
import p5 from 'p5';
import Animated from 'p5-animated-draw';

new p5(sketch => {
  const animated = new Animated(sketch);

  sketch.setup = () => {
    sketch.createCanvas(300, 300);

    const { width, height } = sketch;
    animated.addCircle(
      { x: width * 0.5, y: height * 0.5 },
      width * 0.8,
      sketch.color('red')
    );
  };

  sketch.draw = () => {
    sketch.clear();
    animated.draw();
  };
});

```
