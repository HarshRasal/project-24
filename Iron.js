class Iron {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      
      var posX=this.body.position.x;
      var posY=this.body.position.y;
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
  