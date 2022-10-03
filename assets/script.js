function CardClick(element, name, text1, src) {
    $("#myModal").modal("show");
    document.getElementById("title").innerHTML = name;
    document.getElementById("modal-d").innerHTML = text1;
    document.getElementById("image").src = src;
}
$(function () {
    $("#Cards").load("shorts/cards.html");
    $("#Modal").load("shorts/modal.html");
    $("#Nav").load("shorts/navbar.html");
});
