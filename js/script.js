window.onload = function() {
  setTimeout(() => {
    document.getElementById('leaf').style.display = 'none';
    document.getElementById('welcome-text').style.display = 'block';
    
    // Show the background image
    document.querySelector('.background-image').style.display = 'block';
    
    // Hide the loading container
    document.getElementById('loading-container').style.display = 'none';
  }, 2000);
}
