function hiedh(){
    document.getElementById("cotainer_body").innerHTML+=`
    <div id="div_header">
            <div id="logo"></div>
            
            <div class="div_list">
                <ul id="list_trang_chu">
                    <li class="trangchu1"><a href="" id="colora">Bán Chạy</a></li>
                    <li class="trangchu1">
                        <div class="trangchu1_con">
                            <a href="" id="colora_1">SALE 50% <i class="far fa-angle-down icon_arrow" id="r3"></i></a>
                            <div id="Trang_1">
                                <p>Áo Thung Nam</p>
                                <p>Đầm Nữ</p>
                            </div>
                        </div>
                    </li>
                    <li class="trangchu1">
                        <div class="trangchu1_con">
                            <a href="" id="colora_2">Thời Trang Nam <i class="far fa-angle-down icon_arrow" id="r2"></i></a>
                            <div id="trang_2">
                                <div class="container_2_">
                                    <div class="trang_2_com"></div>
                                    <div class="trang_2_com">
                                        <h6>ÁO Phong</h6>
                                        <p>ÁO THUN</p>
                                        <p>ÁO THUN POLO</p>
                                        <p>ÁO DỆT</p>
                                        <p>ÁO KHOÁC</p>
                                        <p>ÁO SƠ MI</p>
                                    </div>
                                    <div class="trang_2_com">
                                        <h6>QUẦN</h6>
                                        <p>QUẦN JEANS</p>
                                        <p>QUẦN SHORT</p>
                                        <p>QUẦN KAKI</p>
                                        <p>QUẦN TÂY</p>
                                        <p> QUẦN DÀIHOT</p>
                                    </div>
                                    <div class="trang_2_com"></div>
                                    <div class="trang_2_com"></div>
                                    <div class="trang_2_com"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="trangchu1">
                        <div class="trangchu1_con">
                            <a href="" id="colora_3">Thời Trang Nữ <i class="far fa-angle-down icon_arrow" id="r1"></i></a>
                            <div id="trang_3">
                                <div class="container_2_">
                                    <div class="trang_2_com"></div>
                                    <div class="trang_2_com">
                                        <h6>NỮ</h6>
                                        <p>ÁO DỆTNEW</p>
                                        <p>ÁO SƠ MIHOT</p>
                                        <p>ÁO KHOÁC</p>
                                        <p>ÁO LIỀN QUẦNNEW</p>
                                        <p>ÁO THUN</p>
                                        <p>ÁO BLAZER</p>
                                    </div>
                                    <div class="trang_2_com">
                                        <h6>QUẦN</h6>
                                        <p>QUẦN JEANSHOT</p>
                                        <p>QUẦN TÂY</p>
                                        <p>QUẦN SHORTHOT</p>
                                        <p>QUẦN LEGGINGHOT</p>
                                        <p>QUẦN DÀIHOT  </p>
                                    </div>
                                    <div class="trang_2_com">
                                        <h6>VÁY ĐẦM</h6>
                                        <p>ĐẦMNEW</p>
                                        <p> ĐẦM CÔNG SỞNEW</p>
                                        <p>ĐẦM DỰ TIỆCHOT</p>
                                        <p>ĐẦM DẠO PHỐ</p>
                                        <p> VÁY MAXIHOT</p>
                                        <p>CHÂN VÁY</p>
                                        <p>SET ĐỒ NỮNEW</p>
                                    </div>
                                    <div class="trang_2_com"></div>
                                    <div class="trang_2_com"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="trangchu1"><a href="" id="colora_4">Hệ Thống Cửa Hàng</a></li>
                    <li class="trangchu1"><a href="" id="colora_5">Blog</a></li>
                </ul>
            </div>
    
            <div class="div_cart">
                <div id="cart_">
                    <i class="fal fa-search cart_1" onclick="hien_tim_kiem()"></i></i>
                    <div id="hyt">
                        <i class="fal fa-user-alt cart_1"></i></i>
                        <div id="fom_account">
                            <span class="fom_account_1"></span>
                        </div>
                    </div>
                    <i class="fal fa-shopping-cart cart_1" onclick="container_cart()"></i>
                </div>
            </div>
        </div>`
}

hiedh();