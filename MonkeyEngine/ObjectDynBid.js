import { ObjectDyn } from './ObjectDyn.js';
export class ObjectDynBid extends ObjectDyn{
    constructor(x, y, width, height, color){
        super  (x, y, width, height, color);

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);
        
        window.addEventListener('keydown', this.handleKeyPress);
        window.addEventListener('keyup'  , this.handleKeyRelease);
    }
    handleKeyPress (event) {
        if (event.key === 'd') { this._isGoRight = true; }
        if (event.key === 'a') { this._isGoLeft  = true; }
        if (event.key === 'w') { this._isGoUp    = true; }
        if (event.key === 's') { this._isGoDown =  true; }
    }
    handleKeyRelease(event) {
        if (event.key === 'd') {
            this._isGoRight = false;
        }
        if (event.key === 'a') {
            this._isGoLeft = false;
        }
        if (event.key === 'w') {
            this._isGoUp = false;
        }
        if (event.key === 's') {
            this._isGoDown = false;
        }
    }
}