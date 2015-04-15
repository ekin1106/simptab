
define([ "jquery", "mousetrap", "controlbar" ], function( $, Mousetrap, controlbar ) {

    "use strict";

    var CONTROL_KEY_MAP = [
        "book",
        "his",
        "app",
        "info",
        "down",
        "up",
        "set",
        "fav"
    ];

    function formatShortcut( key ) {

        var formatter = "",
            arr       = new Array( key.length );

        $.each( arr, function ( idx, value ) {

            if ( idx < key.length - 1 ) {
                formatter += key[idx] + " ";
            }
            else {
                formatter += key[idx];
            }

        });

        return formatter;
    }

    function listenControl() {

        $.each( CONTROL_KEY_MAP, function( idx, shortcut ) {
            var new_key = formatShortcut( shortcut );
            Mousetrap.bind( new_key , function() {
                console.log("click = " + shortcut.replace( / /g, "" ) );
                controlbar.AutoClick( idx );
            });
        });

    }

    return {
        Init: function () {
            listenControl();
        }
    };
});