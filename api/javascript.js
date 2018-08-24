document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#todo').onsubmit=function(){
    const li = document.createElement('li');
    li.innerHTML=document.querySelector('#input').value;

    document.querySelector('#list').append(li);
    document.querySelector('#input').value='';
    return false;
  };

});
