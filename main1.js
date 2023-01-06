let food=[
  {
    name:"Coalspark Restaurant",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fi2mw3ve7oqoimguno52",
    culsin:"Seafood, Arabian", 
     value:"4.2",
     time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  },
  {
    name:"Mehfil",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rfngxpkeablm4ses3d0j",
    culsin:"Biryani, Chinese",
    value:"4.2",
    time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  },
  {
    name:"Paradise Biryani",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uhvq0go5ifnoxyaew1b7",
    culsin:"Biryani, Kebabs", 
    value:"4.2",
     time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  },
  {
    name:"Chaitanya Food Court",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lyzlpgvi7jh12frwvlle",
    culsin:"Biryani, Chinese", 
    value:"4.2",
    time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  },
  {
    name:"Wow! Momo",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cyg49t7uytu2mhb4hgub",
    culsin:"Briyani,indian,chines,northe indian", 
    value:"4.2",
    time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  },
  {
    name:"Raja Rani Ruchulu",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hy8iexvdms02w97p10ny",
    culsin:"Tibetan, Healthy Food", 
    value:"4.2",
    time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  },
  {
    name:"Lucky  Restaurant",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g8c7gkig9zxgqxpeqmas",
    culsin:"Biryani, North Indian", 
    value:"4.2",
    time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  },
  {
    name:"Varalakshmi Tiffins",
    imagurl1:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/3632e911860bd3a90f9558fc81372b73",
    culsin:"South Indian", 
    value:"4.2",
    time:"20 Mins",
    amount:"₹ 300 for two",
    code:"50% off/use WELCOME50"
  }
]

let cont=document.querySelector(".container");

let car1=document.createElement("div");
car1.classList.add("row");
cont.appendChild(car1);

  food.forEach(e=>{
    let div=document.createElement("div");
    div.classList.add("col");
    car1.appendChild(div);

    let div2=document.createElement("div");
    div2.classList.add("col-card");
    div.appendChild(div2);

    let  img=document.createElement("img");
     img.src=e.imagurl1;
    div2.appendChild(img);

    let head=document.createElement("h3");
     head.innerHTML=e.name;
    div2.appendChild(head);

    let para=document.createElement("p");
    para.innerHTML=e.culsin;
    div2.appendChild(para);

    let div3=document.createElement("div");
    div3.classList.add("col-card-1");
    div2.appendChild(div3); 

    let div4=document.createElement("div");
    div4.classList.add("col-image");
    div3.appendChild(div4); 

    let icon=document.createElement("i");
    icon.setAttribute("class","fa fa-star")
    div4.appendChild(icon);

    let rating=document.createElement("span");
    rating.innerHTML=e.value;
    div4.appendChild(rating);

    let div5=document.createElement("div");
    div5.classList.add("time");
    div3.appendChild(div5);

    let para1=document.createElement("p");
    para1.innerHTML=e.time;
    div5.appendChild(para1);

    let div6=document.createElement("div");
    div6.classList.add("rube");
    div3.appendChild(div6);

    let amounts=document.createElement("p");
    amounts.innerHTML=e.amount;
    div6.appendChild(amounts);

    // let div7=document.createElement("div");
    // div7.classList.add("img-1");
    // div2.appendChild(div7);

    // let image=document.createElement("img");
    // image.innerHTML=e.imagurl1;
    // div7.appendChild(image);

    let div8=document.createElement("div");
    div8.classList.add("col-3");
    div2.appendChild(div8);

    let codes=document.createElement("p");
    codes.innerHTML=e.code;
    div8.appendChild(codes);

    let addcard=document.createElement("div");
    addcard.classList.add("addacrt");
    div2.appendChild(addcard);

    let carLable=document.createElement("div");
    carLable.classList.add("carlabel")
    addcard.appendChild(carLable);
    carLable.innerHTML="ADD TO CART"

    let addcard2=document.createElement("div");
    addcard2.classList.add("addacrt2");
    addcard.appendChild(addcard2);

    let minus=document.createElement("button");
    minus.setAttribute("id","btn2")
    minus.innerHTML="-";
    addcard2.appendChild(minus);

    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","number");
    input.value=1;
    addcard2.appendChild(input);

    let plus=document.createElement("button");
    plus.setAttribute("id","btn1")
    plus.innerHTML="+";
    addcard2.appendChild(plus);

    minus.addEventListener("click",function(){
      if(input.value>0){
        input.value--;
      }
    })

    plus.addEventListener("click",function(){
     
        input.value++;
     
    })
  })
