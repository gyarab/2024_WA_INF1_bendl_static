import { Object } from './Object.js';
import { ObjectDyn } from './ObjectDyn.js';
import { ObjectDynBid } from './ObjectDynBid.js';

const canvas = document.getElementById('herniRozhraní');
const ctx = canvas.getContext('2d');

const o = new Object(50, 50, 50, 50, 'black');
const d = new ObjectDyn(50, 200, 50, 50, 'red');
const b = new ObjectDynBid(50, 350, 50, 50, 'blue');

window.addEventListener('keydown', down);
window.addEventListener('keyup'  , up);

function down(event){
    downForObject(event.key);
    downForObjectDyn(event.key);
}
function up(event){
    upForObject(event.key);
    upForObjectDyn(event.key);
}

/*------------------------------------------Object--------------------------------------*/
const ObjectKey = 'o';
function downForObject (key){
    if (key == ObjectKey){
        o.render(ctx);        
    }
}
function upForObject (key){
    if (key == ObjectKey){
        ctx.clearRect(0,0,canvas.width, canvas.height)
    }
}




/*----------------------------------------ObjectDyn-------------------------------------*/
const ObjectDynKey = 'd';
function downForObjectDyn (key){
    if (key == ObjectDynKey){
        d.isGoRight = true; 
        d.update();
        ctx.clearRect(0,0,canvas.width, canvas.height)
        d.render(ctx); 
        requestAnimationFrame(downForObjectDyn)
    }         
}
setInterval(downForObjectDyn, 1)
    
function upForObjectDyn (key){
    if (key == ObjectDynKey){
        d.isGoRight = false;
        cancelAnimationFrame(animationId)
        d.render(ctx);
    }
    
}

// function updateAll() {
//     o.render(ctx);
//     d.update();
//     d.render(ctx);
// }

// window.setInterval(updateAll, 1 , true);
