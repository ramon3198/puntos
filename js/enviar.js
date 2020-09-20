$(document).ready(function() {
    var campo, valor


    $("#enviar").click(function(event) {
        event.preventDefault()
        valor = $('#campo').val();
        $.ajax({
            url: "index.php",
            type: "POST",
            datatype: "json",
            data: { campo: valor },
            success: function(response) {
                $("#resultado").html(response);

            }
        });

    });







    var user_id, opcion;
    //alert("edcdece");
    // opcion = 2;
    /* 
        $.ajax({
            url: "buscar.php",
            type: "POST",
            datatype: "json",
            data: { opcion: opcion },
            success: function(response) {
                $("#salida").html(response);

            }
        });

        $(document).on("keypress", "#enviar", function() {

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
            }); */

    //});

});