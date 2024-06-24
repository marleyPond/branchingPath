function loadContent() {
    window['now'] = getNow();
    window['json'] = prepareJSON();
    window['current'] = 0;
    window['final'] = json['all'].length-1;
    window['filterData'] = [];
    window['galleryDisplayAmount'] = 9;
    loadBlogs(json, "none");

 }

function getNow() {
    var today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
}

function filterUpdate(v){
    current = "1";
    final = json['all'].length-1;
    loadBlogs(json, v);
}

function tryLeft() {
    current = Math.max(current-galleryDisplayAmount, 0);
    loadBlogs(null);
}

function tryRight() {
    current = Math.min(current + galleryDisplayAmount, final);
    loadBlogs(null);
}

/* 
HowTo: Prep for releasing without early release 
if(isReleased(now, 20240111)){blogStack += decorateTitle(`Attention To Derail`, `attentionToDerail`)};
//yyyymmdd
*/ 
function isReleased(now, releaseDate){
    //console.log(now + " " + releaseDate);
    if(now - releaseDate >= 0){return true};
    return false;
}

function loadBlogs(data, filter) {
    var blogStack = ``;
    

    if(data === null){  //bypass
        if(current >= final) return;
        for(var i = current; i < Math.min(current + galleryDisplayAmount, final); i++){
            blogStack += decorateTitle(filterData[i].title, filterData[i].fileName, filterData[i].imageCategoryName);
        };
        blogStack = addEmptyFigures(blogStack, 2); //buffer, leave for max columns-1
        document.getElementById("blog-content").innerHTML = wrapInGrid(blogStack);
        return;
    }

    var allData = data.all;
    var filterArgs = d => now - d.releaseDate >= 0 && (filter == 'none' || filter == d.imageCategoryName);
    filterData = allData.filter(filterArgs);
    final = filterData.length;
    current = 0;
    /*load new blogs to top of list*/

    for(var i = 0; i < Math.min(6,final); i++){
        blogStack += decorateTitle(filterData[i].title, filterData[i].fileName, filterData[i].imageCategoryName);
    };

    blogStack = addEmptyFigures(blogStack, 2); //buffer, leave for max columns-1
    document.getElementById("blog-content").innerHTML = wrapInGrid(blogStack);
}

function prepareJSON() {    //top-down based on release!!
    return {
        "all": 
        [
            {
                "id": "2",
                "title": "Transactional Relationship Dynamics", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryRomancingPath"
            },
            {
                "id": "1",
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240621, 
                "fileName": "branchingPathology1", 
                "imageCategoryName": "galleryBranchingPathology"
            }
        ]
    };
}

function DEBUGprepareJSON() {
    return {
        "all": 
        [
            {
                "id": "10",
                "title": "DEBUG 10", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryBranchingPathology"
            },
            {
                "id": "9",
                "title": "DEBUG 9", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryBranchingPathology"
            },
            {
                "id": "8",
                "title": "DEBUG 8", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryBranchingPathology"
            },
            {
                "id": "7",
                "title": "DEBUG 7", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryRomancingPath"
            },
            {
                "id": "6",
                "title": "DEBUG 6", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryRomancingPath"
            },
            {
                "id": "5",
                "title": "DEBUG 5", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryBranchingPathology"
            },
            {
                "id": "4",
                "title": "DEBUG 4", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryBranchingPathology"
            },
            {
                "id": "3",
                "title": "DEBUG 3", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryRomancingPath"
            },
            {
                "id": "2",
                "title": "DEBUG 2", 
                "releaseDate": 20240622, 
                "fileName": "romancingPath1", 
                "imageCategoryName": "galleryRomancingPath"
            },
            {
                "id": "1",
                "title": "DEBUG 1", 
                "releaseDate": 20240621, 
                "fileName": "branchingPathology1", 
                "imageCategoryName": "galleryBranchingPathology"
            }
        ]
    };
}

function addEmptyFigures(n, i) {
    while (i != 0){
        n = n + `
        <figure class="textover"></figure>`;
        i--;
    }
    return n;
}

function wrapInGrid(n) {
    return `<div class="grid">`+ n + `</div>`;
}

//keep as drop example
function loadPoems(now) {
    var blogStack = ``;
    var i = ``;
    var t = ``;
    /*load new poems to top of the list*/
    //blogStack += decoratePoem(`Time Traveler`, `timeTraveler`);

    blogStack += decoratePoem(`Canary in the Swole Mind`, 'poem-canaryInTheSwoleMind');

    i += `<hr/>`;
    i += decoratePoem('Memories Of The Future', 'saccadicMaskMemoriesOfTheFuture');
    i += decoratePoem('Savoir Faire', 'saccadicMaskSavoirFaire');
    i += decoratePoem('Ground Down', 'saccadicMaskGroundDown');
    i += decoratePoem('Hearing In Tongues', 'saccadicMaskHearingInTongues');
    i += decoratePoem('Parasocialite', 'saccadicMaskParasocialite');
    i += decoratePoem('Doppelgangbusters', 'saccadicMaskDoppelgangbusters');
    i += decoratePoem('Hex Decibel System', 'saccadicMaskHexDecibelSystem');
    i += decoratePoem('Saccadic Mask', 'saccadicMaskSaccadicMask');
    i += decoratePoem('Violence Nashi', 'saccadicMaskViolenceNashi');
    i += decoratePoem('Sunglasses Half Full', 'saccadicMaskSunglassesHalfFull');
    i += `<hr/>`;
    t += `<div class="sleeve"><button id="smButton">Saccadic Mask &#x1F4A7</button><div id="smClass" style="display: none; margin-left: 40px;">` + i + `</div></div>`;
    blogStack += t;

    /*Load list into html, thus making them searchable */
    document.getElementById("poetry-content").innerHTML = blogStack;

    /*Now can add event listeners, tweak, ext.*/
    document.getElementById('smButton').addEventListener("click", toggleSM);
}

function decorateTitle(s, l, c) {
    return `<figure class="textover">
                <a href="/blog/html/`+l+`.html">
                <img src="images/`+c+`.png" alt="alt">
                <figcaption>`+s+`</figcaption>
                </a>
            </figure>`;
}

function emptyTile(c) {
    return  `<figure class="textover">
                <a href="#">
                <img src="images/`+c+`.png" alt="alt">
                <figcaption>`+`test title`+`</figcaption>
                </a>
            </figure>`
}

function decorateOldTitle(s, l, c) {
    return `<p>
            <a href="/blog/html/`+l+`.html">
                `+s+`
            </a>
        </p>`;
}

function toggleSM() {   //for drop class above
    var v = document.getElementById('smClass');
    if(v.style.display == "none"){
        v.style.display = "block";
    }else{
        v.style.display = "none";
    }
}