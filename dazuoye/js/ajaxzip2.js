
AjaxZip2 = function () {};
AjaxZip2.VERSION = '2.10';
AjaxZip2.JSONDATA = './js/data/';
AjaxZip2.CACHE = [];
AjaxZip2.prev = '';
AjaxZip2.zip2addr = function ( azip1, apref, aaddr, azip2, astrt, aarea ) {
    var fzip1 = AjaxZip2.getElementByName(azip1);
    var fzip2 = AjaxZip2.getElementByName(azip2,fzip1);
    var fpref = AjaxZip2.getElementByName(apref,fzip1);
    var faddr = AjaxZip2.getElementByName(aaddr,fzip1);
    var fstrt = AjaxZip2.getElementByName(astrt,fzip1);
    var farea = AjaxZip2.getElementByName(aarea,fzip1);
    if ( ! fzip1 ) return;
    if ( ! fpref ) return;
    if ( ! faddr ) return;
    var vzip = fzip1.value;
    if ( fzip2 && fzip2.value ) vzip += fzip2.value;
    if ( ! vzip ) return;
    var nzip = '';
    for( var i=0; i<vzip.length; i++ ) {
        var chr = vzip.charCodeAt(i);
        if ( chr < 48 ) continue;
        if ( chr > 57 ) continue;
        nzip += vzip.charAt(i);
    }
    if ( nzip.length < 7 ) return;
    var uniq = nzip+fzip1.name+fpref.name+faddr.name;
    if ( fzip1.form ) uniq += fzip1.form.id+fzip1.form.name+fzip1.form.action;
    if ( fzip2 ) uniq += fzip2.name;
    if ( fstrt ) uniq += fstrt.name;
    if ( uniq == AjaxZip2.prev ) return;
    AjaxZip2.prev = uniq;
    var func1 = function ( data ) {
        var array = data[nzip]
        var opera = (nzip-0+0xff000000)+"";
        if ( ! array && data[opera] ) array = data[opera];
        if ( ! array ) return;
        var pref_id = array[0];               
        if ( ! pref_id ) return;
        var jpref = AjaxZip2.PREFMAP[pref_id];  
        if ( ! jpref ) return;
        var jcity = array[1];
        if ( ! jcity ) jcity = '';          
        var jarea = array[2];
        if ( ! jarea ) jarea = '';           
        var jstrt = array[3];
        if ( ! jstrt ) jstrt = '';           

        var cursor = faddr;
        var jaddr = jcity;                    
        if ( fpref.type == 'select-one' || fpref.type == 'select-multiple' ) {
            var opts = fpref.options;
            for( var i=0; i<opts.length; i++ ) {
                var vpref = opts[i].value;
                var tpref = opts[i].text;
                opts[i].selected = ( vpref == pref_id || vpref == jpref || tpref == jpref );
            }
        } else {
            if ( fpref.name == faddr.name ) {
                jaddr = jpref + jaddr;
            } 
            
        }
        if ( farea ) {
            cursor = farea;
            farea.value = jarea;
        } else {
            jaddr += jarea;
        }
        if ( fstrt ) {
            cursor = fstrt;
            }
        }
        if ( ! cursor ) return;
        if ( ! cursor.value ) return;
        var len = cursor.value.length;
        cursor.focus();
        if ( cursor.createTextRange ) {
            var range = cursor.createTextRange();
            range.move('character', len);
            range.select();
        } else if (cursor.setSelectionRange) {
            cursor.setSelectionRange(len,len);
        }
    };

    var data = AjaxZip2.CACHE[zip3];
    if ( data ) return func1( data

            if ( ! req ) return;
            if ( ! req.responseText ) return;
            var json = AjaxZip2.getResponseText( req );
            data = eval('('+json+')');
            AjaxZip2.CACHE[zip3] = data;
            func1( data );
        };
        var opt = {
            method: 'GET',
            asynchronous: true,
            onComplete: func2
        };
        new Ajax.Request( url, opt );
    }
    else if ( window.jQuery ) {
        var func3 = function (data) {
            if ( ! data ) return;
            AjaxZip2.CACHE[zip3] = data;
            func1( data );
        };
        jQuery.getJSON( url, func3 );
    }
};

    var text = req.responseText;
    if ( navigator.appVersion.indexOf('KHTML') > -1 ) {
        var esc = escape( text );
        if ( esc.indexOf('%u') < 0 && esc.indexOf('%') > -1 ) {
            text = decodeURIComponent( esc );
        }
    }
    return text;
}
AjaxZip2.getElementByName = function ( elem, sibling ) {
    if ( typeof(elem) == 'string' ) {
        var list = document.getElementsByName(elem);
        if ( ! list ) return null;
        if ( list.length > 1 && sibling && sibling.form ) {
            var form = sibling.form.elements;
            for( var i=0; i<form.length; i++ ) {
                if ( form[i].name == elem ) {
                    return form[i];
                }
            }
        } else {
            return list[0];
        }
    }
    return elem;
}
