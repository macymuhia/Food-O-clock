$(document).ready(function () {

    //Preloader
    $(window).on("load", function () {
        preloaderFadeOutTime = 2000;

        function hidePreloader() {
            var preloader = $('.preloader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });

//QRcode section
function generateQR() {
    var myinput = $ ("#myinput").val();
    new QRCode(document.getElementById("qrcode"), myinput);
}


    // This will style the form we currently have

    function food(name, price, total) {
        this.name = name;
        this.price = price;
        this.total = total;
    }

    $("#show14").click(function(){
        $("#show24").hide();
        $("#show34").hide();
        $(".2").hide();
        $(".3").hide();
        $(".4").hide();
        $(".1").animate({left:200, opacity:"show"}, 1500);
    })

    $("#show24").click(function(){
        $("#show34").hide();
        $("#show14").hide();
        $(".1").hide();
        $(".3").hide();
        $(".4").hide();
        $(".2").animate({left:200, opacity:"show"}, 1500);
    })

    $("#show34").click(function(){
        $("#show24").hide();
        $("#show14").hide();
        $(".1").hide();
        $(".2").hide();
        $(".4").hide();
        $(".3").animate({left:200, opacity:"show"}, 1500);
    })

    $("#press").click(function () {
        $(".4").animate({left:200, opacity:"show"}, 1500);
        var fName = $("#food option:selected").text();
        var fPrice = $("#food option:selected").val();
        var fPlate = $("#plate option:selected").val();
        var fTotal = fPlate * fPrice;
        var newFood = new food(fName, fPrice, fTotal);
        var bumaye = '<tr> <td id = "fooda">' + newFood.name + '</td>' + '<td id = "price">' + newFood.price + '</td>' + '<td id = "total">' + newFood.total + '</td></tr>'
        $("table tbody").append(bumaye);

        $("#pressed").last().click(function () {
            $('table thead th').each(function (i) {
                calculateColumn(i);
            });

            function calculateColumn(index) {
                var total = 0;
                $('table tr').each(function () {
                    var value = parseInt($('td', this).eq(index).text());
                    if (!isNaN(value)) {
                        total += value;
                    }
                });
                $('table tfoot td').eq(index).text('Total:' + total);
            }
        })
    })

$("#press1").click(function () {
    $(".4").animate({left:200, opacity:"show"}, 1500);
    var fName1 = $("#food1 option:selected").text();
    var fPrice1 = $("#food1 option:selected").val();
    var fPlate1 = $("#plate1 option:selected").val();
    var fTotal1 = fPlate1 * fPrice1;
    var newFood1 = new food(fName1, fPrice1, fTotal1);
    var bumaye1 = '<tr> <td id = "fooda">' + newFood1.name + '</td>' + '<td id = "price">' + newFood1.price + '</td>' + '<td id = "total">' + newFood1.total + '</td></tr>'
    $("table tbody").append(bumaye1);

    $("#pressed1").last().click(function () {
        $('table thead th').each(function (i) {
            calculateColumn(i);
        });

        function calculateColumn(index) {
            var total = 0;
            $('table tr').each(function () {
                var value = parseInt($('td', this).eq(index).text());
                if (!isNaN(value)) {
                    total += value;
                }
            });
            $('table tfoot td').eq(index).text('Total:' + total);
        }
    })
});

$("#press2").click(function () {
    $(".4").animate({left:200, opacity:"show"}, 1500);
    var fName2 = $("#food2 option:selected").text();
    var fPrice2 = $("#food2 option:selected").val();
    var fPlate2 = $("#plate2 option:selected").val();
    var fTotal2 = fPlate2 * fPrice2;
    var newFood2 = new food(fName2, fPrice2, fTotal2);
    var bumaye2 = '<tr> <td id = "fooda">' + newFood2.name + '</td>' + '<td id = "price">' + newFood2.price + '</td>' + '<td id = "total">' + newFood2.total + '</td></tr>'
    $("table tbody").append(bumaye2);

    $("#pressed2").last().click(function () {
        $('table thead th').each(function (i) {
            calculateColumn(i);
        });

        function calculateColumn(index) {
            var total = 0;
            $('table tr').each(function () {
                var value = parseInt($('td', this).eq(index).text());
                if (!isNaN(value)) {
                    total += value;
                }
            });
            $('table tfoot td').eq(index).text('Total:' + total);
        }
    })
});
});