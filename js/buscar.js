$(document).ready(function() {
    var user_id, opcion;
    //alert("edcdece");
    opcion = 2;

    $.ajax({
        url: "buscar.php",
        type: "POST",
        datatype: "json",
        data: { opcion: opcion },
        success: function(response) {
            $("#salida").html(response);

        }
    });

    $(document).on("keyup", "#txtbuscar", function() {

        user_id = $(this).val();
        // alert(user_id);
        opcion = 1;

        $.ajax({
            url: "buscar.php",
            type: "POST",
            datatype: "json",
            data: { opcion: opcion, user_id: user_id },
            success: function(response) {
                $("#salida").html(response);
            }
        });

    });

});