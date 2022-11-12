const editHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-text').value.trim();
    const id = document.querySelector("h2").id;

    if (title && text) {
        const response = await fetch(`/api/post/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, text }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
    if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to edit post.');
          }
        }
      };


document
.querySelector('#edit-btn')
.addEventListener('click', editHandler);

