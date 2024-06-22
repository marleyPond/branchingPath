   function loadContent() {
   loadBlog();
 }

function loadBlog() {
    loadTitle();
    loadSubtitle();
    loadDate();
    loadBody();
}

function loadTitle() {
    var category = `<u>Romancin</u>g <u>Pat</u>h`;                          //ALTER THIS<~ 1/4
    document.getElementById('blog-title').innerHTML = 
    category;
}

function loadSubtitle() {
    var title = `Transactional Relationship Dynamics`;
    document.getElementById('blog-subtitle').innerHTML = 
    title;                                  //ALTER THIS<~ 2/4
}

function loadDate() {
    document.getElementById('blog-date').innerHTML = 
    `2024-06-22`;                                       //ALTER THIS<~ 3/4
}

function loadBody() {
    document.getElementById('blog-content').innerHTML =                 //ALTER THIS<~ 4/4
    `
    <p> 
    Relationships are a key component of stories and games. While the approach to modeling these relationships vary to a degree, the manner in which it is represented is usually one or a few variables which can be altered based on interactions. Over time, this can capture a feeling of relationship progression similar to other things in RPG's. Although I appreciate the positive aspects of reducing the complexity of modeling systems like experience gained down into an easily readable and rewarding system, I wonder if too many developers accept this system as a fundamental aspect of their developmental foundation rather than exploring the ways in which it could be tweaked, besides the further stratification into somewhat desperate parts. I will seek to explore and expand upon how the relationship systems are often modeled in games, as well as the impact that this kind of modeling may have on individuals and society, as well as possible ways to address it.</br></br>As in movies, there is a suspension of disbelief that people opt into when exploring a game that involves role-playing or captivating storytelling. As in dreams, things that are patently absurd in real life may become invisible in games, such as the disappearance of bodies, storing forty swords in your backpack, or running into identical people repeatedly. It is understood that it is not to be taken literally, and becomes a part of the learned understanding of games. That being said, it seems to me that the way in which it is often incorporated into games within the context of relationships is detrimental overall.</br></br>Laying bare the relationship variable alongside stats like brawling or foraging has an implicit message that this is to be taken with the same seriousness. Seeing a bar filling up and incrementing has deep associations, framing things as conditional, setting up relationships to be viewed as transactional, shallow experiences. Players will see relationships as reduced to solvable puzzles, to be optimized and then ground to glean the optimal result. There are many detracting things that fall out of this method. The transactional nature of the relationship becomes highlighted, and may encourage players to add it to a subconscious checklist, to be done serially like a chore; the interactions a means to an end. Although this is similar for many other things, like upgrading skills, this mechanical reduction comes at the expense of the present experience, or the bulk of what you are doing.</br></br>The implementation in this manner makes sense, as game development is complicated, and people look to established systems that will facilitate the creation and release of their game, and the minimization of complexity. I would argue that this leads to a disservice, and although it is easier to make games that keep people engaged, are they engaged in a way that they enjoy most of the time? Having relational representation as a sliding variable, it is clear that certain actions raise or lower it, and that at certain thresholds, a reward is to be expected for the progress. As games are ubiquitous, I am sure that there must be an impact on designing things in this way. If people grow up understanding relationships as being solvable outcomes, that not only sets people up to approach others with a less authentic mindset, it also may leave them frustrated when they have been performing what is believed to be the perceived causal behaviors, and their expectations are being violated when a relationship does not progress. How people relate to one another is a multi-factor problem, however it would be irresponsible to dismiss games, which is only increasing in the amount of time people engaging with it, could be altering societal understanding. The possible feed-forward cycle of being disenchanted by reality and seeking comfort in media ought not be swept under the rug.</br></br>Some games do have a more nuanced relationship system. Without getting into specifics (cite unseen!), I would like to explore briefly how relational system models could be improved from basic iterative experiential systems. Taking away the incentive to 'game the system' is crucial to bringing back humanity to the characters. This means the obscuring of and complicating of variables that drive relationships, giving characters their own separate drives, opinions, and dynamic histories, and decoupling their autonomy from the whims of the protagonist. As in many movies, the classic relationship system usually relies on toxic behaviors, which in real life would equate to love-bombing, stalking, and smothering. This makes sense, as these power-fantasies and idealistic romps are usually about amplifying the ideas they are playing with, and we are inspecting the distorted shadow on the wall rather than the figure. Just as this kind of manipulation takes advantage of how the mind works in many ways, with sunk cost fallacy, loss aversion, and dehumanization, it does so in sacrificing chances to more accurately reflect relationships, blunting the relational aspect and nuance.</br></br>It is difficult to design and develop games, even when building upon the tried and tested systems that have been in use. The time and cost of developing meaningful interactions that encourage the player to enjoy the experience rather than the imagined result, or the process more than the outcome, is more difficult to do. It requires more time on story development, writing, and design, while being more risky than creating something with a strong track record. Nonetheless, there is an old adage, you are what you eat. This has been bolstered by articles exploring the gut-brain axis and microbiome impact on mental and physical health. The same can be said of a society whose individuals are increasingly consuming content that objectifies others and frames relationships as transactional affairs with expected outcomes, where authenticity is waylaid by goal-based performative action, and where unsated expectation is met with a doubling down and further resolve. More games would be served in challenging the foundations of how relationships are modeled, and as we consume media that focuses more on the journey than the destination, our understanding of one another may change in kind.</br></br>

    </p>
    `;
}