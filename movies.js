$(document).ready(function(){
    $('#movie-form').on('submit', function(e){
        e.preventDefault();
        let title = $('#title').val();
        let rating = $('#rating').val();
        if(title.length>=2 &&rating <=10){
            let movieItem = `
            <div class="movie-item">
            <span>${title}-${rating}</span>
            <button class="remove-button">Remove</button>
            </div>

                `;
                $('#movie-list').append(movieItem);

                $('#title').val('');
                $('#rating').val('');
        }else{
            alert('Please enter a valid title and rating');
        }
    });

    $('#movie-list').on('click', '.remove-button', function(){
        $(this).parent().remove();

    });

});