/* =========================================
RANDOM OBJECTS
========================================= */

const randomObjects = [

"Rainbow",
"Umbrella",
"Potato",
"Toilet",
"Keyboard",
"Spoon",
"Cloud",
"Banana",
"Sock",
"Chair",
"Cactus",
"Pizza",
"Moon",
"Mirror",
"Pencil",
"Laptop",
"Coconut",
"Bottle",
"Phone",
"Book",
"Fan",
"Backpack",
"Clock",
"Pillow",
"Shoe",
"Guitar",
"Ice Cream",
"Coffee",
"Plant",
"Sun",
"Camera",
"Glasses",
"Watermelon",
"Bicycle",
"Headphones",
"Rocket",
"Teddy Bear",
"Candle",
"Key",
"Mango"

];

/* =========================================
IMAGE SEARCH
========================================= */

async function findObjectImage(objectName, imageId, placeholderId) {

const image =
    document.getElementById(imageId);

const placeholder =
    document.getElementById(placeholderId);


if (!objectName) {

    image.style.display = "none";

    placeholder.style.display = "block";

    return;

}


try {

    /*
        Wikimedia Commons image search
    */

    const apiURL =
        "https://commons.wikimedia.org/w/api.php" +

        "?action=query" +

        "&generator=search" +

        "&gsrsearch=" +
        encodeURIComponent(objectName) +

        "&gsrnamespace=6" +

        "&gsrlimit=1" +

        "&prop=imageinfo" +

        "&iiprop=url" +

        "&iiurlwidth=400" +

        "&format=json" +

        "&origin=*";


    const response =
        await fetch(apiURL);


    const data =
        await response.json();


    const pages =
        data.query?.pages;


    if (!pages) {

        image.style.display = "none";

        placeholder.textContent = "❓";

        placeholder.style.display = "block";

        return;

    }


    const page =
        Object.values(pages)[0];


    const imageInfo =
        page.imageinfo?.[0];


    if (!imageInfo) {

        return;

    }


    const imageURL =
        imageInfo.thumburl ||
        imageInfo.url;


    if (imageURL) {

        image.src = imageURL;

        image.onload = function () {

            image.style.display = "block";

            placeholder.style.display = "none";

        };

    }

}

catch (error) {

    console.log(
        "Image search error:",
        error
    );

}

}

/* =========================================
OBJECT 1 INPUT
========================================= */

document
.getElementById("object1")
.addEventListener("input", function () {

    const value =
        this.value.trim();


    findObjectImage(
        value,
        "image1",
        "placeholder1"
    );

});

/* =========================================
OBJECT 2 INPUT
========================================= */

document
.getElementById("object2")
.addEventListener("input", function () {

    const value =
        this.value.trim();


    findObjectImage(
        value,
        "image2",
        "placeholder2"
    );

});

/* =========================================
RANDOM INPUT
========================================= */

async function randomInput() {

let first;

let second;


do {

    first =
        randomObjects[
            Math.floor(
                Math.random() *
                randomObjects.length
            )
        ];


    second =
        randomObjects[
            Math.floor(
                Math.random() *
                randomObjects.length
            )
        ];

}

while (first === second);


/*
    Put random objects into inputs
*/

document
    .getElementById("object1")
    .value = first;


document
    .getElementById("object2")
    .value = second;


/*
    Find their images
*/

findObjectImage(
    first,
    "image1",
    "placeholder1"
);


findObjectImage(
    second,
    "image2",
    "placeholder2"
);


resetTest();

}

/* =========================================
COMPATIBILITY TEST
========================================= */

function testCompatibility() {

const object1 =
    document
        .getElementById("object1")
        .value
        .trim();


const object2 =
    document
        .getElementById("object2")
        .value
        .trim();



/* Empty input */

if (
    object1 === "" ||
    object2 === ""
) {

    alert(
        "Please enter TWO objects first."
    );

    return;

}



/* Same object */

if (
    object1.toLowerCase() ===
    object2.toLowerCase()
) {

    alert(
        "That's literally the same object. Choose two different objects."
    );

    return;

}



/*
    Hide test button
*/

document
    .getElementById("testButton")
    .style.display = "none";


/*
    Hide previous result
*/

document
    .getElementById("result")
    .classList
    .add("hidden");


/*
    Show loading
*/

document
    .getElementById("loading")
    .classList
    .remove("hidden");



/*
    Fake scientific analysis
*/

setTimeout(function () {


    document
        .getElementById("loading")
        .classList
        .add("hidden");


    document
        .getElementById("result")
        .classList
        .remove("hidden");



    /*
        Generate percentage
        between 50 and 99
    */

    const percentage =
        Math.floor(
            Math.random() * 50
        ) + 50;



    let title;

    let message;



    /* =========================
       95–99
    ========================= */


    if (percentage >= 95) {

        title =
            "SOULMATES 💘";


        message =
            `${object1} and ${object2} have an unbelievable connection. They were clearly made for each other.`;

    }



    /* =========================
       85–94
    ========================= */


    else if (percentage >= 85) {

        title =
            "WEIRDLY PERFECT 💕";


        message =
            `${object1} + ${object2} makes absolutely no sense. That's exactly why it works.`;

    }



    /* =========================
       75–84
    ========================= */


    else if (percentage >= 75) {

        title =
            "SUSPICIOUS CHEMISTRY 🤨";


        message =
            `There is definitely something happening between ${object1} and ${object2}. Scientists refuse to investigate.`;

    }



    /* =========================
       65–74
    ========================= */


    else if (percentage >= 65) {

        title =
            "JUST FRIENDS 🥲";


        message =
            `${object1} likes ${object2}, but apparently only as a friend. This relationship is complicated.`;

    }



    /* =========================
       55–64
    ========================= */


    else if (percentage >= 55) {

        title =
            "TOXIC RELATIONSHIP ☠️";


        message =
            `${object1} and ${object2} should probably stay three metres apart. Something feels wrong.`;

    }



    /* =========================
       50–54
    ========================= */


    else {

        title =
            "ABSOLUTE DISASTER 💀";


        message =
            `We strongly recommend separating ${object1} and ${object2}. This experiment should never have happened.`;

    }



    /*
        Display result
    */

    document
        .getElementById("percentage")
        .textContent =
        percentage + "%";


    document
        .getElementById("resultTitle")
        .textContent =
        title;


    document
        .getElementById("resultText")
        .textContent =
        message;



    /*
        Animate meter
    */

    setTimeout(function () {

        document
            .getElementById("meterFill")
            .style.width =
            percentage + "%";

    }, 100);


}, 2000);

}

/* =========================================
RESET
========================================= */

function resetTest() {

document
    .getElementById("result")
    .classList
    .add("hidden");


document
    .getElementById("loading")
    .classList
    .add("hidden");


document
    .getElementById("testButton")
    .style.display =
    "block";


document
    .getElementById("meterFill")
    .style.width =
    "0%";

}