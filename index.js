
function operations()
{
    var sel = document.getElementById('scripts');
    var opt = sel.options[sel.selectedIndex];
    optn=opt.value;
    button1="<div class='btn-grp'> <br><br><br><br><button type='button' class='btn' onclick='sum()' >+</button><button type='button' class='btn' onclick='diff()' >-</button><br><button type='button' class='btn' onclick='mul()' >*</button><button type='button' class='btn' onclick='div()' >/</button></div>"
    button2="<div class='btn-grp'> <br><br><br><br><button type='button' class='btn' onclick='sin()' >sin</button><button type='button' class='btn' onclick='cos()' >cos</button><br><button type='button' class='btn' onclick='tan()' >tan</button><button type='button' class='btn' onclick='cot()' >cot</button></div>"
    button3="<div class='btn-grp'> <br><br><br><br><button type='button' class='btn' onclick='sin()' >sin</button><button type='button' class='btn' onclick='cos()' >cos</button><br><button type='button' class='btn' onclick='tan()' >tan</button><button type='button' class='btn' onclick='cot()' >cot</button></div>"
    if(optn=='Arith')
        document.getElementById('operator-list').innerHTML=button1;
    else if(optn=='trig')
        document.getElementById('operator-list').innerHTML=button2;
    else
        document.getElementById('operator-list').innerHTML=button3;
}
// function sum()
//     {
//         oper1=document.getElementsByName('oper1');
//         oper2=document.getElementsByName('oper2');
//         document.getElementById('result')=oper1+oper2;
//     }
// function num()
//     {
//         var numb=document.getElementsByClassName('btn').value;
        
//         number=Number(numb);alert(number);
//         document.getElementsByName('oper-1').value=number;
//     }