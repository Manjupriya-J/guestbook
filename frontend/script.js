const api='http://localhost:3000/messages';
function loadMessages(){
    fetch(api).then((res)=>res.json()).then(data=>{
        const list =document.getElementById("previousMessage");
        list.innerHTML = ''; // Clears old messages

      data.forEach(msg=>{
        const li=document.createElement('li');
        li.textContent=`${msg.name}:${msg.message}`;
        list.appendChild(li);
      })

    })
}
function submitMessages(){

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
      fetch(api,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({name,message})

    }).then(()=>{
        loadMessages();
        document.getElementById("name").value='';
       document.getElementById("message").value='';
    });
}
