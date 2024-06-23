function loadContent() {
    var now = getNow();
    window['json'] = prepareJSON();

    loadBlogs(now, json, "none");

 }

function getNow() {
    var today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
}

function filterUpdate(v){
    loadBlogs(getNow(), json, v);
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

function loadBlogs(now, data, filter) {
    var blogStack = ``;
    /*load new blogs to top of list*/
    
    
    //blogStack += decorateTitle(`Transactional Relationship Dynamics`, `romancingPath1`, `galleryRomancingPath`);
    //blogStack += decorateTitle(`Active Listening and Reactive Narrative Design`, `branchingPathology1`, `galleryBranchingPathology`);

    data.forEach((item) => {
        if(isReleased(now, item.releaseDate)){
            if( filter == "none" || filter == item.imageCategoryName){
                blogStack += decorateTitle(item.title, item.fileName, item.imageCategoryName);
            }
        }
    });

    //test block
    if(true){
        if(filter == "none" || filter == `galleryBanashiPathCast`)
            blogStack += emptyTile(`galleryBanashiPathCast`);
        if(filter == "none" || filter == `galleryBlanchingPath`)
            blogStack += emptyTile(`galleryBlanchingPath`);
        if(filter == "none" || filter == `galleryBranchingKata`)
            blogStack += emptyTile(`galleryBranchingKata`);
        if(filter == "none" || filter == `galleryBrandingPath`)
            blogStack += emptyTile(`galleryBrandingPath`);
        if(filter == "none" || filter == `galleryBranchingLaugh`)
            blogStack += emptyTile(`galleryBranchingLaugh`);
        if(filter == "none" || filter == `galleryRanchingPath`)
            blogStack += emptyTile(`galleryRanchingPath`);
        if(filter == "none" || filter == `galleryAGatheringDarkly`)
            blogStack += emptyTile(`galleryAGatheringDarkly`);
    }

    blogStack = addEmptyFigures(blogStack, 2); //buffer, leave for max columns-1
    document.getElementById("blog-content").innerHTML = wrapInGrid(blogStack);
}

function prepareJSON() {    //top-down based on release!!
    return [
        
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
        
    ];
    //{"title": "", "releaseDate": , "fileName": "", "imageCategoryName": ""}
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