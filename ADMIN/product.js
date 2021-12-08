function outProduct(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            html = '';
            data.map((item, index) => {
                html += `<tr id='product-${item.id}'>
                            <th scope="row" >
                                ${index+1}
                            </th>
                            <td class="td-name-pro">${item.name}</td>
                            <td class="td-img-pro"><img src="${item.src}" alt=""></td>
                            <td>${item.categoryName}</td>
                            <td>${item.account}</td>
                            <td>${item.bPrice}</td>
                            <td>
                                <button class="btn-delete" onClick="deleteUser('${item.id}')">Xóa</button>
                                <button class="btn-update" onClick="updateUser('${item.id}',${url},)">Cập nhật</button>
                            </td>
                        </tr>`
            })
            $("#product-table").find("tbody").html(html);
        })
}
outProduct('http://localhost:3000/listData');


var src

function chooseFile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = async(e) => {
            src = e.target.result
            $("#show-image-file").css('visibility', 'visible')
            $("#show-image-file").attr('src', e.target.result)
        }
        reader.readAsDataURL(fileInput.files[0])
    }
};

//thêm sản phẩm
$("#form-pro").on("submit", function() {
    var formData = new FormData(this);
    // var files = $('input[type=file]');
    // for (var i = 0; i < files.length; i++) {
    //     if (files[i].value == "" || files[i].value == null) {
    //         return false;
    //     } else {
    //         formData.append('src', files[i].files[0]);
    //     }
    // }
    formData.append("sale", 11);
    $.ajax({
        type: "post",
        url: "http://localhost:3000/listData/",
        data: formData,
        mimeType: "multipart/form-data",
        contentType: false,
        cache: false,
        processData: false,
        success: function(response) {
            console.log(response);
        }
    });
})