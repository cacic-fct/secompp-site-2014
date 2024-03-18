var ComingSoon = function () {

    return {
        //main function to initiate the module
        init: function () {

            $.backstretch([
    		        "assets/img/bg/1.jpg"
    		        ], {
    		          fade: 1000,
    		          duration: 10000
    		    });

            var austDay = new Date();
            //Janeiro = 0 (Por isso precisa do -1)
            //YYYY, MM -1, DD
            austDay = new Date(2014, 9 - 1, 1);
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());
        }

    };

}();