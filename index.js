
$(document).ready(function(){

	$("#tbl").ready(function(){

		$.ajax({
			url:  'data/estudiantes.json',
			type: 'POST',
			dataType: 'json',
			data: {},
			beforSend: function(){
				$("#tbl").html("Obteniendo datos...");
			},
			success: function(data,textStatus, xhr){

				$("#tbl").empty();

				$("#tbl").append("<table class='table table-striped table-hover table-bordered'>");
				$("#tbl table").append("<tr>");
				$("#tbl table tr:last").append( $("<th>").html("Codigo"));
				$("#tbl table tr:last").append( $("<th>").html("Apellidos"));
				$("#tbl table tr:last").append( $("<th>").html("Nombres"));
				$("#tbl table tr:last").append( $("<th>").html("Nota"));
				$("#tbl table tr:last").append( $("<th>").html("Accion"));

				$.each(data, function(i,v){
				$("#tbl table").append("<tr>");
				$("#tbl table tr:last").append( $("<td>").html(v.Codigo));
				$("#tbl table tr:last").append( $("<td>").html(v.Apellidos));
				$("#tbl table tr:last").append( $("<td>").html(v.Nombres));
				$("#tbl table tr:last").append( $("<td>").html(v.Nota));
				$("#tbl table tr:last").append( $("<td>").html("<button href='#' data-id='{{ $user->id }}'class='btn btn-warning' data-toggle='tooltip' title='Editar'><i class='fa fa-edit'></i></button>&nbsp<button class='btn btn-danger' data-toggle='tooltip' title='Eliminar'><i class='fa fa-remove'></i></button>"));

			});
			},
			error: function(xhr, textStatus, errorThrown) 
			{
			$("#tbl").html("<div class= 'alert alert-danger' > Oops :(" + errorThrown + '</div>');

			}
		});

	});
});

