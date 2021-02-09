function getdata() {
    $.ajax({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            if (res.status != 200) return alert('get data lose');
            var arr = res.data;
            var rows = [];
            $.each(arr, function(i, item) {
                rows.push('<li class="list-group-item"> <span class="badge" style="background-color: #5bc0de;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #f0ad4e;">评论人：' + item.username + '</span>' + item.content + '</li>')
            });
            $('#alllist').empty().append(rows.join(''));
        }
    })

}
getdata();
$('#formaddcmt').submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
        if (res.status != 201) return alert('post data lose');
        getdata();
        $('#formaddcmt')[0].reset();
    })

})