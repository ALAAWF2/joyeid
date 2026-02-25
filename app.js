// ==== Products Rendering ====
const productsGrid = document.getElementById('productsGrid');

// Format price utility if needed (currently string in data.js)
// Example price logic in case we want to calculate totals
function extractPriceValue(priceStr) {
    // Converts "١٢٣٫٧٥ ر.س" or "123.75 ر.س" to float
    let englishNumStr = priceStr
        .replace(/٫/g, '.')
        .replace(/ر\.س/g, '')
        .trim();

    // Replace Arabic numbers with English numbers for calculation
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    for (let i = 0; i < 10; i++) {
        englishNumStr = englishNumStr.split(arabicNumbers[i]).join(i);
    }

    return parseFloat(englishNumStr) || 0;
}

function renderProducts() {
    productsGrid.innerHTML = '';

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image_url}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.src='https://via.placeholder.com/500x500?text=صورة+المنتج'">
            </div>
            <div class="product-info">
                <h4 class="product-title">${product.name}</h4>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${index})">
                    إضافة للسلة <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// ==== Cart Logic ====
let cart = [];
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');

function updateCartUI() {
    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart-msg">سلتك فارغة وعيدك ينتظر!</div>';
        cartTotal.innerText = '0.00 ر.س';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const priceVal = extractPriceValue(item.price);
        total += priceVal;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image_url}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        cartItems.appendChild(cartItemEl);
    });

    cartTotal.innerText = total.toFixed(2) + ' ر.س';
}

window.addToCart = function (productIndex) {
    const product = products[productIndex];
    cart.push(product);
    updateCartUI();

    // Tiny animation on cart icon
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);

    // Open cart automatically (optional, but good for user feedback)
    openCart();
};

window.removeFromCart = function (cartIndex) {
    cart.splice(cartIndex, 1);
    updateCartUI();
};

function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
}

function hideCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
}

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', hideCart);
cartOverlay.addEventListener('click', hideCart);

// Checkout API integration
document.getElementById('checkoutBtn').addEventListener('click', async () => {
    if (cart.length === 0) {
        alert("يرجى إضافة منتجات للسلة أولاً.");
        return;
    }

    // Disable button and show loading state
    const checkoutBtn = document.getElementById('checkoutBtn');
    const originalText = checkoutBtn.innerHTML;
    checkoutBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري إرسال الطلب...';
    checkoutBtn.disabled = true;

    try {
        // Calculate total just as an example parameter
        const totalValue = cart.reduce((acc, item) => acc + extractPriceValue(item.price), 0);

        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartItems: cart,
                totalValue: totalValue.toFixed(2)
            })
        });

        const result = await response.json();

        if (result.success) {
            alert(`تم تأكيد استلام طلبك بنجاح! رقم الطلب الخاص بك: ${result.orderId}`);
            // Clear cart
            cart = [];
            updateCartUI();
            hideCart();
        } else {
            alert('حدث خطأ أثناء معالجة الطلب. يرجى المحاولة لاحقاً.');
        }

    } catch (error) {
        console.error('Error during checkout:', error);
        alert('حدث خطأ في الاتصال بالخادم.');
    } finally {
        // Restore button state
        checkoutBtn.innerHTML = originalText;
        checkoutBtn.disabled = false;
    }
});

// ==== Fireworks Canvas Animation ====
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

let cw = window.innerWidth;
let ch = window.innerHeight;
canvas.width = cw;
canvas.height = ch;

window.addEventListener('resize', () => {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;
});

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8
        };
        this.alpha = 1;
        this.friction = 0.98;
        this.gravity = 0.05;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.draw();
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.015;
    }
}

let particles = [];
const colors = ['#fca311', '#e63946', '#a8dadc', '#457b9d', '#ffd700', '#ff8fa3'];

function createFirework(x, y) {
    const particleCount = 40;
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y, color));
    }
}

// Auto fire
setInterval(() => {
    if (Math.random() > 0.6) {
        const x = Math.random() * cw;
        const y = Math.random() * (ch / 2); // Top half
        createFirework(x, y);
    }
}, 800);

// Click to fire
window.addEventListener('click', (e) => {
    // Avoid firing when clicking on buttons or cart
    if (!e.target.closest('.btn') && !e.target.closest('.cart-sidebar')) {
        createFirework(e.clientX, e.clientY);
    }
});

function animate() {
    requestAnimationFrame(animate);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // Fading trail matching transparent background
    ctx.fillRect(0, 0, cw, ch);
    ctx.globalCompositeOperation = 'source-over';

    particles = particles.filter(p => p.alpha > 0);
    particles.forEach(p => p.update());
}

// ==== Initialize ====
renderProducts();
animate();
