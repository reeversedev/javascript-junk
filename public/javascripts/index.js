$(document).ready(function() {
    $('#delete').on('click', function() {
        var id = $(this).attr('data-id')
        $.ajax({
            type: 'DELETE',
            url: '/support/remove/' + id,
            success: function(data) {
                location.reload();
            }
        })        
    })
})