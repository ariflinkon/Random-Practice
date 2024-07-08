document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background = 'tomato';
    }
})

document.getElementById('center-3rd').addEventListener('click', function(){
    const third = document.getElementsByClassName('friend')[2];
    third.style.textAlign = 'center';
})
document.getElementById('add-friend').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend').length;
    const friend = document.createElement('div');
    friend.classList.add('friend');
    const name = document.createElement('h3');
    name.classList.add('friend-name');
    name.innerText = `Friend-${friends + 1}`;
    const content = document.createElement('p');
    content.innerText = 'Lorem ipsum dolor sit amet.';
    friend.appendChild(name);
    friend.appendChild(content);
    document.body.appendChild(friend);
})
document.getElementById('clear-all').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    while(friends.length > 0){
        friends[0].remove();
    }
})