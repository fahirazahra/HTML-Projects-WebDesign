$( function() {
    var availableName = [
        "Mohamad Syarifudin Efendi",
        "Raihan Bima",
        "Toyib Hidayat",
        "Fahira Zahra"
    ];
    $( "#nama" ).autocomplete({
        source: availableName,
    });

    $("input:radio").checkboxradio();
    $("#salutation").selectmenu();
    $( "#datepicker" ).datepicker({ dateFormat: 'dd-mm-yy' });
    $( "#tabs" ).tabs({disabled:[2]}).css({
        'min-height': '400px',
        'overflow': 'auto'
    });
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
} );

$( function() {
    $( ".simpan" ).click(function() {
        var nameValue = $("#nama").val();
        var img = $("#profileImage");
        var jobValue = $("#salutation option:selected").text();
        var genderValue = $('input[type="radio"]:checked').val();
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+(today.getFullYear()+5);
        var birthOfDateValue = $("#datepicker").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
        var addressValue = $("#addressText").val();
        $('.cardName').text(nameValue);
        $('.cardJob').text(jobValue);
        $('.detailName').text(nameValue);
        $('.detailGender').text(genderValue);
        $('.detailAddress').text(addressValue);
        $('.detailExpDate').text(date);
        $('.detailBoD').text(birthOfDateValue);
        if (genderValue == "Woman") {
            img.attr("src","photo.png");
        } else {
            img.attr("src","manphoto.png");
        }

        // Menampilkan animasi card
        $('.card').animate({left:100, opacity:"show"}, 1500);
        $('.card2').animate({right:100, opacity:"show"}, 1500);
    });


    $(".tab2").click(function() {
        alert("Under Development");
    });
} );