//tài khoản 
function rowTable(item, url, status) {
    return `<tr id='user-${item.id}'>
                <th scope="row" >
                    <input type="checkbox">
                </th>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>${item.email}</td>
                <td>${item.role}</td>
                <td key="${item.status}">${status}</td>
                <td>
                    <button class="btn-delete" onClick="deleteUser('${item.id}')">Xóa</button>
                    <button class="btn-update" onClick="updateUser('${item.id}','${url}','#form-staff')">Cập nhật</button>
                </td>
            </tr>`
}
//hiển thị tài khoản trên bảng 
function user(url) {
    var html = '';
    var str = '';
    fetch(url)
        .then(respon => respon.json())
        .then(data => {
            data.map(item => {
                str = '';
                (item.status == 1) ? str = '<span class="start-action">Hoạt động</span>': str = '<span class="off-action">Ngưng HĐ</span>'
                html += rowTable(item, url, str)
            })
            $("#user-table").find("tbody").html(html);
        })
}
user('http://localhost:3000/user/');
//show form them và sửa
$(".black").on('click', function() {
    $(".overlay").removeClass("showOverLay");
    $(".content-admin").removeClass("hide-scroll")
})

//xóa đi 1 user
function deleteUser(id) {
    $("#user-" + id).hide();
    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/user/${id}`,
        data: "data",
        dataType: "dataType",
        success: function(response) {
            alert("Thanh cong!");
        }
    });
}
//vai trò của user 
var role;
$('#select-role').change(function() {
    role = $(this).children("option:selected").val();
});

//thêm tài khoản user
function addShowForm() {
    $(".overlay").addClass("showOverLay");
    $(".content-admin").addClass("hide-scroll");
    $(".update-account").hide();
    $(".add-acount").show();
    $('#form-staff').find('.inp-info').find('input').val('');
}

$("#form-staff .add-acount").click(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $('#form-staff');
    url = 'http://localhost:3000/user'
    data = form.serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: data, // serializes the form's elements.
        success: function(data) {
            str = '';
            (data.status == 1) ? str = '<span class="start-action">Hoạt động</span>': str = '<span class="off-action">Ngưng HĐ</span>'
            $("#user-table").find("tbody").append(rowTable(data, url, str));
            $(".overlay").removeClass("showOverLay");
            $(".content-admin").removeClass("hide-scroll")
        }
    });
});
//cập nhật tài khoản
var idUpdate;
//url user
var urlUser = `http://localhost:3000/user/`

function updateUser(id, url, form) {
    showFormUpdate();
    idUpdate = id;
    $.ajax({
        type: "get",
        url: url + id,
        dataType: "json",
        success: function(response) {
            console.log(response);
            const formData = $(form);
            Object.entries(response).forEach(([key, value]) => {
                formData.find(`.inp-info input[name=${key}]`).val(value);
                formData.find(`select[name=${key}]`).val(value);
            });
            if (response.status == 1) {
                $('#status-on').prop("checked", true);
            } else
                $('#status-off').prop("checked", true);
        }
    });
}
$("#form-staff .update-account").click(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $('#form-staff');
    role = $('#select-role').children("option:selected").val();
    data = form.serialize()
    $.ajax({
        type: "PATCH",
        url: `http://localhost:3000/user/${idUpdate}`,
        data: data,
        success: function(data) {
            str = '';
            (data.status == 1) ? str = '<span class="start-action">Hoạt động</span>': str = '<span class="off-action">Ngưng HĐ</span>'
            string = `  <th scope="row" >
                         <input type="checkbox">
                        </th>
                        <td>${data.name}</td>
                        <td>${data.phone}</td>
                        <td>${data.email}</td>
                        <td>${data.role}</td>
                        <td key="${data.status}">${str}</td>
                        <td>
                            <button class="btn-delete" onClick="deleteUser('${data.id}')">Xóa</button>
                            <button class="btn-update" onClick="updateUser('${data.id}')">Cập nhật</button>
                        </td>`
            $("tr#user-" + data.id).html(string)
            $(".overlay").removeClass("showOverLay");
            $(".content-admin").removeClass("hide-scroll")
        }
    });
});
//hiển thị nút cập nhật và form cập nhật
function showFormUpdate() {
    $(".overlay").addClass("showOverLay");
    $(".content-admin").addClass("hide-scroll")
    $(".add-acount").hide();
    $(".update-account").show();
}




//category
function rowCate(item, urlCategory) {
    return `<tr id='category-${item.id}'>
                <th scope="row" >
                    <input type="checkbox">
                </th>
                <td id="name-category">${item.name}</td>
                <td>
                    <button class="btn-delete" onClick="deleteCate('${item.id}')">Xóa</button>
                    <button class="btn-update" onClick="updateUser('${item.id}','${urlCategory}','#form-category')">Cập nhật</button>
                </td>
            </tr>`
}


function category() {
    var html = '';
    var urlCategory = 'http://localhost:3000/cateChild/'
    fetch(urlCategory)
        .then(respon => respon.json())
        .then(data => {
            data.map(item => {
                html += rowCate(item, urlCategory);
            })
            $('#category-table').find('tbody').html(html)
        })
}
category();
//Tên danh mục hiện có
fetch("http://localhost:3000/category")
    .then(res => res.json())
    .then(data => {
        var html = '';
        data.map((item, index) => {
            index == 0 ? html += `<option value=${item.id} selected>${item.name}</option>` : html += `<option value=${item.id}>${item.name}</option>`
        })
        $("select[name=categoryId]").html(html);
    })

//thêm mới category 
$("#form-category .add-acount").click(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $('#form-category');
    var url = 'http://localhost:3000/cateChild/'
    data = form.serialize();
    console.log(data);
    $.ajax({
        type: "POST",
        url: url,
        data: data, // serializes the form's elements.
        success: function(data) {
            $("#category-table").find("tbody").append(rowCate(data, url));
            $(".overlay").removeClass("showOverLay");
            $(".content-admin").removeClass("hide-scroll")
        }
    });
});
//cập nhật category
$("#form-category .update-account").click(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $('#form-category');
    data = form.serialize()
    console.log(data);
    $.ajax({
        type: "PATCH",
        url: `http://localhost:3000/cateChild/${idUpdate}`,
        data: data,
        success: function(data) {
            str = '';
            string = ` <td>${data.name}</td>`
            $("tr#category-" + data.id).children('#name-category').html(string)
            $(".overlay").removeClass("showOverLay");
            $(".content-admin").removeClass("hide-scroll")
        }
    });
});

//xóa category
function deleteCate(id) {
    $("#category-" + id).hide();
    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/cateChild/${id}`,
        data: "data",
        dataType: "dataType",
        success: function(response) {
            alert("Thanh cong!");
        }
    });
}