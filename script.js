window.addEventListener('DOMContentLoaded', function() {
    var content = document.querySelector('.content');
    var windowHeight = window.innerHeight;
  
    function checkPosition() {
      var contentPosition = content.getBoundingClientRect().top;
  
      if (contentPosition - windowHeight <= 0) {
        content.classList.add('show');
      }
    }
  
    checkPosition();
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', function() {
      windowHeight = window.innerHeight;
      checkPosition();
    });
  });
  