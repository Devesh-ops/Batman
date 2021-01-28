class drops {
    constructor(x,y){
        var options = {
            restitution : 0.6,
            density : 1,
            friction : 0.08
        }
        this.Drop = Bodies.circle(x,y,6,options)
        World.add(world,this.Drop)
    }

    display (){
        fill('blue')
        ellipseMode(CENTER);
        ellipse(this.Drop.position.x,this.Drop.position.y,5.5,6.5)
    }


}