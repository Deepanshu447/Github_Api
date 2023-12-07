function myfun2(){
    let selectname = document.querySelector('#selectname');
    console.log(selectname.value)
    

    fetch(`https://api.github.com/users/${selectname.value}`)
    .then((e)=> e.json())
    .then((Resp)=>{
    let name = document.querySelector('.name');
    let heading = document.querySelectorAll('.heading');
    let image = document.querySelector('#image');
    console.log(Resp);


        name.innerHTML=Resp.name
        heading[0].innerHTML=`Followers: ${Resp.followers}`
        heading[1].innerHTML=`Following: ${Resp.following}`
        heading[2].innerHTML=`ID: ${Resp.id}`
        heading[3].innerHTML=`Public Gists: ${Resp.public_gists}`
        heading[4].innerHTML=`Email: ${Resp.email}`
        heading[5].innerHTML=`Login: ${Resp.login}`
        heading[6].innerHTML=`Updated at: ${Resp.updated_at}`
        image.src= Resp.avatar_url

    })

    const apii = "https://api.github.com/users/";
}