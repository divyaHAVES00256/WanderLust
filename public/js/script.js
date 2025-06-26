// Example starter JavaScript for disabling form submissions if there are invalid fields
//for the from validation // used in create, edit, review page
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()

const flash = document.getElementById('flash-success');
  if (flash) {
    setTimeout(() => {
      const alert = bootstrap.Alert.getOrCreateInstance(flash);
      alert.close();
    }, 4000);
  }


// Scroll functionality for filter icons
const scrollContainer = document.querySelector('.filter-scroll');
  const scrollLeft = document.getElementById('scrollLeft');
  const scrollRight = document.getElementById('scrollRight');

  const scrollAmount = 200;

  scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });