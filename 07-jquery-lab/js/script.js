
$(document).ready(function () {
    $('#submit-button').click(function () {
        let input = $("#skill-input");
        let ul = $('.dev-skills');
        if (input.val().length > 0) {
            ul.append(`<div class="list-Item">
                    <button id="removeDiv"></button>
                    <li id="list">${input.val()}</li>
                    </div>`);

            $('#list').css('font-size', '20px');
            $('#list').css('color', 'orange');
            $('#list').css('list-style-type', 'none');
            $('#list').css('border', '1px solid orange');
            $('#list').css('border-radius', '6px');


            $('#removeDiv').css('width', '30px');
            $('#removeDiv').css('height', '30px');
            $('#removeDiv').css('background-color', 'rgb(241, 80, 80)');
            $('#removeDiv').css('border', 'none');
        }
    });

    $(document).on('click', '#removeDiv', function () {
        $(this).parent('div').remove();
    });
});