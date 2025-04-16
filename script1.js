// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Animated counters
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  
  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };
  
  let statsSection = document.querySelector('#stats');
  let started = false;
  
  window.addEventListener('scroll', () => {
    const sectionTop = statsSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight && !started) {
      animateCounters();
      started = true;
    }
  });
  