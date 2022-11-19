const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-name').value.trim();
    const text = document.querySelector('#project-desc').value.trim();
  
    if (title && text) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
    }
  };



  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('delBtn')) {
      const id = event.target.getAttribute('data-del');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.delBtn')
  //   .addEventListener('click', delButtonHandler);

   const deleteButtons = document.getElementsByClassName("delBtn")
   for (var index = 0; index < deleteButtons.length; index++) {
    deleteButtons[index].addEventListener("click", async (event) => {
      if (event.target.classList.contains('delBtn')) {
        const id = event.target.dataset.del;
        const response = await fetch(`/api/post/${id}`,{
          method: 'DELETE',
        });
        
        if (response.ok) {
          document.location.replace('/dashboard');
        }else {
          alert('Failed to delete Blog');
        }
      }
    })
    
   }