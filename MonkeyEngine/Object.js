export class Object {
    constructor(x, y, width, height, color) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
    }
    
    render(ctx) {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._x, this._y, this._width, this._height);
    }
    /*--------------------------------Getters-------------------------------*/
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get color() {
        return this._color;
    }

    /*--------------------------------Setters-------------------------------*/
    set x(newX) {
        this._x = newX;
    }

    set y(newY) {
        this._y = newY;
    }

    set width(newWidth) {
        this._width = newWidth;
    }

    set height(newHeight) {
        this._height = newHeight;
    }

    set color(newColor) {
        this._color = newColor;
    }
}
