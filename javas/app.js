
function body(){
    document.getElementById("container_body___1").innerHTML+=`
        
    <div id="sanpham1"></div>
    <div id="container_footer">
        <div id="footer_top"></div>
        <div id="footer_main"></div>
    </div>

    <div id="tim_kiem"></div>
    `
}
body();
// // Sản Phẩm
function san_pham_moi(img, tieu_de, gia,){
    document.getElementById("sanpham1").innerHTML+=`
        <div class="product" onclick="chonsanpham()">
            <div class="product_img">
                <img src="` + img + `" alt="">
            </div>
            <div class="product_tieu_de">
                <h3>` + tieu_de + `</h3>
                <p>` + gia + `<span class="vnd">đ</span></p>
            </div>
        </div>
    `
}
let san_phams =[
    {
        img: "https://s3.cloud.cmctelecom.vn/vfc.website.images/2010033/2010033_BLUE_CH_1.jpg",
        tieu_de: "ÁO thun Nam ",
        gia: "889,000",
    },
    {
        img: "https://product.hstatic.net/1000197303/product/pro_tim_4_8933d3b314ab457db2ef9ba48afac434.jpg",
        tieu_de: "BO QUẦN ÁO SET NỮ",
        gia: "1,489,000",
    },
    {
        img: "https://s3.cloud.cmctelecom.vn/vfc.website.images/2010031/2010031_BO_BE_1.jpg", 
        tieu_de: "QUẦN ÁO SET NỮ",
        gia: "489,000",
    },
    {
        img: "https://s3.cloud.cmctelecom.vn/vfc.website.images/1912048/1912048_GR_NV_1.jpg",
        tieu_de: "BO QUẦN ÁO SET NỮ",
        gia: "589,000",
    },
]
for ( let san_pham of san_phams ){
    san_pham_moi(san_pham.img, san_pham.tieu_de, san_pham.gia)
}

function chonsanpham(){
    document.getElementById("cotainer_body").style.display = "none";
    document.getElementById("sanpham1").style.display = "none";
    document.getElementById("pham_cap").style.display = "block";
    document.getElementById("container_chi_tiet_san_pham").style.display = "block";
}
// footer
function _footer_1( ten_class_1, icon_i, title_1, title_2 ){
    document.getElementById("footer_top").innerHTML+=`
                <div class="footer_top_con ` + ten_class_1 + `">
                    <div class="footer_top_con_tieu_de">
                        <i class="` + icon_i + `"></i>
                    </div>
                    <div class="footer_top_con_tieu_de_1">
                        <h4>` + title_1+ `</h4>
                        <p>` + title_2 + `</p>
                    </div>
                </div>`
}

let footers = [
    {
        ten_class_1: "boder",
        icon_i: "fal fa-truck-moving icon",
        title_1: "GIAO HÀNG MIỄN PHÍ",
        title_2: "ĐƠN HÀNG TỪ 300.000 VNĐ",
    },
    {
        ten_class_1: "boder",
        icon_i: "fal fa-truck-moving icon",
        title_1: "CHĂM SÓC KHÁCH HÀNG VÀ GỌI MUA HÀNG",
        title_2: "1900636940 (9H00 - 21H00, T2 - CN)",
    },
    {
        ten_class_1: "boder",
        icon_i: "fab fa-tripadvisor icon",
        title_1: "GÓP Ý VÀ KHIẾU NẠI",
        title_2: "0978551855 24/24h",
    },
    {
        ten_class_1: "",
        icon_i: "fal fa-tag icon",
        title_1: "THANH TOÁN",
        title_2: "KHI NHẬN HÀNG",
    },
]

for ( let footer of footers ){
    _footer_1( footer.ten_class_1, footer.icon_i, footer.title_1, footer.title_2 );
}

function footer_2( img_logo, titli_1, titli_2, titli_3, titli_4, titli_5, tip, h6 ){
    document.getElementById("footer_main").innerHTML+=`
            <div class="footer_main_con">
                <div class="footer_main_con_logo">
                    <img src="` + img_logo + `" alt="">
                    <h5>` + tip + `</h5>
                </div>
                <div class="footer_main_con_danh_sach">
                    <h2>` + titli_1+ `</h2>
                    <p>` + titli_2 + `</p>
                    <p>` + titli_3 + `</p>
                    <p>` + titli_4 + `</p>
                    <p>` + titli_5 + `</p>
                </div>
                <div class="footer_main_con_111">
                    <h6>` + h6 + `</h6>
                </div>
                
            </div>`
}

let _footer_danh_sachs = [
    {
        img_logo: "./imag/lgo/logo_2.png",
        tip:"",
        titli_1: "THÔNG TIN",
        titli_2: "MARC BRIGHTEN YOUR DAY - Tự hào là thương hiệu thời trang Việt Nam mang lại những trải nghiệm mua sắm tốt nhất,giúp bạn thêm hứng khởi, tự tin và yêu bản thân hơn qua mỗi ngày khi được thể hiện cá tính của mình.",
        titli_3: "",
        titli_4: "",
        titli_5: "",
        h6: "CÔNG TY CỔ PHẦN TMDV TK THỜI TRANG"
    },
    {
        img_logo: " ",
        tip: "Liên hệ Chăm Sác khách hàng 0978551855",
        titli_1: "Về MAX",
        titli_2: "Giới thiệu",
        titli_3: "Liên hệ",
        titli_4: "Tài khoản",
        titli_5: "Cửa hàng",
        h6: ""
    },
    {
        img_logo: "",
        tip:"",
        titli_1: "CHÍNH SÁCH",
        titli_2: "Hướng dẫn mua hàng",
        titli_3: "Quy định đổi hàng",
        titli_4: "Tuyển dụng",
        titli_5: "Hợp tác kinh doanh",
        h6: ""
    },
    {
        img_logo: "",
        tip:"",
        titli_1: "Địa Chỉ",
        titli_2: "Trụ Sở Chính: 198 Nguyễn Hữu Cảnh TPHCM",
        titli_3: "Chi Nhánh: TPHCM",
        titli_4: "Chi Nhánh: Hà Nội",
        titli_5: "Chi Nhánh: Đà Nẵng",
        h6: ""
    },
    
]
for ( _footer_danh_sach of _footer_danh_sachs ){
    footer_2( _footer_danh_sach.img_logo, 
    _footer_danh_sach.titli_1,
    _footer_danh_sach.titli_2,
    _footer_danh_sach.titli_3,
    _footer_danh_sach.titli_4,
    _footer_danh_sach.titli_5,
    _footer_danh_sach.tip,
    _footer_danh_sach.h6
     )
}


// hienaccount

function hienaccount(){
    document.getElementById("ttttt").style.display = "block";
    document.getElementById("account").style.display = "block";
}

function anaccount(){
    document.getElementById("account").style.display = "none";
    document.getElementById("ttttt").style.display = "none";
}
 

function hide_sign_in_registration( open, close, T_2, T_1, T_4, T_3 ){
    document.getElementById(open).style.display = 'block';
    document.getElementById(close).style.display = 'none';

    document.getElementById(T_2).style.display = 'none';
    document.getElementById(T_1).style.display = 'block';

    document.getElementById(T_3).style.display = 'none';
    document.getElementById(T_4).style.display = 'block';
}





// TKDN
    function TTDNN(vs){
        document.getElementById("fom_account").innerHTML+=`
            <span class="fom_account_1"></span>
            <div id="` + vs.id + `">
                <div class="` + vs.classs + `">
                <img src="` + vs.ts + `" alt="">
                </div>
                <h4>` + vs.tp + `</h4>
                <h4 onclick="` + vs.click + `" class="tyh">` + vs.jh + `</h4>
                <h6>` + vs.username + `</h6>
                <p>` + vs.gmail_DT_ + `</p>
                <h5 class="imt">` + vs.h5 + `</h5>
                <span class="` + vs.ps + `"></span>
                <h5>` + vs.h5_1 + `</h5>
                <h5>` + vs.h5_2 + `</h5>
                <h5 onclick="` + vs.click_2 + `">` + vs.h5_3 + `</h5>
            </div>
        `
    }

    let xvs =[
        {
            id: "TKDNICON",
            classs: "img_conj",
            ts: "./imag/icon/imgbin_sticker-emoticon-facebook-tuzki-telegram-png.png",
            tp: "Bạn Chưa đăng Nhập",
            click: "hienaccount()",
            jh: "Đăng Nhập",
            username: "",
            gmail_DT_: "",
            h5: "",
            ps: "",
            h5_1: "",
            h5_2: "",
            h5_3: "",
        },
        {
            id: "TTTKDN",
            classs: "",
            ts: "",
            tp: "",
            click: "",
            jh: "",
            username: "",
            gmail_DT_: "",
            h5: "XEM THÔNG TIN CÁ NHÂN",
            ps: "bar_pond_hybrid",
            h5_1: "Sản phẩm yêu thích",
            h5_2: "Gói thành viên",
            click_2: "DXTK()",
            h5_3: "Đăng Xuất",
        }
    ]

    for( let vs of xvs ){
        TTDNN(vs)
    }

    //Đăng Xuất account

    function DXTK(){
        console.log("hello")
        document.getElementById("TTTKDN").style.display = "none" ;
        document.getElementById("TKDNICON").style.display = "block";
    }

    function DNTC(){
        document.getElementById("container_DXTk").style.display = "none" ;
    }

    // account
    let accounts = [
        {
            username: "Hoàng",
            gmail_DT_: "nguyenhoang555888@gmail.com",
            password: "22",
            password_: "",
        },
    ];
    function validate(){
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        
        for(let account of accounts ){
            if (username == account.username && password == account.password){
                // alert("Đăng Nhập Thành công")
                
                for(let vs of xvs){
                    if(vs.id == "TTTKDN"){
                        vs.username = account.username;
                        vs.gmail_DT_ = account.gmail_DT_;
                        break;
                    }
                }
                document.getElementById("fom_account").innerHTML = "";
                for( let vs of xvs ){
                    TTDNN(vs)
                } //test
                document.getElementById("ksjj").style.display = "block";
                document.getElementById("ksdka").style.display = "none";
                document.getElementById("container_DXTk").style.display = "block" ;
                document.getElementById("account").style.display = "none";
                document.getElementById("ttttt").style.display = "none";
                document.getElementById("TTTKDN").style.display = "block" ;
                document.getElementById("TKDNICON").style.display = "none";
                return
            }
        }
        document.getElementById("p_51").style.display = "block";
    }

    
    function danh_ky(){
        let _username = document.getElementById("username_1").value;
        let _password = document.getElementById("password_1").value;
        let _password_2 = document.getElementById("password_2").value;
        let gmail_DT_1 = document.getElementById("gmail_DT").value;
        var atposition = gmail_DT_1.indexOf("@");
        var dotposition = gmail_DT_1.lastIndexOf(".");
        // var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let new_accounts ={
            username: _username,
            gmail_DT_: gmail_DT_1,
            password: _password,
            password_: _password_2,
        }
        if ( _username == [] && _password == []){
            // alert("Bạn phải nhập Tài khoản")
            document.getElementById("p_1").style.display = "block";
            return
        }else if(atposition < 1 || dotposition < (atposition + 2)||(dotposition + 2) >= gmail_DT_1.length ){
            // if (phoneNum.test(gmail_DT_1)) {
            //     document.getElementById("p_7").style.display = "block";
            // }
            document.getElementById("p_7").style.display = "block";
            return
        }else if( gmail_DT_1 == []){
            document.getElementById("p_2").style.display ="block"
            return
        }else if( _username == "Hoàng"){
            // alert("Tên đăng Nhập Đã Tồn Tại")
            document.getElementById("p_5").style.display ="block"
            return
        }else if( _password == []){
            // alert("Vui lòng nhập mật khẩu")
            document.getElementById("p_3").style.display ="block"
            return
        }else if( _username == []){
            // alert("Bạn chưa tên nhập Tài khoản")
            document.getElementById("p_6").style.display ="block"
            return
        }else if ( _password_2 == _password ){
            for (let account of accounts) {
                if (_username == account.username && _password == account.password){
                    // alert("Thông tin đã tồn tại")
                    document.getElementById("p_5").style.display ="block"
                    return
                }
            }
            // alert("Đăng Ký Thành Công")
            accounts.push(new_accounts);
            document.getElementById("ksjj").style.display = "none";
            document.getElementById("ksdka").style.display = "block";
            document.getElementById("container_DXTk").style.display = "block";
            document.getElementById("account").style.display = "none";
            document.getElementById("ttttt").style.display = "none";
            for(let vs of xvs){
                if(vs.id == "TTTKDN"){
                    vs.username = new_accounts.username;
                    vs.gmail_DT_ = new_accounts.gmail_DT_;
                    break;
                }
            }
            document.getElementById("fom_account").innerHTML = "";
            for( let vs of xvs ){
                TTDNN(vs)
            } //test
            document.getElementById("TTTKDN").style.display = "block" ;
            document.getElementById("TKDNICON").style.display = "none";
            return
        }
        // alert("Kiểm tra lại, Nhập lại mật khẩu không giống.")
        document.getElementById("p_4").style.display ="block" 
    }

    


// search

function tim_kiem(){
    document.getElementById("tim_kiem").innerHTML+=`
            <i class="fal fa-search cart_1"</i></i>
            <input type="text" placeholder="Tìm sản Phẩm" class="saaa" id="btnSearch">
            <i class="fal fa-times" onclick="an_tim_kiem()"></i>
    `
}
tim_kiem();

function an_tim_kiem(){
    document.getElementById("tim_kiem").style.display = "none";
}

function hien_tim_kiem(){
    document.getElementById("tim_kiem").style.display = "block";
}






//container_chi_tiet_san_pham 

function xem_anh_img(id){
    let img_sax = document.getElementById(id).getAttribute('src');
    document.getElementById('anh_img_main').setAttribute('src', img_sax );
}












