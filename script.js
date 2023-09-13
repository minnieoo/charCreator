

const baseBody = $('.baseBody');
const eyes = $('.eyesPick');
const brows = $('.browPick')
const lips = $('.lipPick')
const hair = $('.hairPick');
const tops = $('.topPick');

const minCol = $('.minCol');
const modal = $('.modal');
const randomize = $('.fa-dice');
const coWheel = $('.colorwheel');

$(".skinBlob").click(function() {
    // Get the "alt" attribute of the clicked image
    const skinPick = $(this).attr("alt");


    
    // Log the alt text to the console
    console.log(`Selected Skin Tone: ${skinPick}`);

    baseBody.attr("src", `/images/skin colors/skin_${skinPick}.png`);
});

$(".eyeCh").click(function() {

    const eyePick = $(this).attr("alt");

    eyes.attr("src", `/images/eyes/eye_${eyePick}.png`);

    minCol.click(function() {
        const minAlt = $(this).attr("alt");
        eyes.attr("src", `/images/eyes/eye_${eyePick}_${minAlt}.png`);
    });

});

$(".browCh").click(function() {

    const browPick = $(this).attr("alt");

    brows.attr("src", `/images/eyes/brows/brow_${browPick}.png`);

});

$(".lipCh").click(function() {

    const lipPick = $(this).attr("alt");

    lips.attr("src", `/images/lips/lip${lipPick}.png`);

});

$(".hairCh").click(function() {

    const hairPick = $(this).attr("alt");

    hair.attr("src", `/images/hair/hair_${hairPick}.png`);

});

$(".topCh").click(function() {

    const topPick = $(this).attr("alt");

    tops.attr("src", `/images/tops/top_${topPick}.png`);

});


randomize.click(function() {

    const browsImages = [
        '/images/eyes/brows/browcon/browcon_01.png',
        '/images/eyes/brows/browcon/browcon_02.png',
        '/images/eyes/brows/browcon/browcon_03.png',
        '/images/eyes/brows/browcon/browcon_04.png',
        '/images/eyes/brows/browcon/browcon_05.png'
    ];

    brows.src = browsImages[getRandomInt(0, browsImages.length - 1)];
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* MODAL FUNCTIONALITY */

coWheel.click(function() {
    modalOpen();
});

// coWheel.click(function() {
//     const colAlt = $(this).attr("alt");

//     switch(colAlt){
//         case 'eye':
//             modalOpen();
//             minCol.click(function() {
//                 const minAlt = $(this).attr("alt");
//                 console.log(minAlt);
//                 eyes.attr('src', `/images/eyes/eye_01_${minAlt}.png`);
//             });
//             break;
            
//     }
// });

// function getColor() {

//     minCol.click(function() {
//         const minAlt = $(this).attr("alt");
//     });
// }

function modalOpen() {
    $('.modal').toggleClass('modal-show');

}

$('.fa-circle-xmark').click(function() {
    modalOpen();
});

