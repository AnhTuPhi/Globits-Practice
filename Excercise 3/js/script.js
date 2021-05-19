function load() {
    const input = document.getElementById('input').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const margin = document.getElementById('margin').value;
    var check = true;

    if (isNaN(input) && input != null) {
        document.getElementById('error-input').innerHTML = "Only number pls";
        check = false;
    }
    if (input <= 0 && input != null) {
        document.getElementById('error-input').innerHTML = "Fill input bigger than 0";
        check = false;
    }

    if (isNaN(width) && width != null) {
        document.getElementById('error-width').innerHTML = "Only number pls";
        check = false;
    }
    if (width <= 0 && width != null) {
        document.getElementById('error-width').innerHTML = "Fill width bigger than 0";
        check = false;
    }

    if (isNaN(height) && height != null) {
        document.getElementById('error-height').innerHTML = "Only number pls";
        check = false;
    }
    if (height <= 0 && height != null) {
        document.getElementById('error-height').innerHTML = "Fill height bigger than 0";
        check = false;
    }

    if (isNaN(margin) && margin != null) {
        document.getElementById('error-margin').innerHTML = "Only number pls";
        check = false;
    }
    if (margin <= 0 && margin != null) {
        document.getElementById('error-margin').innerHTML = "Fill margin bigger than 0";
        check = false;
    }
    /*If true, display element*/
    if (check) {
        if (input != null) {
            var html = '';
            let htmlspan = '';

            for(var index = 1; index <= input; index++){
                html+='<li></li>';
                htmlspan+='<span></span>';
            }

            document.getElementById('ulli').innerHTML = html;
            document.getElementById('span').innerHTML = htmlspan;
        }
        if (width != null) {
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');

            for(var index=0; index<li.length;index++){
                li[index].style.width = width + 'px';
            }
            for(var index=0; index<span.length;index++){
                span[index].style.width = width + 'px';
            }
        }
        if (height != null) {
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');

            for(var index=0; index<li.length;index++){
                li[index].style.height = height + 'px';
            }
            for(var index=0; index<span.length;index++){
                span[index].style.height = height + 'px';
            }
        }
        if (margin != null) {
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');

            for(var index=0; index<li.length;index++){
                li[index].style.margin = margin + 'px';
            }
            for(var index=0; index<span.length;index++){
                span[index].style.margin = margin + 'px';
            }
        }
    }
}