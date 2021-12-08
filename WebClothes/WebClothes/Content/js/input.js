var cart = []
cart = JSON.parse(localStorage.getItem("items"))
$(document).ready(function () {
    $(".item-image").click(function (event) {
        console.log(event)
        /* Act on the event */
        // $(".main-image").attr({
        //     'src':$(this).attr('src') ,
        //     'xoriginal': $(this).attr('src')
        // });
        console.log('ảnh click');
        console.log($(this).attr('src'));
        $('.main-image').attr('src', $(this).attr('src'));
        $('.main-image').attr('xoriginal', $(this).attr('src'));
        console.log($('.main-image').attr('src'));
        debugger

    });
    $(".zoom").xzoom({
        zoomWidth: 300,
        zoomHeight: 300,
        tint: "#333",
        Xoffset: 20,
    });
    $('.product-btnbuy').on('click', function (event) {
        event.preventDefault();
        /* Act on the event */
        var proId = $(this).attr('productId')
        var proName = $('#pro-' + proId).find('.product-name').text()
        var imgUrl = $('#pro-' + proId).find('.img-src').attr('src')
        var price = $('#pro-' + proId).find('#price').text()
        var prosize = $('input:radio[name=sizename]:checked').val()
        var quantity = parseInt($('input[name=quantity]').val())
        var p = Number(parseFloat(price.replace(/,/g, "")))
        var tt = (p * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (prosize !== undefined) {
            var item = {
                id: proId,
                productName: proName,
                imageUrl: imgUrl,
                productPrice: price,
                size: prosize,
                number: quantity,
                tt:tt  
            }
            var check = false
            //khac phần số lượng
            if (!cart)
                cart=[]
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == item.id && cart[i].size == item.size) {
                    cart[i].number += item.number
                    check = true
                }
            }
            if (check == false) {
                cart.push(item);
            }
            Load();
            localStorage.setItem("items", JSON.stringify(cart))
            swal(proName, "Đã được thêm thành công vào giỏ hàng", "success");
            $('input:radio').prop("checked", false);
            $('label').removeClass('box-active');
            $('img').removeClass('active2');
        } else {
            if (prosize == undefined) {
                swal("Thông Báo!", "Bạn chưa chọn kích cỡ", "warning");
            }
        }
    });
    $('.btnAdd-amount').click(function (event) {
        /* Act on the event */
        add();
    });
    $('.btnReduction').click(function (event) {
        /* Act on the event */
        reduct();
    });
    $('.product-btnbuy').click(function (event) {
        /* Act on the event */

    });
    $('menu-child').mouseover(function(){
        alert(this.id)
    })
});
//load dữ liệu vào giỏ hàng
function Load() {
    // body...
    var s = 0
    if (cart != null) {
        for (var i = 0; i < cart.length; i++) {
            s += cart[i].number
        }
    }
    $('#icon-cart-number').text(s)
}

function reduct() {
    let s = parseInt($('input[name=quantity]').val());
    s = s - 1;
    if (s >= 1) {
        $('input[name=quantity]').val(s);
    }
}

function add() {
    let s = parseInt($('input[name=quantity]').val());
    s = s + 1;
    $('input[name=quantity]').val(s);
    if (s > 10) {
        alert("Bạn chỉ có thể mua nhiều nhất 10 sản phẩm");
        $('input[name=quantity]').val(10);
    }
}
//phan chon size
function size(obj) {
    $('label').removeClass('box-active');
    $(obj).addClass('box-active');
}
Load()

