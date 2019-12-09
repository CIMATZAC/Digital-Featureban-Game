var campos_max = 2;   //max de 10 campos

var x = 0;
var noPlayer = 5;
$('#add_field').click(function (e) {
    e.preventDefault();     //prevenir novos clicks
    if (x < campos_max) {
        $('#listas').append("<div><input type='text' name='player-"+ noPlayer +"' required><a href=''#'' class='remover_campo'>Remover</a></div>");
        x++;
        noPlayer++;
    }
});
// Remover o div anterior
$('#listas').on("click", ".remover_campo", function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
});
