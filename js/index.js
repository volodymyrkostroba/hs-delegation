const refs = {
    ul:document.querySelector('.tags'),
    button:document.querySelector('.tags__button'),
    text:document.querySelector('.text'),
}

refs.ul.addEventListener('click',chowTag);

function chowTag(e){
    if(e.target.nodeName !== 'BUTTON'){
        console.log('not button');
        return
    }
    

    const hasClass = e.currentTarget.querySelector('.js-active');

    if(hasClass){
        console.log(hasClass);
        hasClass.classList.remove('js-active');
    }

    
    const btn = e.target;

    btn.classList.add('js-active');

    showText(btn);     
        
       
}


// //////
function showText(e){
    refs.text.textContent = e.textContent;
}