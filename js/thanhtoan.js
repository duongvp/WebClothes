cart = JSON.parse(localStorage.getItem("items"))
total = JSON.parse(localStorage.getItem("price"))
$(document).ready(function() {
    $('.content-visa').hide()
    const change = cart.map((item, idex) => `
		<tr>
			<td class="img-product-table"><img src="${item.imageUrl}"></td>
			<td class="product-name-table"><p>${item.productName}</p></td>
		</tr>`).join('')
    $('.product-table').html(change)
    $('#provisional-price').text(total.toLocaleString())
    const shipping = parseInt('30000')
    $('#ship').text(shipping.toLocaleString())
    $('#total').text((total + shipping).toLocaleString());
    $('#paymoney1').prop( "checked", true )

});

function paymoney(a) {
    if (a == 1) {
        $('.content-visa').slideUp(300)
    } else {
        $('.content-visa').slideDown(500)
    }

}