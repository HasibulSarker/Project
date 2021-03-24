//  Start Of JavaScript  //

const a = "Data/about.txt";

const b = "Posts/post.txt";

const c = "Posts/post2.txt";

function getdata(link) {

    const b = link;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", b);

    xhr.send();

    xhr.onload = function () {

        const c = xhr.responseText;

        const d = document.getElementById("container");
        d.innerHTML = c;

    }

}

document.querySelector('body').addEventListener("dblclick", function () {

    let head = document.querySelector("head").innerHTML;

    let newhead = '<link rel="stylesheet" href="css/style-old.css">';

    head += newhead;

    document.querySelector("head").innerHTML = head;
})

// End of Javascript //