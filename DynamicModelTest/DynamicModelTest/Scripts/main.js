$("#AddButton").click(function () {
    //make better:
    var studentCount = $(".removeStudent").length;

    $.ajax({
        url: '/Home/AddStudent',
        type: "GET",
        data: { count: studentCount},
        success: function (data) {
            $("#partialZone").html($("#partialZone").html() + data);
        }}
    );
});

$(".removeStudent").click(function (e) {
    //make better:
    var studentCount = $(".removeStudent").length;

    var id = $(this).data("id");
    $("#StudentElement" + id).remove();

    for (var i = parseInt(id) + 1; i < studentCount; i++) {
        $("#partialZone").find("#StudentElement" + i).attr("id", "StudentElement" + (i - 1));
        $("#partialZone").find("#Students_" + i + "__Name").attr("id", "Students_" + (i - 1) + "__Name")
                                                           .attr("name", "Students[" + (i - 1) + "].Name");
        $("#partialZone").find("#StudentElement" + (i - 1)).find(".removeStudent").attr("data-id", i - 1);
    }
})