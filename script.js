/* ================================================
   MILULA SIN TACC · Interactividad
   ================================================ */

(function () {
  'use strict';

  // ----- Productos -----
  const products = [
    {
      name: 'Tortas',
      desc: 'Cheesecake, carrot cake, chocotorta, lemon pie y más opciones a pedido.',
      img: 'imagenes/tortas.webp',
      price: 'Consultar'
    },
    {
      name: 'Tartas',
      desc: 'Tarta de coco, ricotta, dulce de leche, frutas y sabores especiales.',
      img: 'imagenes/tartas.webp',
      price: 'Consultar'
    },
    {
      name: 'Budines',
      desc: 'Budines artesanales de limón, chocolate, carrot cake y vainilla.',
      img: 'imagenes/budines.webp',
      price: 'Consultar'
    },
    {
      name: 'Cookies',
      desc: 'Cookies artesanales, ideales para acompañar una merienda o regalar.',
      img: 'imagenes/cookies.webp',
      price: 'Consultar'
    },
    {
      name: 'Postres Cuchareables',
      desc: 'Mousses, cremas, flanes y postres en vasito, frescos y cremosos.',
      img: 'imagenes/postres.webp',
      price: 'Consultar'
    },
    {
      name: 'Opciones Saladas',
      desc: 'Tartas saladas, quiches, empanadas y opciones saladas sin TACC.',
      img: 'imagenes/saladas.webp',
      price: 'Consultar'
    },
    {
      name: 'Desayunos',
      desc: 'Combos de desayuno con buds, cookies, bebidas y sorpresas dulces.',
      img: 'imagenes/desayunos.webp',
      price: 'Consultar'
    }
  ];

  // ----- Galería (fotos reales de WhatsApp) -----
  const galleryImages = [
    { src: 'imagenes/WhatsApp Image 2025-08-05 at 18.05.29.jpeg', alt: 'Creación artesanal Milula' },
    { src: 'imagenes/WhatsApp Image 2025-08-05 at 18.15.52.jpeg', alt: 'Torta artesanal sin TACC' },
    { src: 'imagenes/WhatsApp Image 2025-08-05 at 18.16.05.jpeg', alt: 'Postre Milula' },
    { src: 'imagenes/WhatsApp Image 2025-08-05 at 19.11.48 (1).jpeg', alt: 'Preparación artesanal' },
    { src: 'imagenes/WhatsApp Image 2025-08-19 at 19.03.55.jpeg', alt: 'Producto Milula Sin TACC' },
    { src: 'imagenes/WhatsApp Image 2025-08-19 at 19.03.56.jpeg', alt: 'Pastelería libre de gluten' },
    { src: 'imagenes/WhatsApp Image 2025-08-19 at 19.03.58.jpeg', alt: 'Creación Milula' },
    { src: 'imagenes/WhatsApp Image 2025-08-19 at 19.20.13.jpeg', alt: 'Torta personalizada' }
  ];

  // ----- Testimonios -----
  const testimonials = [
    {
      text: 'Pedí una torta para el cumple de mi hija y fue un éxito. Todos preguntaban dónde la había comprado. ¡Espectacular!',
      author: 'María G.',
      location: 'El Bolsón'
    },
    {
      text: 'Desde que encontré Milula no como otra cosa. Las cookies son adictivas y los budines increíbles. 100% recomendado.',
      author: 'Lucía M.',
      location: 'Esquel'
    },
    {
      text: 'Soy celíaca y encontrar una pastelería así es un tesoro. La calidad es superior y el trato es hermoso. Gracias Milula.',
      author: 'Carolina R.',
      location: 'El Bolsón'
    }
  ];

  // ================================================
  // RENDER PRODUCTS
  // ================================================
  function renderProducts () {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(function (p, i) {
      return (
        '<article class="product-card reveal" style="transition-delay:' + (i * 0.08) + 's">' +
          '<div class="product-card__image-wrapper">' +
            '<img src="' + p.img + '" alt="' + p.name + ' Milula Sin TACC" class="product-card__image" loading="lazy">' +
          '</div>' +
          '<div class="product-card__body">' +
            '<span class="product-card__category">' + p.name + '</span>' +
            '<p class="product-card__desc">' + p.desc + '</p>' +
          '</div>' +
          '<div class="product-card__footer">' +
            '<span class="product-card__price">' + p.price + '</span>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  // ================================================
  // RENDER GALLERY
  // ================================================
  function renderGallery () {
    const masonry = document.getElementById('galleryMasonry');
    if (!masonry) return;

    masonry.innerHTML = galleryImages.map(function (img, i) {
      return (
        '<div class="gallery__item reveal" style="transition-delay:' + (i * 0.06) + 's">' +
          '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy" ' +
               'data-index="' + i + '">' +
        '</div>'
      );
    }).join('');
  }

  // ================================================
  // RENDER TESTIMONIALS
  // ================================================
  function renderTestimonials () {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    function getInitials (name) {
      return name.charAt(0);
    }

    grid.innerHTML = testimonials.map(function (t, i) {
      return (
        '<div class="testimonial-card reveal" style="transition-delay:' + (i * 0.1) + 's">' +
          '<div class="testimonial-card__stars">' +
            '<svg class="testimonial-card__star" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.63l5.34-.78L10 1z"/></svg>' +
            '<svg class="testimonial-card__star" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.63l5.34-.78L10 1z"/></svg>' +
            '<svg class="testimonial-card__star" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.63l5.34-.78L10 1z"/></svg>' +
            '<svg class="testimonial-card__star" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.63l5.34-.78L10 1z"/></svg>' +
            '<svg class="testimonial-card__star" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.63l5.34-.78L10 1z"/></svg>' +
          '</div>' +
          '<p class="testimonial-card__text">"' + t.text + '"</p>' +
          '<div class="testimonial-card__author">' +
            '<div class="testimonial-card__avatar">' + getInitials(t.author) + '</div>' +
            '<div>' +
              '<p class="testimonial-card__name">' + t.author + '</p>' +
              '<p class="testimonial-card__location">' + t.location + '</p>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  // ================================================
  // LIGHTBOX
  // ================================================
  function initLightbox () {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightboxImage');
    var lightboxClose = document.getElementById('lightboxClose');

    if (!lightbox || !lightboxImage || !lightboxClose) return;

    document.getElementById('galleryMasonry').addEventListener('click', function (e) {
      var img = e.target.closest('.gallery__item img');
      if (!img) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || 'Imagen ampliada';
      lightbox.classList.add('lightbox--open');
      document.body.style.overflow = 'hidden';
    });

    function closeLightbox () {
      lightbox.classList.remove('lightbox--open');
      document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ================================================
  // SCROLL REVEAL
  // ================================================
  function initScrollReveal () {
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
      });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      reveals.forEach(function (el) {
        el.classList.add('reveal--visible');
      });
    }
  }

  // ================================================
  // MOBILE MENU
  // ================================================
  function initMobileMenu () {
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('mainNav');
    var overlay = document.getElementById('menuOverlay');
    if (!toggle || !nav || !overlay) return;

    function openMenu () {
      nav.classList.add('header__nav--open');
      overlay.classList.add('header__overlay--visible');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu () {
      nav.classList.remove('header__nav--open');
      overlay.classList.remove('header__overlay--visible');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      if (nav.classList.contains('header__nav--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.header__link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // ================================================
  // HEADER SCROLL EFFECT
  // ================================================
  function initHeaderScroll () {
    var header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }, { passive: true });
  }

  // ================================================
  // DYNAMIC YEAR
  // ================================================
  function setYear () {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ================================================
  // WHATSAPP FLOATING BUTTON — Hide on scroll down
  // ================================================
  function initWaFloat () {
    var wa = document.getElementById('waFloat');
    if (!wa) return;

    var lastScroll = 0;

    window.addEventListener('scroll', function () {
      var currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 400) {
        wa.style.opacity = '0';
        wa.style.pointerEvents = 'none';
      } else {
        wa.style.opacity = '1';
        wa.style.pointerEvents = 'auto';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ================================================
  // INIT
  // ================================================
  document.addEventListener('DOMContentLoaded', function () {
    renderProducts();
    renderGallery();
    renderTestimonials();
    initLightbox();
    initScrollReveal();
    initMobileMenu();
    initHeaderScroll();
    setYear();
    initWaFloat();
  });

})();
