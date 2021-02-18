/*
var postsRef;
var postArticle;
 // Read firestore data from database in the posts collection
 db.collection("posts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const posts = doc.data();
        article_url.href = posts.article_url;
        article_title.innerText = posts.article_title;
        article_caption.innerText = posts.article_caption;
    });
});
*/

const cafeList = document.querySelector('#cafe-list');

// create element and render cafe to the dom
function renderCafe(doc) {
    let li = document.createElement('li');
    let article_title = document.createElement('span');
    let article_caption = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    article_title.textContent = doc.data().article_title;
    article_caption.textContent = doc.data().article_caption;

    li.appendChild(article_title);
    li.appendChild(article_caption);

    cafeList.appendChild(li);

}

db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        // call the render function
        renderCafe(doc);
    } ) ;
});

