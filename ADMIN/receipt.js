$(document).ready(function() {
    var height = $(".tb-bill-child").height();
    console.log(height);
    if (height >= 300)
        $(".tb-bill-child").css("overflow-y", "auto");
    //call api list order 
    function callApi(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                html = data.map((item, index) => {
                    return `<tr>
                                <th scope="row">
                                    ${index+1}
                                </th>
                                <td>${item.id}</td>
                                <td>${item.receiver.name}</td>
                                <td>${item.createdAt}</td>
                                <td>${(item.status==1)?'<span>Đã xử lý</span>':'<span style="color: red;">Chưa xử lý</span>'}</td>
                                <td>${item.total}</td>
                                <td>
                                    <button class="btn-delete">Xóa</button>
                                    <button class="btn-detail-order" onClick="viewDetailOrder('${item.id}')">Xem Chi Tiết</button>
                                </td>
                        </tr>`
                })
                $("#tb-receipt").append(html);
            })
    }
    callApi("http://localhost:3000/receipt")

    //call api provice,district,ward  
    fetch("https://provinces.open-api.vn/api/p")
        .then((response) => response.json())
        .then((json) => {
            html = json.map((item) => {
                return `<option value="${item.code}">${item.name}</option>`;
            });
            $(".province").append(html);
        });
    $(".province").change(async function() {
        var val = $(this).children("option:selected").val();
        if (val != "") {
            fetch(`https://provinces.open-api.vn/api/p/${val}?depth=2`)
                .then((response) => response.json())
                .then((json) => {
                    html = json.districts.map((item) => {
                        return `<option value="${item.code}" dataType="${item.division_type}" dataName="${item.codename}">${item.name}</option>`;
                    });
                    changDistrict();
                    $(".district").html(op + html);
                    changWard();
                })
            codep = val;
        } else {
            changDistrict();
            changWard();
        }
    });
    $(".district").change(function() {
        var val = $(this).children("option:selected").val();
        type = $(this).children("option:selected").attr("dataType");
        nameDistrict = $(this).children("option:selected").attr("dataName");
        if (val != "") {
            fetch(`https://provinces.open-api.vn/api/d/${val}?depth=2`)
                .then((response) => response.json())
                .then((json) => {
                    html = json.wards.map((item) => {
                        return `<option value="${item.code}">${item.name}</option>`;
                    });
                    changWard();
                    $(".ward").html(op1 + html);
                });
        } else changWard();
    });

    function changDistrict() {
        op = `<option selected value="">Chọn Quận/Huyện</option>`;
        $(".district").html(op);
    }

    function changWard() {
        op1 = `<option selected value="">Chọn Phường/Xã</option>`;
        $(".ward").html(op1);
    }
    //them san pham
    var data = [{
        id: 0,
        text: '<div style="color:green">enhancement</div>',
        html: `<div class="select-choice-pro d-flex justify-content-between">
                    <div class="d-flex align-items-start">
                        <img class="img-food-choice" src="https://images.foody.vn/res/g103/1026438/prof/s280x175/image-7d6e98f0-211021131358.jpeg" alt="">
                        <span class="name-food">Kẹo bông gòn</span>
                    </div>
                    <div class="price-number">
                        <span class="price d-block text-end">30000</span>
                        <span class="number-sell">Có thể bán:9</span>
                    </div>
             </div>`,
        title: 'enchancement'
    }, {
        id: 0,
        text: '<div style="color:green">enhancement</div>',
        html: `<div class="select-choice-pro d-flex justify-content-between">
                    <div class="d-flex align-items-start">
                        <img class="img-food-choice" src="https://images.foody.vn/res/g103/1026438/prof/s280x175/image-7d6e98f0-211021131358.jpeg" alt="">
                        <span class="name-food">Kẹo bông gòn</span>
                    </div>
                    <div class="price-number">
                        <span class="price d-block text-end">30000</span>
                        <span class="number-sell">Có thể bán:9</span>
                    </div>
             </div>`,
        title: 'enchancement'
    }, {
        id: 0,
        text: '<div style="color:green">enhancement</div>',
        html: `<div class="select-choice-pro d-flex justify-content-between">
                    <div class="d-flex align-items-start">
                        <img class="img-food-choice" src="https://images.foody.vn/res/g103/1026438/prof/s280x175/image-7d6e98f0-211021131358.jpeg" alt="">
                        <span class="name-food">Kẹo bông gòn</span>
                    </div>
                    <div class="price-number">
                        <span class="price d-block text-end">30000</span>
                        <span class="number-sell">Có thể bán:9</span>
                    </div>
             </div>`,
        title: 'enchancement'
    }, {
        id: 0,
        text: '<div style="color:green">enhancement</div>',
        html: `<div class="select-choice-pro d-flex justify-content-between">
                    <div class="d-flex align-items-start">
                        <img class="img-food-choice" src="https://images.foody.vn/res/g103/1026438/prof/s280x175/image-7d6e98f0-211021131358.jpeg" alt="">
                        <span class="name-food">Kẹo bông gòn</span>
                    </div>
                    <div class="price-number">
                        <span class="price d-block text-end">30000</span>
                        <span class="number-sell">Có thể bán:9</span>
                    </div>
             </div>`,
        title: 'enchancement'
    }, {
        id: 0,
        text: '<div style="color:green">enhancement</div>',
        html: `<div class="select-choice-pro d-flex justify-content-between">
                    <div class="d-flex align-items-start">
                        <img class="img-food-choice" src="https://images.foody.vn/res/g103/1026438/prof/s280x175/image-7d6e98f0-211021131358.jpeg" alt="">
                        <span class="name-food">Kẹo bông gòn</span>
                    </div>
                    <div class="price-number">
                        <span class="price d-block text-end">30000</span>
                        <span class="number-sell">Có thể bán:9</span>
                    </div>
             </div>`,
        title: 'enchancement'
    }, {
        id: 0,
        text: '<div style="color:green">enhancement</div>',
        html: `<div class="select-choice-pro d-flex justify-content-between">
                    <div class="d-flex align-items-start">
                        <img class="img-food-choice" src="https://images.foody.vn/res/g103/1026438/prof/s280x175/image-7d6e98f0-211021131358.jpeg" alt="">
                        <span class="name-food">Kẹo bông gòn</span>
                    </div>
                    <div class="price-number">
                        <span class="price d-block text-end">30000</span>
                        <span class="number-sell">Có thể bán:9</span>
                    </div>
             </div>`,
        title: 'enchancement'
    }, {
        id: 0,
        text: '<div style="color:green">enhancement</div>',
        html: `<div class="select-choice-pro d-flex justify-content-between">
                    <div class="d-flex align-items-start">
                        <img class="img-food-choice" src="https://images.foody.vn/res/g103/1026438/prof/s280x175/image-7d6e98f0-211021131358.jpeg" alt="">
                        <span class="name-food">Kẹo bông gòn</span>
                    </div>
                    <div class="price-number">
                        <span class="price d-block text-end">30000</span>
                        <span class="number-sell">Có thể bán:9</span>
                    </div>
             </div>`,
        title: 'enchancement'
    }, {
        id: 1,
        text: 'bug',
        html: '<div><small>This is some small text on a new line</small></div>',
    }];

    $('.js-example-basic-single').select2({
        placeholder: "Tìm kiếm sản phẩm",
        allowClear: true,
        data: data,
        escapeMarkup: function(markup) {
            return markup;
        },
        templateResult: function(data) {
            return data.html;
        },
        templateSelection: function(data) {
            return data.text;
        }
    });
});

function addReceipt() {
    $(".overlay").addClass("showOverLay");
    $(".content-admin").addClass("hide-scroll");
}

//Xem chi tiết

async function viewDetailOrder(obj) {
    await fetch(`http://localhost:3000/receipt/${obj}`)
        .then(res => res.json())
        .then(data => {
            $(".code-bill").children("span").html(data.id);
            $(".create-date").html(data.createdAt);
            html = data.items.map((item, index) => {
                return `<tr>
                            <td><span>${index+1}</span></td>
                            <td class="td-food-name"><span>${item.itemName}</span></td>
                            <td><span>${item.price}</span><span>đ</span></td>
                            <td><input class="number-food-order" type="number" name="" id="" value="${item.number}"></td>
                            <td><span>${item.totalValue}</span><span>đ</span></td>
                        </tr>`
            })
            $("#tb-ordered-food").find("tbody").html(html);
            $("#total-price").html(data.total);
            $("input[name=customer-name]").val(data.receiver.name);
            $("input[name=customer-phone]").val(data.receiver.phone);
            Local(data);
            $("input[name=customer-add]").val(data.receiver.address);
            $("select.status-order").val(data.status).change();
            $("select.payment").val(data.payments).change()
            $("input[name=creator]").val(data.creator);
        })
    $(".overlay").addClass("showOverLay");
    $(".content-admin").addClass("hide-scroll");
}

async function Local(data) {
    let provinceId = "",
        districtId = "";
    $("select.province option").each(async function() {
        if ($(this).text() == data.receiver.city) {
            provinceId = $(this).val()
            $(".province").val(provinceId).change();
        }
    })
    await resolveAfter1(provinceId)
    $(".district option").each(function() {
        if ($(this).text() == data.receiver.district) {
            districtId = $(this).val()
            $(".district").val($(this).val()).change()
        }
    })
    await resolveAfter2(districtId)
    $(".ward option").each(function() {
        if ($(this).text() == data.receiver.ward) {
            $(".ward").val($(this).val()).change()
        }
    })
}

async function resolveAfter1(val) {
    await fetch(`https://provinces.open-api.vn/api/p/${val}?depth=2`)
}
async function resolveAfter2(val) {
    await fetch(`https://provinces.open-api.vn/api/d/${val}?depth=2`)
}

//lựa chọn sản phẩm 
$('#inp-select-pro').click(function(e) {
    e.preventDefault();
    $(".tb-choice-pro").show();
});