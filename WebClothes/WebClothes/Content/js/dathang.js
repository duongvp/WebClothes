cart=JSON.parse(localStorage.getItem("items"))
function render() {
    // body... 
    $('#product-number').text(cart.length)
    if(cart.length==0)
    {
    	$('.product-number-title').text("Không có sản phẩm nào trong giỏ hàng!")
    }
    const html = cart.map((item, index) => `
			<div class="content-cart">
				<div class="img-item">
					<img src="${item.imageUrl}">
				</div>
				<div class="name-item">
					<p>${item.productName}</p>				
					<p><span>Cỡ</span>:<span>${item.size}</span></p> 
					<button class="btn-remove" onclick="onremove(`+index+`)">Remove</button>
				</div>
				<div class="amount-item ">
					<input type="number" name="" value="${item.number}" min="1"> 
				</div>
				<div class="price-item">
					<p><span>${item.productPrice}</span>đ</p>
				</div>
			</div>`).join('')
	$('.container-content-cart').html(html)
    var total=0
	for (var i = 0; i < cart.length; i++) {
		total += cart[i].number * Number(parseFloat(cart[i].productPrice.replace(/,/g, "")))
    }
    $('#total-price').text(total.toLocaleString());
	localStorage.setItem("items", JSON.stringify(cart))
	localStorage.setItem("price", JSON.stringify(total))	
}
function onremove(index) {
	// body...
	cart.splice(index,1)
	var ok=confirm("Bạn muốn xóa sản phẩm này ?")	
	if(ok==true)
	{
		render()
	}
}
render()



