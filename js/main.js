$(document).ready(function() {
    // SideNav Initialization
    $(".button-collapse").sideNav();
    // Select Initialization
    $('.mdb-select').material_select();

    tableRowRedirect();



});

function tableRowRedirect() {
    $(".clickable-row").click(function () {
        window.location = $(this).data("href");
    });
}
