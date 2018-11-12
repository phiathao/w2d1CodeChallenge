let clickCounter = 0 ;

$(document).ready(readyJQ);

function readyJQ() {
    $('#btnGenerate').on('click', createDiv);
    $('#btnGenerate').parent().on('click', '.changeColor', changeColorFn);
    $('#btnGenerate').parent().on('click', '.deleteDiv', deleteDiv);
}

function createDiv(){
    clickCounter ++;
    $(this).parent().append(`
    <div class="divClass" data-tnf="1">
        <p>${clickCounter}</p>
        <button class="changeColor">Swap</button>
        <button class="deleteDiv">Delete</button>
    </div>`);
}

function changeColorFn(){
    if ($(this).closest('.divClass').data('tnf') == '1'){
        $(this).closest('.divClass').css('background-color', 'yellow');
        $(this).closest('.divClass').data('tnf', '0');
    } else if ($(this).closest('.divClass').data('tnf') == '0'){
        $(this).closest('.divClass').css('background-color', 'red');
        $(this).closest('.divClass').data('tnf', '1');
    }
}

function deleteDiv(){
    $(this).parent().remove()
}