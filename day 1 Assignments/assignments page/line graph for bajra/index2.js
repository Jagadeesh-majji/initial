var canvas=document.querySelector('canvas');
var ctx=canvas.getContext('2d');
canvas.width=1000;
canvas.height=860;
var pop;
var yplot=84;
var xplot=7;
var x=10;
var y=10;
function drawGrids()
{
ctx.beginPath();
while(y<canvas.height)
{
ctx.moveTo(0,y);
ctx.lineTo(canvas.width,y);
y+=10;
}
while(x<canvas.width)  

{
    ctx.moveTo(x,0);
    ctx.lineTo(x,canvas.height);
    x+=10;
}

  
 ctx.strokeStyle="grey"; 
  
ctx.stroke();
}

function block(count)
{
return  count*10; 
}

function  drawAxis()
{
    ctx.beginPath();
    ctx.strokeStyle="black";
    
    ctx.moveTo(block(5),block(0));
    ctx.lineTo(block(5),block(84));
    ctx.moveTo(block(5),block(84));
    ctx.lineTo(block(100),block(84));
    ctx.moveTo(block(100),block(84));
    ctx.lineTo(block(99),block(83));
    ctx.moveTo(block(100),block(84));
    ctx.lineTo(block(99),block(85));
    ctx.moveTo(block(5),block(0));
    ctx.lineTo(block(4),block(1));
    ctx.moveTo(block(5),block(0));
    ctx.lineTo(block(6),block(1));


    ctx.moveTo(block(5),block(84));

     for(pop=150;pop<=285;pop+=2)
     {
         ctx.strokeText(pop,block(2),block(yplot));
         yplot-=1;

     }
     ctx.moveTo(block(5),block(84));
    for(pop=2001;pop<=2008;pop+=1)
    {
       ctx.strokeText(pop,block(xplot),block(85));
       xplot+=10;
    }

    ctx.strokeText(457,block(2),block(1));
    ctx.stroke();

}
function drawLine()
{
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(block(7),block(18.5));
    ctx.lineTo(block(17),block(20.5));
    ctx.strokeText('2001',block(7),block(18.5));
    ctx.strokeText('2002',block(17),block(20.5));

    ctx.moveTo(block(17),block(20.5));
    ctx.lineTo(block(27),block(21.5));
    ctx.strokeText('2003',block(27),block(21.5));

    ctx.moveTo(block(27),block(21.5));
    ctx.lineTo(block(37),block(1));
    ctx.strokeText('2004',block(37),block(1));
    
    ctx.moveTo(block(37),block(1));
    ctx.lineTo(block(47),block(59));
    ctx.strokeText('2005',block(47),block(59));

    ctx.moveTo(block(47),block(59));
    ctx.lineTo(block(57),block(19));
    ctx.strokeText('2006',block(57),block(19));

    ctx.moveTo(block(57),block(19));
    ctx.lineTo(block(67),block(84));
    


    ctx.stroke();
}
drawGrids();
drawAxis();
drawLine();