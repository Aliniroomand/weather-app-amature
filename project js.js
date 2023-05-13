// https://api.openweathermap.org/data/2.5/weather?q=shiraz&appid=8a9ea00d31bf781031e4897a19bfc740

const form=document.querySelector("form");
const input=document.querySelector(".top-banner input");
const msg=document.querySelector(".top-banner .msg");
const list=document.querySelector(".cities");

const apiKey="8a9ea00d31bf781031e4897a19bfc740";

form.addEventListener("submit", e =>{
    e.preventDefault();
    let inputVal=input.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(Response => Response.json())
        .then(data =>{
            const{name,main,sys,weather}=data;
            const icon=`http://openweathermap.org/img/w/${weather[0]["icon"]}.png"`
            const li =document.createElement("li");
            li.classList.add("city");
            const markup=`
                <h2 class='city-name' data-name=${name},${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
                </h2>
                <div class="city-temp"> ${Math.round(main.temp)} C
                </div>
                <figure>
                <img class="city-icon" src="${icon}" alt="icon">
                <figurecaption>
                    ${weather[0]["description"]}
                </figurecaption>
                </figure>
            `  ;
            li.innerHTML=markup;
            list.appendChild(li) ;
            msg.innerText="";


        })
        .catch(()=>{
            msg.innerText="city name is wrong";
        })
        input.value=""

})