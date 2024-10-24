import { Object } from './Object.js';
export class ObjectDyn extends Object{
    constructor(x, y, width, height, color){
        super  (x, y, width, height, color); 

        this._isGoLeft = false;
        this._isGoRight = false;
        this._isGoUp = false;
        this._isGoDown = false;
        this._isGoBothWay = false;

        this._ySpeed  = 5;
        this._xSpeed  = 5;

    }
    update(){
        if (this._isGoRight && this._isGoLeft) {} 
            else if (this._isGoRight){this._x += this._xSpeed;} 
            else if (this._isGoLeft) {this._x -= this._xSpeed;}

        if (this._isGoUp && this._isGoDown)    {}
            else if (this._isGoUp)   {this._y -= this._ySpeed;}   
            else if (this._isGoDown) {this._y += this._ySpeed;}
    }
    
    set isGoRight(newIsGoRight) {
        this._isGoRight = newIsGoRight;
    }
}
