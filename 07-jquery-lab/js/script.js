
$(document).ready(function () {

    $('#submit-button').click(function () {
        let input = $("#skill-input");
        let ul = $('.dev-skills');
        if (input.val().length > 0) {
            ul.append(`<div class="list-Item">
                    <button id="removeDiv">Remove</button>
                    <li>${input.val()}</li>
                    </div>`);
        }

    });

    $(document).on('click', '#removeDiv', function () {
        console.log("fucking remove")
        $(this).parent('div').remove();
    });
});