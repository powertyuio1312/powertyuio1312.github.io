
var count=0;
function inc() {
    
    var like = document.getElementById('like');
    like.textContent= Number(like.textContent) + 1;

};


    // function Like(id){
    //     $.ajax({
    //         type: "POST",
    //         url: "like.php",
    //         data: "id=" + id,
    //         success: function(data){
    //             // alert(id);
    //         }
    //     });
    //     window.location.reload();
    //  }


    // (function(d,e,s){
    //     if( d.getElementById("likebtn_wjs") )
    //         return;
    //     a=d.createElement(e);
    //     m=d.getElementsByTagName(e)[0];
    //     a.async=1;
    //     a.id="likebtn_wjs";
    //     a.src=s;
    //     m.parentNode.insertBefore(a, m)
    // })
    // (document,"script","//w.likebtn.com/js/w/widget.js");

// $('.like').click( function() {

//             $.ajax({
//                 dataType: "json",
//                 url: 'response.php?action=like',                
//                 // действие, при ответе с сервера
//                 success: function(data){
//                     // в случае, когда пришло success. Отработало без ошибок
//                     if(data.result == 'success'){
//                         // увеличим визуальный счетчик               
//                         var count = parseInt(document.getElementById('likesCount').innerText);
//                         document.getElementById('likesCount').innerText=count+1;
//                         // Выводим сообщение
//                         alert(data.msg);
//                     }else{
//                         // вывод сообщения об ошибке
//                         alert(data.msg);
//                     }

//                 }
//             });

//         })
