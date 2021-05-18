window.onscroll = function(){
    // console.info(document.documentElement.scrollTop);
    let header = document.getElementById("div_header");
    let leit = document.getElementById("list_trang_chu");
    let Trang_1 = document.getElementById("Trang_1");
    let trang_2 = document.getElementById("trang_2");
    let trang_3 = document.getElementById("trang_3");
    let cart_ = document.getElementById("cart_");
    let logo___1 =document.getElementById("logo___2");
    let logo___2 =document.getElementById("logo___1");
    let colora = document.getElementById("colora");
    let colora_1 = document.getElementById("colora_1");
    let colora_2 = document.getElementById("colora_2");
    let colora_3 = document.getElementById("colora_3");
    let colora_4 = document.getElementById("colora_4");
    let colora_5 = document.getElementById("colora_5");
    let r3 = document.getElementById("r3");
    let r2 = document.getElementById("r1");
    let r1 = document.getElementById("r2");
    let gototop = document.getElementById("gototop_1");
    let fom_account_ = document.getElementById("fom_account");
    if ( document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 ){
        header.style.height = "80px";
        header.style.boxShadow = "0px 0px 3px 0.5px rgb(189, 189, 189)";
        header.style.color = "black";
        header.style.backgroundColor = "white";
        leit.style.lineHeight = "90px";
        cart_.style.marginTop ="30px"
        header.style.transition = "all 0.5s ease-out";

        fom_account_.style.top = "80px";


        logo___1.style.display ="none";
        logo___2.style.display ="block";


        colora.style.color = "black";
        colora_1.style.color = "black";
        colora_2.style.color = "black";
        colora_3.style.color = "black";
        colora_4.style.color = "black";
        colora_5.style.color = "black";

        r3.style.color = "black";
        r2.style.color = "black";
        r1.style.color = "black";

        Trang_1.style.top = "80px";
        trang_2.style.top = "80px";
        trang_3.style.top = "80px";

        gototop.style.display = "block";
    }else{
        header.style.height = "100px";
        header.style.boxShadow ="";
        header.style.color = "";
        header.style.backgroundColor = "";
        leit.style.lineHeight = "110px";
        cart_.style.marginTop ="";

        fom_account_.style.top = "";

        logo___1.style.display ="";
        logo___2.style.display ="";


        colora.style.color = "";
        colora_1.style.color = "";
        colora_2.style.color = "";
        colora_3.style.color = "";
        colora_4.style.color = "";
        colora_5.style.color = "";


        r2.style.color = "";
        r3.style.color = "";
        r1.style.color = "";

        Trang_1.style.top = "100px";
        trang_2.style.top = "100px";
        trang_3.style.top = "100px";

        gototop.style.display = "none";
    }
}



// banner
let banner = document.getElementsByClassName("img_anh");
let chuyenanh = 0;
function anh_img(n){ 
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";
    }
    banner[n].style.display = "block";
}
function chuyenbanner(){
    chuyenanh++;
    if(chuyenanh > 2){
        chuyenanh = 0;
    }
    anh_img(chuyenanh);
}

anh_img(0);
setInterval(function(){
    chuyenbanner();
}, 3500)



// product

// let cantainer_product = document.getElementById("main");

// function product_Number_one(){
//     cantainer_product.style.display ="block";
// }

function img_logo(logo_1, class_1){
    document.getElementById("logo").innerHTML+=`
        <img src="` + logo_1 + `" alt="" id="` + class_1 + `">`
}
let logo_imgs =[
    {
        logo_1: "./imag/lgo/logo.png",
        class_1: "logo___1"
    },
    {
        logo_1: "./imag/lgo/logo_2.png",
        class_1: "logo___2"
    }
]
for ( let logo_img of logo_imgs ){
    img_logo(
        logo_img.logo_1,
        logo_img.class_1,
    )
}


function container_cart(){
    let cart = document.getElementById("container_cart");
    let banner_img = document.getElementById("banner_img");
    cart.style.display = "block";
    banner_img.style.display = "none";
}

function gototop(){
    let timer = setInterval( function(){
        document.documentElement.scrollTop-=20;
        if (document.documentElement.scrollTop <= 0) {
           clearInterval(timer); 
        }
    }, 5);
}
