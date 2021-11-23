const commentAdd = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#comment-text').value.trim();
  
    const blog_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(blog_id);
  
    if (content) {
  
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, blog_id }),
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