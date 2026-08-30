/**
 * Dr. Syed Anees ur Rehman — Premium Animation System
 * Reliable, high-performance IntersectionObserver & Hero Reveal Engine
 */

(function () {
    'use strict';

    function initSiteAnimations() {
        // 1. Mark document as JS ready
        document.documentElement.classList.add('js-ready');

        // 2. Navbar Scroll Behavior
        const header = document.querySelector('header');
        if (header) {
            let lastScrollY = window.scrollY;
            let ticking = false;

            function updateNavbar() {
                const scrollY = window.scrollY;
                if (scrollY > 20) {
                    header.classList.add('nav-scrolled');
                } else {
                    header.classList.remove('nav-scrolled');
                }
                ticking = false;
            }

            window.addEventListener('scroll', function () {
                if (!ticking) {
                    window.requestAnimationFrame(updateNavbar);
                    ticking = true;
                }
            }, { passive: true });

            // Initial check
            updateNavbar();
        }

        // 3. Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // 4. Hero Staggered Animation on Page Load
        function triggerHeroAnimations() {
            const heroElements = document.querySelectorAll('.hero-animate, .hero-animate-image');
            heroElements.forEach((el) => {
                el.classList.add('is-visible');
            });

            // Also check for legacy hero classes (.hero-title, .hero-text, .hero-btn)
            const legacyHero = document.querySelectorAll('.hero-title, .hero-text, .hero-btn');
            legacyHero.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.remove('opacity-0');
                    el.classList.add('is-visible');
                }, 100 + index * 150);
            });
        }

        // Run hero animations quickly after mount
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(triggerHeroAnimations, 60);
            });
        } else {
            setTimeout(triggerHeroAnimations, 60);
        }

        // 5. Scroll Reveal with IntersectionObserver
        const revealSelector = '.reveal-up, .reveal, .fade-up, .scroll-reveal, .reveal-left, .reveal-right, .reveal-scale, .image-reveal';
        const revealElements = document.querySelectorAll(revealSelector);

        // Stagger calculation for grid items
        const gridContainers = document.querySelectorAll('.grid, .grid-stagger, [data-stagger]');
        gridContainers.forEach((container) => {
            const children = container.querySelectorAll(':scope > .reveal-up, :scope > .fade-up, :scope > .scroll-reveal, :scope > .reveal');
            if (children.length > 1) {
                children.forEach((child, idx) => {
                    if (!child.style.transitionDelay && !child.classList.contains('delay-100') && !child.classList.contains('delay-200') && !child.classList.contains('delay-300')) {
                        const delay = (idx % 4) * 100;
                        if (delay > 0) {
                            child.style.transitionDelay = delay + 'ms';
                        }
                    }
                });
            }
        });

        if ('IntersectionObserver' in window) {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -40px 0px',
                threshold: 0.08
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        target.classList.add('is-visible', 'active', 'visible');
                        observer.unobserve(target);
                    }
                });
            }, observerOptions);

            revealElements.forEach((el) => {
                // If element is already in viewport on initial render, reveal it
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('is-visible', 'active', 'visible');
                } else {
                    revealObserver.observe(el);
                }
            });
        } else {
            // Fallback for older browsers
            revealElements.forEach((el) => {
                el.classList.add('is-visible', 'active', 'visible');
            });
        }

        // 6. Safety Fallback: Ensure no element remains permanently hidden
        setTimeout(() => {
            document.querySelectorAll(revealSelector).forEach((el) => {
                if (!el.classList.contains('is-visible') && !el.classList.contains('active') && !el.classList.contains('visible')) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight + 100) {
                        el.classList.add('is-visible', 'active', 'visible');
                    }
                }
            });
        }, 1500);
    }

    // Run when DOM is ready
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        initSiteAnimations();
    } else {
        document.addEventListener('DOMContentLoaded', initSiteAnimations);
    }
})();
