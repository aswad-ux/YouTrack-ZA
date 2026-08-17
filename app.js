// YouTrack ZA Interactive Telematics App Logic
document.addEventListener('DOMContentLoaded', () => {

  // 1. Live Telemetry Ticker Simulation
  const speedElement = document.getElementById('telemetry-speed');
  const gpsElement = document.getElementById('telemetry-gps');

  if (speedElement && gpsElement) {
    let currentSpeed = 81;
    let baseLat = 23.197050;
    let baseLng = 29.869173;

    setInterval(() => {
      // Simulate realistic small speed variations
      const delta = (Math.random() - 0.48) * 3;
      currentSpeed = Math.max(65, Math.min(115, Math.round(currentSpeed + delta)));
      speedElement.textContent = `${currentSpeed} Km/h`;

      // Simulate subtle GPS location shifts
      baseLat += (Math.random() - 0.5) * 0.00008;
      baseLng += (Math.random() - 0.5) * 0.00008;
      gpsElement.textContent = `S ${baseLat.toFixed(6)} E ${baseLng.toFixed(6)}`;
    }, 2000);
  }

  // 2. Interactive Fleet Calculator
  const fleetSlider = document.getElementById('fleet-size-slider');
  const fleetCountDisplay = document.getElementById('fleet-count-display');
  const calcTier1 = document.getElementById('calc-tier-1');
  const calcTier2 = document.getElementById('calc-tier-2');
  const calcTier3 = document.getElementById('calc-tier-3');
  const calcTier4 = document.getElementById('calc-tier-4');

  if (fleetSlider) {
    fleetSlider.addEventListener('input', (e) => {
      const count = parseInt(e.target.value, 10);
      fleetCountDisplay.textContent = count === 1 ? '1 Vehicle' : `${count} Vehicles`;

      if (calcTier1) calcTier1.textContent = `R ${(count * 100).toLocaleString()}`;
      if (calcTier2) calcTier2.textContent = `R ${(count * 150).toLocaleString()}`;
      if (calcTier3) calcTier3.textContent = `R ${(count * 199).toLocaleString()}`;
      if (calcTier4) calcTier4.textContent = `R ${(count * 250).toLocaleString()}`;
    });
  }

  // 3. Contact Form Submission Toast
  const contactForm = document.getElementById('quote-form');
  const toast = document.getElementById('form-toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (toast) {
        toast.style.display = 'block';
        toast.textContent = '⚡ Quote request sent successfully! A YouTrack ZA consultant will contact you shortly.';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 5000);
      }
      contactForm.reset();
    });
  }

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 5. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }

  // ── Animated Number Counters ──
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();
    
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stats-counter').forEach(el => {
    counterObserver.observe(el);
  });

  // 6. Sticky Header Shrink
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ── Hero Parallax ──
  const heroMapBg = document.querySelector('.hero-map-bg');
  if (heroMapBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroMapBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }, { passive: true });
  }

  // 7. Auto-select tier from pricing buttons
  const tierButtons = document.querySelectorAll('.tier-card a[href="#contact"]');
  const mlTierSelect = document.getElementById('ml-tier');
  
  if (tierButtons.length > 0 && mlTierSelect) {
    tierButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.textContent.toLowerCase();
        if (text.includes('trace')) mlTierSelect.value = 'Trace';
        if (text.includes('shield')) mlTierSelect.value = 'Shield';
        if (text.includes('guard')) mlTierSelect.value = 'Guard';
        if (text.includes('sentinel')) mlTierSelect.value = 'Sentinel';
      });
    });
  }

  // 8. Personal/Business Pricing Toggle
  const togglePersonal = document.getElementById('toggle-personal');
  const toggleBusiness = document.getElementById('toggle-business');
  const tierCards = document.querySelectorAll('.tier-card');

  if (togglePersonal && toggleBusiness && tierCards.length === 4) {
    togglePersonal.addEventListener('click', () => {
      togglePersonal.classList.add('active');
      togglePersonal.style.background = 'var(--bg-dark-slate)';
      togglePersonal.style.color = '#fff';
      
      toggleBusiness.classList.remove('active');
      toggleBusiness.style.background = 'transparent';
      toggleBusiness.style.color = 'var(--text-slate)';

      // Highlight Trace & Shield (0, 1), dim Guard & Sentinel (2, 3)
      tierCards[0].style.opacity = '1';
      tierCards[1].style.opacity = '1';
      tierCards[2].style.opacity = '0.5';
      tierCards[3].style.opacity = '0.5';
      tierCards[0].style.transform = 'scale(1)';
      tierCards[1].style.transform = 'scale(1)';
    });

    toggleBusiness.addEventListener('click', () => {
      toggleBusiness.classList.add('active');
      toggleBusiness.style.background = 'var(--bg-dark-slate)';
      toggleBusiness.style.color = '#fff';
      
      togglePersonal.classList.remove('active');
      togglePersonal.style.background = 'transparent';
      togglePersonal.style.color = 'var(--text-slate)';

      // Highlight Guard & Sentinel (2, 3), dim Trace & Shield (0, 1)
      tierCards[0].style.opacity = '0.5';
      tierCards[1].style.opacity = '0.5';
      tierCards[2].style.opacity = '1';
      tierCards[3].style.opacity = '1';
      tierCards[2].style.transform = 'scale(1)';
      tierCards[3].style.transform = 'scale(1)';
    });
    });
  }

  // Command Center: Gateway Toggle Logic
  const gatewayBtns = document.querySelectorAll('.gateway-btn');
  const businessElements = document.querySelectorAll('.audience-business');
  const consumerElements = document.querySelectorAll('.audience-consumer');

  gatewayBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Toggle active class on buttons
      gatewayBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const target = e.target.getAttribute('data-target');
      
      if (target === 'business') {
        businessElements.forEach(el => el.style.display = 'block');
        consumerElements.forEach(el => el.style.display = 'none');
      } else {
        businessElements.forEach(el => el.style.display = 'none');
        consumerElements.forEach(el => el.style.display = 'block');
      }
    });
  });

  // Command Center: Calculator Modal Logic
  const calcModal = document.getElementById('calculator-modal');
  const closeCalc = document.getElementById('close-calc');
  const fleetSize = document.getElementById('fleet-size');
  const fuelSpend = document.getElementById('fuel-spend');
  const fleetVal = document.getElementById('fleet-val');
  const fuelVal = document.getElementById('fuel-val');
  const savingsTotal = document.getElementById('savings-total');

  if (closeCalc && calcModal) {
    closeCalc.addEventListener('click', () => {
      calcModal.style.display = 'none';
    });
  }

  function calculateSavings() {
    if (!fleetSize || !fuelSpend || !savingsTotal) return;
    
    const size = parseInt(fleetSize.value);
    const fuel = parseInt(fuelSpend.value);
    
    // Update display values
    fleetVal.textContent = size;
    fuelVal.textContent = 'R ' + fuel.toLocaleString();
    
    // Formula: (Fleet * Fuel) * 0.15 (15% savings on fuel + maintenance)
    const savings = (size * fuel) * 0.15;
    savingsTotal.textContent = 'R ' + savings.toLocaleString();
  }

  if (fleetSize && fuelSpend) {
    fleetSize.addEventListener('input', calculateSavings);
    fuelSpend.addEventListener('input', calculateSavings);
    calculateSavings(); // Initial calc
  }

});

  // Hook up open button
  const openCalc = document.getElementById('open-calc');
  if (openCalc) {
    openCalc.addEventListener('click', () => {
      if (calcModal) calcModal.style.display = 'block';
    });
  }

