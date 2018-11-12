console.log('js');

let clickCounter = 0 ;

$(document).ready(readyJQ);

function readyJQ() {
    console.log('jQ rdy');
    $('#btnGenerate').on('click', createDiv);
    $('#btnGenerate').parent().on('click', '.changeColor', changeColorFn);
    $('#btnGenerate').parent().on('click', '.deleteDiv', deleteDiv);

}

function createDiv(){
    clickCounter ++;
    $(this).parent().append(`
    <div class="divClass" data-tnf="1">
        <p>${clickCounter}<p>
        <button class="changeColor">Swap</button>
        <button class="deleteDiv">Delete</button>
    </div>`);
}

function changeColorFn(){
    
    console.log('in Change Color');
    if ($(this).parent().parent().data('tnf') == '1'){
        console.log('is clicked');
        $(this).parent().parent().css('background-color', 'yellow');
        $(this).parent().parent().data('tnf', '0');
    } else if ($(this).parent().parent().data('tnf') == '0'){
        $(this).parent().parent().css('background-color', 'red');
        $(this).parent().parent().data('tnf', '1');
    }
}

function deleteDiv(){
    $(this).parent().parent().remove()
}