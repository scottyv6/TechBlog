const commentAdd = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#comment').value.trim();    

    const blog_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment) {
        
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
              
      if (response.ok) {
        document.location.replace(`${blog_id}`);        
      } else {
        alert('Failed to create comment');
      }
    }
  };
    
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentAdd);