
function mostraralerta()
{       
    alert('hizo clic!');
}     
function hacerclic()
{       
    var elemento=document.getElementsByTagName('a')[0];
    elemento.addEventListener(‘click’, mostraralerta, false);
}     

window.addEventListener(‘load’, hacerclic, false); 
