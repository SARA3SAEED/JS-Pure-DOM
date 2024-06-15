
let myDiv1 =document.createElement("div");
myDiv1.className ="header";

let myImg = document.createElement("img");
myImg.className="logo";
myImg.src ="./bird.jpg"
myImg.style.width= "120px";
myImg.style.height="120px"



let myelementDiv = document.createElement("div");
let myelement = document.createElement("ul");
let myelement1 = document.createElement("li");
let myelement2 = document.createElement("li");
let myelement3 = document.createElement("li");



myelement1.innerHTML= "Home";
myelement2.innerHTML= "About";
myelement3.innerHTML= "Products";



myelement.appendChild(myelement1);
myelement.appendChild(myelement2);
myelement.appendChild(myelement3);

myelementDiv.appendChild(myelement);

myDiv1.style.cssText="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; border-style: solid; margin:5px;";
myelementDiv.style.cssText="  display: flex; flex-direction: row-reverse;  width:50% ;"
myelement.style.cssText="list-style: none;  display: flex; flex-direction: row-reverse; justify-content: space-between; width:50% ;"



myDiv1.appendChild(myImg);
myDiv1.appendChild(myelementDiv);


document.body.appendChild(myDiv1);


/*----------------------------------------------------------*/

let myDiv2 =document.createElement("div");
myDiv2.className ="main";
myDiv2.style.cssText="border-style: solid; margin:5px; display: flex;  flex-wrap: wrap;"


for(let i =0 ; i<= 11; i++){
let myCard =document.createElement("div");
myCard.className =`card${i+1}`;
myCard.style.cssText="border-style: solid; width:25% ; height:90px ; padding: 30px; margin:10px"
let myP =document.createElement("h2");
myP.innerHTML =`${i+1}`;
myP.style.textAlign="center";
let myP2 =document.createElement("p");
myP2.innerHTML=`product ${i+1}`;
myP2.style.textAlign="center";
myCard.appendChild(myP);
myCard.appendChild(myP2);
myDiv2.appendChild(myCard);
}

document.body.appendChild(myDiv2);


/*----------------------------------------------------------*/

let myDiv3 =document.createElement("div");
myDiv3.className ="footer";
let myP3 =document.createElement("p");
myDiv3.style.cssText="display: flex; justify-content: center; align-items: center;  margin:5px; height:130px; background-color: green;"
myP3.innerHTML="copy right";
myP3.style.cssText="color: white;";

myDiv3.appendChild(myP3);
document.body.appendChild(myDiv3);


