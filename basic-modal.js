var modal = document.getElementById('simpleModal') ;
var modalBtn = document.getElementById('modalBtn') ; 
var closeBtn = document.getElementsByClassName('closeBtn')[0] ; 

modalBtn.addEventListener('click' , openModal) ; 

function openModal ()
{
    modal.style.display = 'block' ;
}

closeBtn.addEventListener('click',closeModal);

function closeModal()
{
    modal.style.display = 'none' ; 
}

window.addEventListener('click',outsideClick);

function outsideClick(e)
{
    if (e.target == modal)
    {
      modal.style.display ='none';   
    }
}