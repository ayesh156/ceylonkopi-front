document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.body.style.backgroundPosition = `center ${rate}px`;
});


document.querySelectorAll('.slide-arrows').forEach(arrow => {
    arrow.addEventListener('click', function () {
        // Add slide animation effect
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1.1)';
        }, 100);
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});


const mobileMenuBtn = document.querySelector('.lg\\:hidden');
const nav = document.querySelector('nav .hidden.lg\\:flex');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('hidden');
        nav.classList.toggle('flex');
        nav.classList.toggle('flex-col');
        nav.classList.toggle('absolute');
        nav.classList.toggle('top-full');
        nav.classList.toggle('left-0');
        nav.classList.toggle('right-0');
        nav.classList.toggle('bg-black');
        nav.classList.toggle('bg-opacity-90');
        nav.classList.toggle('p-4');
    });
}


// Currency selector hover logic with slide animation
const selector = document.getElementById('currency-selector');
const compact = document.getElementById('currency-compact');
const expanded = document.getElementById('currency-expanded');
let expandedTimeout;

selector.addEventListener('mouseenter', () => {
    clearTimeout(expandedTimeout);
    // Hide compact (fade out and slide left)
    compact.classList.add('opacity-0', 'pointer-events-none', '-translate-x-10');
    // Show expanded (slide in from right)
    expanded.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    expanded.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');
});

selector.addEventListener('mouseleave', () => {
    // Hide expanded (slide out to right)
    expanded.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
    expanded.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    // Show compact (fade in and slide right)
    expandedTimeout = setTimeout(() => {
        compact.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-10');
    }, 200);
});

// Sidebar open/close logic
const openSidebar = document.getElementById('openSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');

openSidebar.addEventListener('click', () => {
    sidebarMenu.classList.remove('translate-x-full');
    sidebarOverlay.classList.remove('hidden');
});

closeSidebar.addEventListener('click', () => {
    sidebarMenu.classList.add('translate-x-full');
    sidebarOverlay.classList.add('hidden');
});

sidebarOverlay.addEventListener('click', () => {
    sidebarMenu.classList.add('translate-x-full');
    sidebarOverlay.classList.add('hidden');
});



// Hero slider functionality
const slides = [
    {
        bg: "images/hero/img-1.jpg",
        title: `Heritage Brews<br>Relishing the <span class="gold-text">Soul of</span><br><span class="block">Ceylon KOPI</span>`
    },
    {
        bg: "images/hero/img-2.jpg",
        title: `Whisper of Ceylon <br>Untamed, </span><span class="gold-text">Wild-Grown</span><br><span class="block"> Coffee Elegance</span>`
    },
];

let currentSlide = 0;
let isAnimating = false;

const heroBg = document.getElementById('hero-bg');
const heroTitle = document.getElementById('hero-title');
const slideRight = document.getElementById('slideRight');
const slideLeft = document.getElementById('slideLeft');

function showSlide(idx, direction = 1) {
    if (isAnimating) return;
    isAnimating = true;

    // Zoom out current
    heroBg.style.transition = "transform 0.7s, opacity 0.7s";
    heroBg.style.transform = `scale(1.1)`;
    heroBg.style.opacity = "0.5";
    heroTitle.style.transition = "transform 0.7s, opacity 0.7s";
    heroTitle.style.transform = `scale(1.1)`;
    heroTitle.style.opacity = "0";

    setTimeout(() => {
        // Change content
        heroBg.style.backgroundImage = `url('${slides[idx].bg}')`;
        heroTitle.innerHTML = slides[idx].title;

        // Zoom in new
        heroBg.style.transition = "transform 0.7s, opacity 0.7s";
        heroBg.style.transform = `scale(1)`;
        heroBg.style.opacity = "1";
        heroTitle.style.transition = "transform 0.7s, opacity 0.7s";
        heroTitle.style.transform = `scale(1)`;
        heroTitle.style.opacity = "1";
        isAnimating = false;
    }, 700);
}

slideRight.addEventListener('click', () => {
    if (isAnimating) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide, 1);
});
slideLeft.addEventListener('click', () => {
    if (isAnimating) return;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide, -1);
});

// Optional: auto-slide every 10s
// setInterval(() => {
//     slideRight.click();
// }, 10000);



const slideRightBtn = document.getElementById('slideRight');
const slideRightIcon = slideRightBtn.querySelector('i');
const slideLeftBtn = document.getElementById('slideLeft');
const slideLeftIcon = slideLeftBtn.querySelector('i');

let arrowAnimating = false;

// Right arrow hover animation (move right)
slideRightBtn.addEventListener('mouseenter', () => {
    if (arrowAnimating) return;
    arrowAnimating = true;
    slideRightIcon.style.animation = "arrow-move-out 0.4s forwards";
    slideRightBtn.style.borderColor = "#fff";
    slideRightIcon.style.color = "#fff";
    setTimeout(() => {
        slideRightIcon.style.opacity = "0";
        setTimeout(() => {
            slideRightIcon.style.animation = "arrow-move-in 0.4s forwards";
            slideRightIcon.style.opacity = "1";
            setTimeout(() => {
                slideRightBtn.style.borderColor = "";
                slideRightIcon.style.color = "";
                slideRightIcon.style.animation = "";
                arrowAnimating = false;
            }, 400);
        }, 200);
    }, 400);
});

// Left arrow hover animation (move left)
slideLeftBtn.addEventListener('mouseenter', () => {
    if (arrowAnimating) return;
    arrowAnimating = true;
    slideLeftIcon.style.animation = "arrow-move-out-left 0.4s forwards";
    slideLeftBtn.style.borderColor = "#fff";
    slideLeftIcon.style.color = "#fff";
    setTimeout(() => {
        slideLeftIcon.style.opacity = "0";
        setTimeout(() => {
            slideLeftIcon.style.animation = "arrow-move-in-left 0.4s forwards";
            slideLeftIcon.style.opacity = "1";
            setTimeout(() => {
                slideLeftBtn.style.borderColor = "";
                slideLeftIcon.style.color = "";
                slideLeftIcon.style.animation = "";
                arrowAnimating = false;
            }, 400);
        }, 200);
    }, 400);
});


// Animate house background image on scroll
const aboutSection = document.getElementById('about-section');
const aboutBgHouse = document.getElementById('about-bg-house');

window.addEventListener('scroll', () => {
    const sectionRect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Only animate when the section is in view
    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        // Calculate how much the user has scrolled past the section's top
        const scrollPast = Math.max(0, windowHeight - sectionRect.top);
        // Adjust this divisor for more/less movement
        const moveX = Math.min(100, scrollPast / 10); // max 100px

        // Move right when scrolling down, left when scrolling up
        aboutBgHouse.style.transform = `translateX(${moveX}px)`;
    } else if (sectionRect.top >= windowHeight) {
        // Reset if above viewport
        aboutBgHouse.style.transform = 'translateX(0)';
    }
});


const carouselTrack = document.getElementById('carousel-track');
const images = carouselTrack.querySelectorAll('img');
let currentIndex = 0;
let dragStartX = 0;
let dragDiff = 0;
let isDragging = false;

// Only allow drag if mouse is down on the middle image
carouselTrack.addEventListener('mousedown', (e) => {
    // Get bounding rect of the carousel
    const rect = carouselTrack.getBoundingClientRect();
    // Calculate which image is in the middle
    const middleIndex = currentIndex;
    const img = images[middleIndex];
    const imgRect = img.getBoundingClientRect();

    // Only start drag if mouse is inside the middle image
    if (
        e.clientX >= imgRect.left &&
        e.clientX <= imgRect.right &&
        e.clientY >= imgRect.top &&
        e.clientY <= imgRect.bottom
    ) {
        isDragging = true;
        dragStartX = e.pageX;
        dragDiff = 0;
        carouselTrack.style.transition = 'none';
    }
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    dragDiff = e.pageX - dragStartX;
    // Do NOT move the image with the cursor
});

window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    carouselTrack.style.transition = 'transform 0.5s';
    if (dragDiff < -50 && currentIndex < images.length - 1) {
        currentIndex++;
    } else if (dragDiff > 50 && currentIndex > 0) {
        currentIndex--;
    }
    setCarouselPosition();
});

// Touch support for mobile
carouselTrack.addEventListener('touchstart', (e) => {
    // Get bounding rect of the carousel
    const rect = carouselTrack.getBoundingClientRect();
    const middleIndex = currentIndex;
    const img = images[middleIndex];
    const imgRect = img.getBoundingClientRect();
    const touch = e.touches[0];

    // Only start drag if touch is inside the middle image
    if (
        touch.clientX >= imgRect.left &&
        touch.clientX <= imgRect.right &&
        touch.clientY >= imgRect.top &&
        touch.clientY <= imgRect.bottom
    ) {
        isDragging = true;
        dragStartX = touch.clientX;
        dragDiff = 0;
        carouselTrack.style.transition = 'none';
    }
});

window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    dragDiff = e.touches[0].clientX - dragStartX;
    // Do NOT move the image with the finger
});

window.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    carouselTrack.style.transition = 'transform 0.5s';
    if (dragDiff < -50 && currentIndex < images.length - 1) {
        currentIndex++;
    } else if (dragDiff > 50 && currentIndex > 0) {
        currentIndex--;
    }
    setCarouselPosition();
});

function setCarouselPosition() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setCarouselPosition();

// Auto-slide every 30 seconds
setInterval(() => {
    if (!isDragging && currentIndex < images.length - 1) {
        currentIndex++;
    } else if (!isDragging && currentIndex === images.length - 1) {
        currentIndex = 0;
    }
    setCarouselPosition();
}, 5000);


// Youtube Video palying process
const playBtn = document.getElementById('kopi-video-play');
const modal = document.getElementById('kopi-video-modal');
const closeBtn = document.getElementById('kopi-video-close');
const iframe = document.getElementById('kopi-video-iframe');
const videoUrl = "https://www.youtube.com/embed/zvVD4oJGgOg?autoplay=1";

playBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    // Set src with autoplay only on click
    iframe.src = videoUrl;
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    // Stop video playback
    iframe.src = '';
});

// Optional: Close modal on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        iframe.src = '';
    }
});



// --- Scroll navbar show/hide logic ---
const scrollNavbar = document.getElementById('scroll-navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (!scrollNavbar) return; // Prevent errors if navbar is missing
    if (window.scrollY > 100 && window.scrollY < lastScrollY) {
        // Scrolling up, show navbar
        scrollNavbar.classList.remove('-translate-y-full');
        scrollNavbar.classList.add('translate-y-0');
    } else {
        // Scrolling down or at top, hide navbar
        scrollNavbar.classList.add('-translate-y-full');
        scrollNavbar.classList.remove('translate-y-0');
    }
    lastScrollY = window.scrollY;
});

const scrollNavbar2 = document.getElementById('scroll-navbar2');
let lastScrollY2 = window.scrollY;

window.addEventListener('scroll', () => {
    if (!scrollNavbar2) return;
    if (window.scrollY > 100 && window.scrollY < lastScrollY2) {
        // Scrolling up and not at the very top: show navbar
        scrollNavbar2.classList.remove('translate-y-full');
        scrollNavbar2.classList.add('translate-y-0');
    } else {
        // Scrolling down or at the top: hide navbar
        scrollNavbar2.classList.add('translate-y-full');
        scrollNavbar2.classList.remove('translate-y-0');
    }
    lastScrollY2 = window.scrollY;
});

// --- Search overlay logic ---
const searchBtn = document.getElementById('scroll-navbar-search-btn');
const searchOverlay = document.getElementById('scroll-navbar-search-overlay');
const searchClose = document.getElementById('scroll-navbar-search-close');

searchBtn.addEventListener('click', () => {
    searchOverlay.classList.remove('hidden');
    searchOverlay.querySelector('input').focus();
});
searchClose.addEventListener('click', () => {
    searchOverlay.classList.add('hidden');
});
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) searchOverlay.classList.add('hidden');
});

// --- Hamburger opens sidebar (reuse your sidebar logic) ---
const hamburger = document.getElementById('scroll-navbar-hamburger');
const sidebarMenu2 = document.getElementById('sidebarMenu');
const sidebarOverlay2 = document.getElementById('sidebarOverlay');
hamburger.addEventListener('click', () => {
    sidebarMenu2.classList.remove('translate-x-full');
    sidebarOverlay2.classList.remove('hidden');
});


// --- Hero slider swipe for mobile ---
const heroSlider = document.getElementById('hero-slider');
let heroTouchStartX = 0;
let heroTouchEndX = 0;

if (heroSlider) {
    // Touch swipe (mobile)
    heroSlider.addEventListener('touchstart', (e) => {
        heroTouchStartX = e.changedTouches[0].screenX;
    });

    heroSlider.addEventListener('touchend', (e) => {
        heroTouchEndX = e.changedTouches[0].screenX;
        handleHeroSwipe();
    });

    // Mouse click (desktop)
    heroSlider.addEventListener('click', (e) => {
        // Only trigger if not clicking on an arrow button
        if (
            e.target.closest('#slideLeft') ||
            e.target.closest('#slideRight')
        ) return;

        // Click left half: previous, right half: next
        const rect = heroSlider.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX < rect.width / 2) {
            slideLeft.click();
        } else {
            slideRight.click();
        }
    });
}

function handleHeroSwipe() {
    const diff = heroTouchEndX - heroTouchStartX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff < 0) {
            // Swipe left: next slide
            slideRight.click();
        } else {
            // Swipe right: previous slide
            slideLeft.click();
        }
    }
}


// Moves the "coffee-era-dialog" box smoothly up when scrolling up and down when scrolling down
const dialog = document.getElementById('coffee-era-dialog');
let dialogOffset = 0;
let dialogLastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    // Move dialog box up when scrolling up, down when scrolling down, with limits
    if (currentScroll < dialogLastScrollY) {
        // Scrolling up: move to top (min -40)
        dialogOffset = Math.max(dialogOffset - 2, -40);
    } else if (currentScroll > dialogLastScrollY) {
        // Scrolling down: move to bottom (max 40)
        dialogOffset = Math.min(dialogOffset + 2, 40);
    }
    dialog.style.transform = `translateY(${dialogOffset}px)`;
    dialogLastScrollY = currentScroll;
});


function animateSoilBars() {
    const bars = [
        { id: 'soil-bar1', label: 'soil-bar1-label', percent: 90 },
        { id: 'soil-bar2', label: 'soil-bar2-label', percent: 93 },
        { id: 'soil-bar3', label: 'soil-bar3-label', percent: 91 }
    ];
    bars.forEach(bar => {
        let current = 0;
        const target = bar.percent;
        const barElem = document.getElementById(bar.id);
        const labelElem = document.getElementById(bar.label);
        if (!barElem || !labelElem) return;
        barElem.style.width = '0%';
        labelElem.textContent = '0%';
        const interval = setInterval(() => {
            if (current < target) {
                current++;
                barElem.style.width = current + '%';
                labelElem.textContent = current + '%';
            } else {
                clearInterval(interval);
            }
        }, 12);
    });
}

// Intersection Observer to trigger animation once
let soilBarsAnimated = false;
const soilSection = document.getElementById('soil-stories');
if (soilSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !soilBarsAnimated) {
                animateSoilBars();
                soilBarsAnimated = true;
            }
        });
    }, { threshold: 0.3 });
    observer.observe(soilSection);
}


// Animate footer background image on scroll
const footer = document.querySelector('footer');
const footerBgHouse = document.getElementById('footer-bg-house');

window.addEventListener('scroll', () => {
    if (!footer || !footerBgHouse) return;
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Only animate when the footer is in view
    if (footerRect.top < windowHeight && footerRect.bottom > 0) {
        // Calculate how much the user has scrolled past the footer's top
        const scrollPast = Math.max(0, windowHeight - footerRect.top);
        // Adjust this divisor for more/less movement
        const moveX = Math.min(200, scrollPast / 5); // max 100px

        // Move right when scrolling down, left when scrolling up
        footerBgHouse.style.transform = `translateX(${moveX}px)`;
    } else if (footerRect.top >= windowHeight) {
        // Reset if above viewport
        footerBgHouse.style.transform = 'translateX(0)';
    }
});


// Scroll to top button logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
