// DOM Yüklendikten sonra çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobil cihaz tespiti
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window;
    
    // Açılış Animasyonu Kontrolü
    const loadingScreen = document.getElementById('loading-screen');
    
    // Sayfa yüklendiğinde body'den overflow hidden'ı kaldır
    setTimeout(() => {
        document.body.style.overflow = 'visible';
    }, 4500);

    // Loading screen'i tamamen kaldır
    setTimeout(() => {
        loadingScreen.remove();
    }, 5000);

    // Mobil Hamburger Menü
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Mobil menü açıkken scroll'u engelle
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    });

    // Menü dışına tıklandığında menüyü kapat
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    });

    // Menü linklerine tıklandığında mobil menüyü kapat
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    });

    // Touch olayları için özel işleyiciler
    if (isTouch) {
        // Touch cihazlarda hover efektlerini disable et
        document.body.classList.add('touch-device');
        
        // Menu items için touch feedback
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('touchstart', () => {
                item.style.transform = 'scale(0.98)';
            });
            
            item.addEventListener('touchend', () => {
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 150);
            });
        });
        
        // Button touch feedback
        document.querySelectorAll('button, .cta-button').forEach(btn => {
            btn.addEventListener('touchstart', () => {
                btn.style.transform = 'scale(0.95)';
            });
            
            btn.addEventListener('touchend', () => {
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    // Smooth Scroll Animasyonları - Mobil için optimize edilmiş
    const observerOptions = {
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Mobil cihazlarda daha hızlı animasyon
                if (isMobile) {
                    entry.target.style.transitionDuration = '0.6s';
                }
                entry.target.classList.add('animated');
                // Animasyon tamamlandıktan sonra observer'dan çıkar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Tüm animasyon elementlerini gözlemle
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Navbar Scroll Efekti - Mobil için optimize edilmiş
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    let ticking = false;

    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar arkaplan opaklığını ayarla
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
            navbar.style.borderBottom = '1px solid rgba(255, 107, 157, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '1px solid rgba(255, 107, 157, 0.1)';
        }

        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // CTA Button Animasyonu
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Menü bölümüne smooth scroll
            const menuSection = document.getElementById('menu');
            menuSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Button'a tıklama efekti
            ctaButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                ctaButton.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Menü Kartları Hover Efekti
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Galeri Hover Efekti
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Diğer tüm galeri öğelerini hafifçe soluklaştır
            galleryItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.7';
                    otherItem.style.transform = 'scale(0.95)';
                }
            });
        });
        
        item.addEventListener('mouseleave', () => {
            // Tüm galeri öğelerini normale döndür
            galleryItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
                otherItem.style.transform = 'scale(1)';
            });
        });
    });

    // Şubeler Animasyonları
    const branchItems = document.querySelectorAll('.branch-item');
    branchItems.forEach((item, index) => {
        // Staggered animation
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('coming-soon')) {
                item.style.transform = 'translateY(-10px) scale(1.02)';
                item.style.boxShadow = '0 20px 50px rgba(255, 107, 157, 0.4)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('coming-soon')) {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.boxShadow = 'var(--shadow-light)';
            }
        });
    });

    // Branch buttons click analytics (opsiyonel)
    const branchButtons = document.querySelectorAll('.branch-button:not(.disabled)');
    branchButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Click animasyonu
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
            
            // Analytics için branch name'i log et (opsiyonel)
            const branchName = button.closest('.branch-item').querySelector('h3').textContent;
            console.log(`Şube ziyaret edildi: ${branchName}`);
        });
    });

    // Info cards counter animation
    const infoNumbers = document.querySelectorAll('.info-number');
    const animateCounters = () => {
        infoNumbers.forEach(numberEl => {
            const target = numberEl.textContent.replace(/\D/g, ''); // Sadece rakamları al
            if (target) {
                const targetNumber = parseInt(target);
                let currentNumber = 0;
                const increment = targetNumber / 30; // 30 frame'de tamamla
                
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        currentNumber = targetNumber;
                        clearInterval(timer);
                    }
                    
                    // Özel formatları koru
                    if (numberEl.textContent.includes('+')) {
                        numberEl.textContent = Math.floor(currentNumber) + '+';
                    } else if (numberEl.textContent.includes('0850')) {
                        numberEl.textContent = '0850';
                    } else {
                        numberEl.textContent = Math.floor(currentNumber);
                    }
                }, 50);
            }
        });
    };

    // Counter animasyonunu observer ile kontrol et
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const branchInfo = document.querySelector('.branch-info');
    if (branchInfo) {
        counterObserver.observe(branchInfo);
    }

    // İletişim Formu Animasyonu
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // KVKK rızası kontrolü
            const kvkkConsent = document.getElementById('kvkk-consent');
            if (kvkkConsent && !kvkkConsent.checked) {
                alert('Lütfen KVKK Aydınlatma Metni\'ni okuyarak kişisel verilerinizin işlenmesine rıza gösteriniz.');
                return;
            }
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Loading animasyonu
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
            submitBtn.disabled = true;
            
            // Simüle edilmiş form gönderimi
            setTimeout(() => {
                submitBtn.textContent = 'Gönderildi! ✓';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'var(--gradient-pink)';
                    submitBtn.disabled = false;
                    contactForm.reset();
                    
                    // KVKK checkbox'ını da sıfırla
                    if (kvkkConsent) {
                        kvkkConsent.checked = false;
                    }
                }, 2000);
            }, 1500);
        });
    }

    // Form Input Animasyonları
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            input.style.borderColor = 'var(--primary-pink)';
            input.style.boxShadow = '0 0 15px rgba(255, 107, 157, 0.2)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
            input.style.boxShadow = 'none';
        });
    });

    // Pankek Icon Scroll Rotation Animasyonu
    let iconLastScrollTop = 0;
    let currentRotation = 0;
    const rotatingPankekIcon = document.querySelector('.pankek-icon');
    
    if (rotatingPankekIcon) {
        // Smooth rotation için transition ekle
        rotatingPankekIcon.style.transition = 'transform 0.1s linear';
        
        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDelta = scrollTop - iconLastScrollTop;
            
            // Scroll miktarına göre dönüş miktarını hesapla
            const rotationSpeed = 0.5;
            const rotationDelta = scrollDelta * rotationSpeed;
            
            // Mevcut rotasyona ekle/çıkar
            currentRotation += rotationDelta;
            
            // Rotasyonu uygula
            rotatingPankekIcon.style.transform = `rotate(${currentRotation}deg)`;
            
            // Son scroll pozisyonunu güncelle
            iconLastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, 16)); // 60fps için 16ms throttle
    }

    // Paralax Efekti - Güncellenmiş versiyon (katmanlı yapı için)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.pankek-icon');
        
        parallaxElements.forEach(element => {
            const speed = 0.3;
            const yPos = scrolled * speed;
            
            // Sadece translateY uygula, rotation ayrı kontrol ediliyor
            const currentTransform = element.style.transform;
            const rotateMatch = currentTransform.match(/rotate\([^)]*\)/);
            const rotateValue = rotateMatch ? rotateMatch[0] : 'rotate(0deg)';
            
            element.style.transform = `translateY(${yPos}px) ${rotateValue}`;
        });
    });

    // Sayfa Scroll İndikatörü
    const createScrollIndicator = () => {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--gradient-pink);
            z-index: 10000;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(indicator);
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            indicator.style.width = scrollPercentage + '%';
        });
    };
    
    createScrollIndicator();

    // Hover Efektleri için Rastgele Animasyonlar
    const addRandomHoverEffects = () => {
        const features = document.querySelectorAll('.feature');
        features.forEach((feature, index) => {
            feature.style.animationDelay = `${index * 0.1}s`;
            
            feature.addEventListener('mouseenter', () => {
                feature.style.transform = 'translateX(15px) scale(1.05)';
                feature.style.background = 'linear-gradient(135deg, #ffeef5 0%, #ffe0eb 100%)';
            });
            
            feature.addEventListener('mouseleave', () => {
                feature.style.transform = 'translateX(0) scale(1)';
                feature.style.background = 'var(--secondary-pink)';
            });
        });
    };
    
    addRandomHoverEffects();

    // Sosyal Medya Butonları Animasyonu
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) rotate(10deg) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Pankek Icon'a tıklama efekti - Scroll rotation ile uyumlu
    const clickablePankekIcon = document.querySelector('.pankek-icon');
    if (clickablePankekIcon) {
        clickablePankekIcon.addEventListener('click', () => {
            // Mevcut rotasyon değerini al
            const currentTransform = clickablePankekIcon.style.transform;
            const rotateMatch = currentTransform.match(/rotate\(([^)]*)\)/);
            const currentRotationValue = rotateMatch ? parseFloat(rotateMatch[1]) : currentRotation;
            
            // Tıklama animasyonu - mevcut rotasyona ek 360 derece ekle
            const clickRotation = currentRotationValue + 360;
            
            // Geçici olarak transition'ı değiştir
            clickablePankekIcon.style.transition = 'all 0.6s ease-in-out';
            clickablePankekIcon.style.transform = `scale(1.2) rotate(${clickRotation}deg)`;
            clickablePankekIcon.style.filter = 'hue-rotate(45deg)';
            
            setTimeout(() => {
                // Rotasyon değerini güncelle
                currentRotation = clickRotation;
                
                // Normal boyut ve filtre
                clickablePankekIcon.style.transform = `scale(1) rotate(${currentRotation}deg)`;
                clickablePankekIcon.style.filter = 'none';
                
                // Transition'ı eski haline döndür
                setTimeout(() => {
                    clickablePankekIcon.style.transition = 'transform 0.1s linear';
                }, 100);
            }, 600);
        });
    }

    // Performans optimizasyonu için throttle fonksiyonu
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Scroll olaylarını throttle ile optimize et
    window.addEventListener('scroll', throttle(() => {
        // Burada scroll optimizasyonları yapılabilir
    }, 16)); // 60fps için

    console.log('� Minipan Website tamamen yüklendi! Lezzetli deneyiminiz başlasın!');
});