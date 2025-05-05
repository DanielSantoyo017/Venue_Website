// ==== Mobile Navbar Toggle ====
document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    if (navButton && navMenu) {
      navButton.addEventListener("click", function () {
        const isOpen = navMenu.classList.contains("is-open");
  
        navMenu.classList.toggle("is-open", !isOpen);
        navButton.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("nav-open", !isOpen);
      });
    }
  });
  
  // ==== FAQ Toggle Logic ====
  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const toggle = item.querySelector(".faq-toggle");
      const answer = item.querySelector(".faq-answer");
  
      if (toggle && answer) {
        toggle.addEventListener("click", function () {
          const isOpen = answer.classList.contains("is-open");
  
          
          faqItems.forEach((el) => {
            const otherAnswer = el.querySelector(".faq-answer");
            const otherToggle = el.querySelector(".faq-toggle");
            if (otherAnswer !== answer) {
              otherAnswer?.classList.remove("is-open");
              otherToggle?.classList.remove("is-open");
            }
          });
  
          // Toggle current item
          answer.classList.toggle("is-open", !isOpen);
          toggle.classList.toggle("is-open", !isOpen);
        });
      }
    });
  });

  // FAQ Accordion Toggle
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq-question');
    faqs.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('open');
      });
    });
  });
  
