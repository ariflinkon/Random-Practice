document.getElementById('apply-bg').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';

})

document.getElementById('center-3rd').addEventListener('click', function(){
    document.getElementsByClassName('friend')[2].style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('add-friend');
    const newFriend = document.createElement('div');
    newFriend.innerHTML = ` 
<div class="friend">
    <h3 class="friend-name">Friend-6</h3>
    <p>Lorem ipsum dolor sit amet.</p>
   </div> `
    friendContainer.appendChild(newFriend);    
})