$(document).ready(function() {
    // GET request for posts
    $.get("http://localhost:3000/posts", function(posts) {
        console.log(posts); 
    
        // Accessing posts
        posts.forEach(post => {
            console.log(`Post ID: ${post.id}, Title: ${post.title}, Views: ${post.views}`);
        });
    });

    // GET request for comments
    $.get("http://localhost:3000/comments", function(comments) {
        console.log(comments); 
    
        // Accessing comments
        comments.forEach(comment => {
            console.log(`Comment ID: ${comment.id}, Text: ${comment.text}, Post ID: ${comment.postId}`);
        });
    });

    // GET request for profile
    $.get("http://localhost:3000/profile", function(profile) {
        console.log(profile); 
    
        // Accessing profile
        console.log(`Profile Name: ${profile.name}`);
    });

    // POST request to add a new post
    $.ajax({
        url: "http://localhost:3000/posts",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            title: "New Post Title",
            views: 150
        }),
        success: function(data) {
            console.log("Post created:", data);
        },
        error: function(xhr, status, error) {
            console.log("Error:", error);
        }
    });

    // PUT request to update a post
    $.ajax({
        url: "http://localhost:3000/posts/1", 
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify({
            id: "1",
            title: "Updated Post Title",
            views: 200
        }),
        success: function(data) {
            console.log("Post updated:", data);
        },
        error: function(xhr, status, error) {
            console.log("Error:", error);
        }
    });
});
