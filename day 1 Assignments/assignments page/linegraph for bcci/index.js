var canvas=document.querySelector('canvas');
canvas.width=1000;
canvas.height=600;
var xGrid=10;
var yGrid=10; 
var pop=0;
var yplot=56;

var ctx=canvas.getContext('2d');


function drawGrids()
{

 ctx.beginPath();
   while(xGrid<canvas.height)
   {
       ctx.moveTo(0,xGrid);
       ctx.lineTo(canvas.width,xGrid);
      xGrid+=10;
   }
   while(yGrid<canvas.width)
   {
       ctx.moveTo(yGrid,0);
       ctx.lineTo(yGrid,canvas.height);
      yGrid+=10;
   }
 ctx.strokeStyle="grey"; 
  
ctx.stroke();
}
function blocks(count)
{
    return count*10;
}
function drawAxis()
{
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(blocks(5),blocks(0));
    ctx.lineTo(blocks(4),blocks(1));
    ctx.moveTo(blocks(5),blocks(0));
    ctx.lineTo(blocks(6),blocks(1));
    ctx.moveTo(blocks(5),blocks(0));
    ctx.lineTo(blocks(5),blocks(56));
    ctx.moveTo(blocks(5),blocks(56));
    ctx.lineTo(blocks(98),blocks(56));
    ctx.moveTo(blocks(98),blocks(56));
    ctx.lineTo(blocks(97),blocks(57));
    ctx.moveTo(blocks(98),blocks(56));
    ctx.lineTo(blocks(97),blocks(55));
    
    ctx.moveTo(blocks(5),blocks(56));
        for(let pop=0;pop<=220;pop+=5){
             ctx.strokeText(pop,blocks(2),blocks(yplot));
             yplot-=1;
            
            
        }
        ctx.strokeText(5,blocks(20),blocks(58));
        ctx.strokeText(10,blocks(35),blocks(58));
        ctx.strokeText(15,blocks(50),blocks(58));
        ctx.strokeText(20,blocks(65),blocks(58));
        ctx.moveTo(blocks(5),blocks(56));
        ctx.lineTo(blocks(20),blocks(48));
        

        ctx.moveTo(blocks(20),blocks(48));
        ctx.lineTo(blocks(35),blocks(41));

        ctx.moveTo(blocks(35),blocks(41));
        ctx.lineTo(blocks(50),blocks(28));

        ctx.moveTo(blocks(50),blocks(28));
        ctx.lineTo(blocks(65),blocks(14));




    ctx.stroke();
}
drawGrids();
drawAxis();