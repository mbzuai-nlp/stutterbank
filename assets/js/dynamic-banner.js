// Dynamic Banner JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create mouse follower
    createMouseFollower();
    
    // Add interactive zones
    createInteractiveZones();
    
    // Add dynamic content rotation
    createDynamicContent();
    
    // Add scroll-based animations
    addScrollAnimations();
    
    // Add particle system
    createParticleSystem();
    
    // Add dynamic stats counter
    createStatsCounter();
});

// Mouse follower effect
function createMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);
    
    document.addEventListener('mousemove', function(e) {
        follower.style.left = e.clientX - 10 + 'px';
        follower.style.top = e.clientY - 10 + 'px';
    });
    
    // Hide follower when mouse leaves the page
    document.addEventListener('mouseleave', function() {
        follower.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        follower.style.opacity = '1';
    });
}

// Create floating interactive zones
function createInteractiveZones() {
    const hero = document.querySelector('.page__hero--overlay');
    if (!hero) return;
    
    for (let i = 0; i < 3; i++) {
        const zone = document.createElement('div');
        zone.className = 'interactive-zone';
        zone.style.animationDelay = (i * 2) + 's';
        hero.appendChild(zone);
        
        // Add hover effects
        zone.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.5)';
            this.style.background = 'radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent)';
        });
        
        zone.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = '';
            this.style.background = 'radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent)';
        });
    }
}

// Dynamic content rotation
function createDynamicContent() {
    const title = document.querySelector('.page__hero--overlay .page__title');
    if (!title) return;
    
    const originalText = title.textContent;
    const dynamicTexts = [
        "StutterBank! A global dataset to empower research",
        "Empowering people who stutter through AI",
        "Advancing speech therapy with technology",
        "Building the future of stuttering assessment"
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            title.textContent = dynamicTexts[currentIndex];
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            currentIndex = (currentIndex + 1) % dynamicTexts.length;
        }, 500);
    }, 4000);
}

// Scroll-based animations
function addScrollAnimations() {
    const hero = document.querySelector('.page__hero--overlay');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
        
        // Parallax effect for background
        const backgroundRate = scrolled * -0.3;
        hero.style.backgroundPosition = `center ${backgroundRate}px`;
    });
}

// Particle system
function createParticleSystem() {
    const hero = document.querySelector('.page__hero--overlay');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '1';
    hero.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, ${Math.random() * 0.5 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s linear infinite`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 15000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    
    // Create initial particles
    for (let i = 0; i < 10; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// Dynamic stats counter
function createStatsCounter() {
    const stats = document.querySelectorAll('.page__hero--overlay li');
    
    stats.forEach(stat => {
        const text = stat.textContent;
        const numberMatch = text.match(/\d+/);
        
        if (numberMatch) {
            const targetNumber = parseInt(numberMatch[0]);
            const prefix = text.substring(0, text.indexOf(numberMatch[0]));
            const suffix = text.substring(text.indexOf(numberMatch[0]) + numberMatch[0].length);
            
            let currentNumber = 0;
            const increment = targetNumber / 100;
            
            const counter = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(counter);
                }
                stat.innerHTML = prefix + Math.floor(currentNumber) + suffix;
            }, 50);
        }
    });
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .page__hero--overlay .page__title {
        transition: all 0.5s ease;
    }
`;
document.head.appendChild(style);
