const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const post_id = document.querySelector("#post-id").textContent;
    const content = document.querySelector('#commentText').value.trim();
   
    if (content) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          post_id ,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);
  
  
  
  
  
  
  
  