/**
 * Created by Administrator on 2016/11/1 0001.
 */
$(function(){
    $("#row1>div").off("click");
    $("#row1>div>a").on("click",function () {
        $("#row1>div").removeClass("active");
        $(this).parent().addClass("active");

    });
});