class Stone {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction':0.9,
        'restitution':10
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
     
      var angle = this.body.angle;
  
      push();
      translate(posX, posY);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  