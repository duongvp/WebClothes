
const shipping = parseInt('30000')
cart = JSON.parse(localStorage.getItem("items"))
total = JSON.parse(localStorage.getItem("price"))
var calc = total;
var disc=0;
var check;
var lasttotal = total + shipping
$('#total').text(lasttotal.toLocaleString());
$(document).ready(function() {
    $('.content-visa').hide()
    const change = cart.map((item, idex) => `
		<tr>
			<td class="img-product-table"><img src="${item.imageUrl}"></td>
			<td class="product-name-table"><p>${item.productName}</p></td>
		////</tr>`).join('')
    $('.product-table').html(change)
    $('#provisional-price').text(total.toLocaleString())
    $('#ship').text(shipping.toLocaleString())
    $('#paymoney1').prop("checked", true)
});

function paymoney(a) {
    if (a == 1) {
        $('.content-visa').slideUp(300)
    } else {
        $('.content-visa').slideDown(500)
    }

}
function usecode() {
    val = $('#input-code').val();
    $.ajax({
        url: '/Product/GetCodeSale',
        type: 'post',
        datatype: 'json',
        data: {
            val: val
        },
        success: function (res) {
            $(res).each(function (idex, item) {
                alert("Sản phẩm sẽ được giảm " + item.Discount * 100 + "%");
                disc= item.Discount * 100
                calc = calc * (1 - item.Discount);
                lasttotal = calc + shipping
                $('#provisional-price').text(calc.toLocaleString());
                $('#total').text(lasttotal.toLocaleString());
            })
        },
    })
}
function PaySuccess() {
    var Name = $('#customer-name-input').val();
    var Email = $('#customer-Email-input').val();
    var Address = $('#customer-contact-address').val();
    var NumberPhone = $('#customer-contact-phone').val();
    var obj = new Object();
    obj = {
        Name: Name,
        Email: Email,
        Address: Address,
        NumberPhone: NumberPhone,
        discount: disc,
        subtotal: calc,
        total: lasttotal,
    }
    var pro = JSON.stringify(cart);
    $('#custom-form').validate({
        rules: {
            username: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            address: {
                required: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 10
            },
        },
        messages: {
            username: {
                required: 'Vui lòng nhập Họ tên'
            },
            email: {
                required: 'Vui lòng nhập Email',
                email: 'Email sai định dạng'
            },
            address: {
                required: 'Vui lòng nhập địa chỉ'
            },
            phone: {
                required: 'Vui lòng nhập số điện thoại',
                minlength: 'Số điện thoại không đúng định dạng'
            }
        },
        submitHandler: function (form) {
            $.ajax({
                url: '/Product/InfoCustomer',
                type: 'post',
                data: '{customer:' + JSON.stringify(obj) + ',pro:' + pro + '}',
                contentType: 'application/json; charset=utf-8',
                //processData: false,
                //async: false,
                dataType: 'json',
                success: function (res) {
                    if (res.status == 200) {
                        window.location.assign('/Product/Confirm');
                        localStorage.clear();
                        window.localStorage.setItem("price", "0");
                        localStorage.setItem("items", "[]");
                    }
                },
                error: function () {
                    alert("Lỗi!");
                }
            })
        }
    })
}