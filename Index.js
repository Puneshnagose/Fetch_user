async function fetch_Btn(){
    let res=await fetch("https://reqres.in/api/users?page=2");
    let data=await res.json()
    console.log(data)
    showData(data.data)
}
function showData(data){
    let container=document.getElementById("container");
    data.forEach(element => {
        let subDiv=document.createElement("div")
        subDiv.className="subDiv"

        let name=document.createElement("h3")
        name.innerHTML=`${element.first_name} ${element.last_name}`

        let email=document.createElement("p")
        email.innerHTML=element.email

        let avatar=document.createElement("img")
        avatar.src=element.avatar;

        subDiv.append(name,email,avatar)
        container.append(subDiv)
    });

}