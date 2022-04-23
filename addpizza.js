let posts = [];
let postsHtml = `<p>no posts yet</p>`;
let root = window.document.getElementById('root');

function addItem() {
    let postTitle = window.document.getElementById('postTitle').value;
    let postDescription = window.document.getElementById('postDescription').value;

    if (postTitle != '' && postDescription != '') {
        let tempPost = {
            postTitle: postTitle,
            postDescription: postDescription
        };
        posts.push(tempPost);
        // console.log(posts);

        postsHtml = posts.map(x => `<div class="post"><h3>${x.postTitle}</h2><p>${x.postDescription}</p></div>`).join('');
        console.log(postsHtml);

        window.document.getElementById('postTitle').value = '';
        window.document.getElementById('postDescription').value = '';
        let markup =   `<h2>My Blog posts:</h2>`;
        root.innerHTML = markup+postsHtml;
    } else {
        console.log('invalid input');
    }
}
window.addEventListener("keydown", event => {
    if (event.code === 'Enter') {
        addItem();
    }
});

root.innerHTML = postsHtml;
