document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    // Load existing comments from local storage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Display existing comments
    comments.forEach(comment => {
        displayComment(comment);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value.trim();
        const commentText = document.getElementById('comment').value.trim();

        if (username && commentText) {
            const comment = { username, commentText, date: new Date().toLocaleString() };
            comments.push(comment);

            // Save comments to local storage
            localStorage.setItem('comments', JSON.stringify(comments));

            // Display the new comment
            displayComment(comment);

            // Clear the form
            form.reset();
        }
    });

    function displayComment(comment) {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${comment.username}</strong> - ${comment.date}<br>
            ${comment.commentText}
        `;
        commentsList.appendChild(li);
    }
});
