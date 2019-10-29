$(".devour").on("click", function(event) {

    event.preventDefault()
    var id = $(this).data("value");
    var devouredstate = $(this).data("devouredstate");

    console.log(devouredstate)
    var devourObj = {
        devoured: devouredstate
    }
    $.ajax("/burgers/update/" + id, {
        type: "PUT",
        data: devourObj
    }).then(function() {
        console.log("Changed devoured to", devouredstate);
        location.reload();
    })

    console.log(id)
})