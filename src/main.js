const leaveReviewButton = document.querySelector('.button-review');
const closeModalButton = document.querySelector('.btn-close-modal');
const closeMenuButton = document.querySelector('.btn-close');
const burgerButton = document.querySelector('.btn-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const reviewForm = document.querySelector('.backdrop');


// Open menu ======================================================
if (burgerButton) {
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });
}

// Close menu =====================================================
if (closeMenuButton) {
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
}

// Open form for leaving review ===================================
if (leaveReviewButton) {
   leaveReviewButton.addEventListener('click', () => {
     reviewForm.classList.add('is-open');
   });
}

// Close form for leaving review ==================================
if (closeModalButton) {
   closeModalButton.addEventListener('click', () => {
      reviewForm.classList.remove('is-open')
   })
}

