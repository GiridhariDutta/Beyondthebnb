// Inline Property Database compiled from scraping + Medellín expansion
const propertiesData = [
    {
        "id": "house-of-art",
        "name": "House of Art",
        "market": "miami",
        "address": "7431 SW 130 Avenue, Miami, FL 33183",
        "tagline": "One Of A Kind Luxury Villa with Pool and Jacuzzi! Just minutes from major Miami highways, this luxe villa is in a great location for group stays.",
        "sleeps": 13,
        "bedrooms": 6,
        "bathrooms": 4,
        "price": 1250,
        "image": "assets/hero_villa.png",
        "images": ["assets/hero_villa.png", "assets/tulum_villa.png", "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80"],
        "features": ["Luxe smart villa for 13 guests", "6 smart TVs & sound systems", "Saltwater pool & heated jacuzzi", "Parties and groups welcome", "Digital & physical artwork installations"],
        "amenities": ["Saltwater Pool", "Private Hot Tub", "Fast Wifi (405 Mbps)", "Smart Home Integration", "Chef Kitchen", "HDTV with Hulu", "Dedicated Workspace"]
    },
    {
        "id": "tulum-on-the-water",
        "name": "Tulum on the Water",
        "market": "miami",
        "address": "NE 82nd St & 12th Ave, Miami, FL 33138",
        "tagline": "SLEEPS 16!! Stunning waterfront compound separated into 4 different living areas. Exquisite boho vibes and designer finishes throughout.",
        "sleeps": 16,
        "bedrooms": 9,
        "bathrooms": 8,
        "price": 1650,
        "image": "assets/tulum_villa.png",
        "images": ["assets/tulum_villa.png", "assets/hero_villa.png", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"],
        "features": ["Waterfront pool & jacuzzi overlooking skyline", "Boho swings & hammocks", "Separated into 4 private living areas", "Boat berth & direct lake access", "Air hockey table & game zone"],
        "amenities": ["Waterfront Pool", "Private Hot Tub", "Boat Slip", "Hammocks", "Air Hockey", "Fast Wifi", "Fully Fenced Backyard"]
    },
    {
        "id": "villa-paraiso",
        "name": "Villa Paraiso",
        "market": "hollywood",
        "address": "Hollywood, FL 33019",
        "tagline": "Sublime Contemporary 2-story waterfront home. Privately gated, lush landscaping with a spacious deck, boat lift, pool, spa, & outdoor kitchen.",
        "sleeps": 16,
        "bedrooms": 6,
        "bathrooms": "4.5",
        "price": 1400,
        "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80", "assets/hero_villa.png"],
        "features": ["Gourmet kitchen with Electrolux refrigeration", "Expansive master suite overlooking water", "Smart lighting & surround sound", "Pool table inside luxury pad", "90 ft water frontage with boat lift"],
        "amenities": ["Waterfront Deck", "Pool Table", "Jacuzzi", "Barbecue Grill", "California Kitchen", "Wifi", "Smart Sound System"]
    },
    {
        "id": "boardwalk-mansion",
        "name": "Boardwalk Mansion",
        "market": "fort-lauderdale",
        "address": "1411 Bayview Dr, Fort Lauderdale, FL 33304",
        "tagline": "Sleeps 16+ people. Waterfront residence featuring a private rooftop lounge overlooking the Fort Lauderdale Intercoastal waterways.",
        "sleeps": 18,
        "bedrooms": 7,
        "bathrooms": "9.5",
        "price": 2200,
        "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"],
        "features": ["Putting green & basketball court on site", "Infinity pool & heated jacuzzi", "Outdoor California kitchen & firepits", "Private rooftop sunset deck lounge", "Floating modern prism staircase"],
        "amenities": ["Rooftop Deck", "Putting Green", "Basketball Court", "Infinity Pool", "Firepits", "Chef Kitchen", "Docking Station"]
    },
    {
        "id": "villa-coral",
        "name": "Villa Coral",
        "market": "miami",
        "address": "6558 SW 30th St, Miami, FL 33155",
        "tagline": "Newly built Mediterranean with a modern twist, just minutes from Coral Gables. Featuring 5 spacious bedrooms that sleep up to 14 guests.",
        "sleeps": 14,
        "bedrooms": 5,
        "bathrooms": 4,
        "price": 950,
        "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"],
        "features": ["Double height windows for tropical light", "Lap pool & 8 sun loungers", "Miracle Mile shopping just minutes away", "Ping pong table & cornhole games", "Highly rated location near Expressways"],
        "amenities": ["Lap Pool", "8 Sun Beds", "Ping Pong Table", "Air Conditioning", "CCTV Security", "Wifi", "Dryer/Washer"]
    },
    {
        "id": "villa-grace",
        "name": "Villa Grace",
        "market": "miami",
        "address": "1203 Santona St, Miami, FL 33146",
        "tagline": "Nestled in South Miami, neighboring Coral Gables waterways. Features 20-foot ceilings and walls of glass looking out at lush bamboo canopy.",
        "sleeps": 10,
        "bedrooms": 5,
        "bathrooms": 3,
        "price": 1100,
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"],
        "features": ["Arcade room with Pac-Man, NBA Jam, Foosball", "Summer kitchen & alfresco dining deck", "Lush bamboo gardens for extreme privacy", "Waterway access points nearby", "Luxurious open concept styling"],
        "amenities": ["Game Room (Arcades)", "Foosball Table", "Summer Kitchen", "Bamboo Privacy Wall", "Pool", "Wifi", "Air Conditioning"]
    },
    {
        "id": "villa-granada",
        "name": "Villa Granada",
        "market": "miami",
        "address": "5767 SW 35th St, Miami, FL 33155",
        "tagline": "Gated Modern Mediterranean Oasis renovated in 2022 to the highest standards. Features dynamic family wet bar and resort pool.",
        "sleeps": 18,
        "bedrooms": 7,
        "bathrooms": 6,
        "price": 1500,
        "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"],
        "features": ["Tropical sanctuary with resort-style pool", "Pool table inside gaming foyer", "Basketball hoop and ping-pong tables", "Grand foyer with vaulted brickwork ceilings", "Indoor-outdoor wet bar transition"],
        "amenities": ["Resort Pool", "Indoor Wet Bar", "Pool Table", "Ping-Pong Table", "Basketball Hoop", "Jacuzzi", "Wifi"]
    },
    {
        "id": "villa-terra",
        "name": "Villa Terra",
        "market": "davie",
        "address": "Davie, FL 33325",
        "tagline": "Oversized Luxury Estate featuring remodeled resort amenities. Sunken hot tub in master suite, marble light-up bars, acrylic fireplace.",
        "sleeps": 16,
        "bedrooms": 5,
        "bathrooms": 4,
        "price": 1350,
        "image": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"],
        "features": ["Acrylic floor-to-ceiling fireplace", "Light-up dual waterfall marble bars", "Master bedroom sunken hot tub spa", "Summer kitchen w/ professional chef setup", "Full-court basketball press on estate"],
        "amenities": ["Sunken Hot Tub", "Light-up Bar", "Acrylic Fireplace", "Chef Summer Kitchen", "Basketball Court", "Wifi", "AC"]
    },
    {
        "id": "el-poblado-penthouse",
        "name": "El Poblado Penthouse",
        "market": "medellin",
        "address": "Calle 10A #34, El Poblado, Medellín, Colombia",
        "tagline": "Breathtaking views from the highest double-story private terrace in El Poblado. Features private jacuzzi and design artwork.",
        "sleeps": 8,
        "bedrooms": 4,
        "bathrooms": "4.5",
        "price": 750,
        "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"],
        "features": ["Private heated jacuzzi overlooking valley", "Full VIP concierge access", "24/7 lobby security and access locks", "Walking distance to best restaurants & clubs", "Stunning dual-floor layout with art gallery"],
        "amenities": ["Valley-View Jacuzzi", "24/7 Security Desk", "Art Foyer", "Espresso Bar", "Wifi (300 Mbps)", "Wine Cellar", "AC"]
    },
    {
        "id": "villa-provenza",
        "name": "Villa Provenza",
        "market": "medellin",
        "address": "Carrera 35 #7, Provenza, Medellín, Colombia",
        "tagline": "Luxury tropical estate walking distance to Lleras Park. Features resort swimming pool, garden kitchen, and dedicated host.",
        "sleeps": 12,
        "bedrooms": 6,
        "bathrooms": 6,
        "price": 980,
        "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        "images": ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"],
        "features": ["Private indoor-outdoor swimming pool", "Veranda grill and dining area", "Surrounded by tropical gardens and trees", "Comes with bilingual concierge on call", "Modern architecture with native design accents"],
        "amenities": ["Private Pool", "Bilingual Host", "Veranda Grill", "Tropical Garden", "Wifi", "Espresso Machine", "AC"]
    }
];

// App States
let reservations = [
    {
        id: "RES-9021",
        guestName: "Alice Peterson",
        propertyName: "House of Art",
        checkIn: "2026-07-15",
        checkOut: "2026-07-20",
        total: 6250,
        status: "Confirmed",
        agreementSigned: true
    },
    {
        id: "RES-4033",
        guestName: "Marcus Vance",
        propertyName: "Tulum on the Water",
        checkIn: "2026-08-01",
        checkOut: "2026-08-04",
        total: 4950,
        status: "Confirmed",
        agreementSigned: true
    }
];

let leads = [
    {
        name: "Greg Wood",
        email: "greg@bidoevents.com",
        phone: "+1 (305) 331-7000",
        service: "Group Packages",
        message: "Requesting corporate retreat package at Boardwalk Mansion for 16 guests in October. Need yachts, DJ, and private chef setup."
    }
];

let activeProperty = null;
let currentWizardStep = 1;
let selectedBlackoutDates = {};
let pricingMultipliers = {
    peak: 1.3,
    weekend: 1.2
};

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
    renderProperties('all');
    setupHeaderScroll();
    setupSignatureCanvas();
    populateAdminPortal();
});

// Header Scrolled styling
function setupHeaderScroll() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Render property grid dynamically
function renderProperties(marketFilter) {
    const container = document.getElementById('properties-container');
    container.innerHTML = '';
    
    const filtered = marketFilter === 'all' 
        ? propertiesData 
        : propertiesData.filter(p => p.market === marketFilter);

    if(filtered.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No villas found in this market.</div>`;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-img-container">
                <img src="${p.image}" class="property-img" alt="${p.name}">
                <span class="property-market-badge">${p.market.replace('-', ' ').toUpperCase()}</span>
                <span class="property-price-badge">$${p.price.toLocaleString()} / Night</span>
            </div>
            <div class="property-details">
                <h3 class="property-name">${p.name}</h3>
                <div class="property-location">
                    <i class="fa-solid fa-location-dot text-gold"></i> ${p.address}
                </div>
                <div class="property-specs">
                    <div class="property-spec-item"><i class="fa-solid fa-bed text-gold"></i> <span>${p.bedrooms}</span> Beds</div>
                    <div class="property-spec-item"><i class="fa-solid fa-bath text-gold"></i> <span>${p.bathrooms}</span> Baths</div>
                    <div class="property-spec-item"><i class="fa-solid fa-users text-gold"></i> Sleeps <span>${p.sleeps}</span></div>
                </div>
                <p class="property-tagline">${p.tagline}</p>
                <div class="property-footer">
                    <button class="btn-outline" onclick="openPropertyModal('${p.id}')">View Details</button>
                    <button class="btn-gold" onclick="openBookingWizard('${p.id}')">Book Now</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Market filtering tabs
function filterMarket(market, element) {
    // Remove active state from siblings
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(c => c.classList.remove('active'));
    if(element) {
        element.classList.add('active');
    } else {
        // Find corresponding chip
        const chipToActivate = Array.from(chips).find(c => c.textContent.toLowerCase() === market.replace('-', ' ').toLowerCase());
        if(chipToActivate) chipToActivate.classList.add('active');
    }
    renderProperties(market);
}

function filterPropertiesByDropdown() {
    const val = document.getElementById('search-market').value;
    filterMarket(val);
    scrollToProperties();
}

function searchVillas() {
    const val = document.getElementById('search-market').value;
    filterMarket(val);
    scrollToProperties();
}

function scrollToProperties() {
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
}

// Modals management
function openPropertyModal(id) {
    const p = propertiesData.find(x => x.id === id);
    if (!p) return;
    activeProperty = p;
    
    document.getElementById('modal-property-name').innerText = p.name;
    document.getElementById('modal-property-address').innerHTML = `<i class="fa-solid fa-location-dot text-gold"></i> ${p.address}`;
    document.getElementById('modal-main-img').src = p.image;
    document.getElementById('modal-property-tagline').innerText = p.tagline;
    document.getElementById('rate-per-night').innerText = `$${p.price.toLocaleString()}`;
    
    // Set highlights features list
    const featuresList = document.getElementById('modal-property-features');
    featuresList.innerHTML = '';
    p.features.forEach(f => {
        featuresList.innerHTML += `<li><i class="fa-solid fa-check text-gold" style="margin-right:8px;"></i> ${f}</li>`;
    });
    
    // Build Gallery strip
    const galleryStrip = document.getElementById('modal-gallery-strip');
    galleryStrip.innerHTML = '';
    p.images.forEach((img, idx) => {
        galleryStrip.innerHTML += `
            <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="changeModalImage('${img}', this)">
                <img src="${img}" alt="Gallery ${idx + 1}">
            </div>
        `;
    });

    // Reset checkout forms
    document.getElementById('book-in-date').value = '';
    document.getElementById('book-out-date').value = '';
    document.getElementById('calc-nights').innerText = '0 nights';
    document.getElementById('calc-total').innerText = '$0';
    
    goToWizardStep(1);

    document.getElementById('property-modal').style.display = 'flex';
}

function changeModalImage(src, element) {
    document.getElementById('modal-main-img').src = src;
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}

function closePropertyModal() {
    document.getElementById('property-modal').style.display = 'none';
}

function openBookingWizard(id) {
    openPropertyModal(id);
}

// Booking Wizard Step Flow
function goToWizardStep(stepNum) {
    // Validate Step 1 before moving to 2
    if(stepNum === 2 && currentWizardStep === 1) {
        const inDate = document.getElementById('book-in-date').value;
        const outDate = document.getElementById('book-out-date').value;
        if(!inDate || !outDate) {
            alert('Please select check-in and check-out dates.');
            return;
        }
        if(new Date(outDate) <= new Date(inDate)) {
            alert('Check-out date must be after check-in date.');
            return;
        }
    }

    // Validate Signature in Step 3 before moving to 4
    if(stepNum === 4 && currentWizardStep === 3) {
        if(!signatureSigned) {
            alert('Please draw your signature to accept the Short-Term Lease Agreement.');
            return;
        }
    }

    currentWizardStep = stepNum;

    // Update Steps Progress indicators
    for(let i=1; i<=4; i++) {
        const wstep = document.getElementById(`wstep-${i}`);
        if(i < stepNum) {
            wstep.className = 'wizard-step completed';
        } else if (i === stepNum) {
            wstep.className = 'wizard-step active';
        } else {
            wstep.className = 'wizard-step';
        }

        const panel = document.getElementById(`bpanel-${i}`);
        if (i === stepNum) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    }

    if(stepNum === 4) {
        // Sync total price to checkout page
        document.getElementById('final-checkout-amount').innerText = document.getElementById('calc-total').innerText;
    }
}

// Compute Dynamic Quote
function calculateQuote() {
    if (!activeProperty) return;
    
    const inDate = document.getElementById('book-in-date').value;
    const outDate = document.getElementById('book-out-date').value;
    
    if(!inDate || !outDate) return;
    
    const start = new Date(inDate);
    const end = new Date(outDate);
    const timeDiff = end.getTime() - start.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if (nights <= 0) {
        document.getElementById('calc-nights').innerText = '0 nights';
        document.getElementById('calc-total').innerText = '$0';
        return;
    }
    
    document.getElementById('calc-nights').innerText = `${nights} nights`;
    
    // Core Dynamic Pricing Logic: Weekend & seasonal premium multipliers
    let totalRent = 0;
    let currentDay = new Date(start);
    
    for (let i = 0; i < nights; i++) {
        let nightRate = activeProperty.price;
        const dayOfWeek = currentDay.getDay(); // 0 is Sunday, 6 is Saturday
        
        // Weekend markup
        if (dayOfWeek === 5 || dayOfWeek === 6) { // Friday or Saturday
            nightRate = nightRate * pricingMultipliers.weekend;
        }
        
        // Season multiplier
        nightRate = nightRate * pricingMultipliers.peak;
        
        totalRent += nightRate;
        currentDay.setDate(currentDay.getDate() + 1);
    }
    
    // Add-on concierge calculations
    let addOnTotal = 0;
    
    const chefBox = document.getElementById('addon-chef');
    if (chefBox && chefBox.checked) {
        addOnTotal += parseFloat(chefBox.value) * nights;
    }
    
    const yachtBox = document.getElementById('addon-yacht');
    if (yachtBox && yachtBox.checked) {
        addOnTotal += parseFloat(yachtBox.value); // Flat fee
    }
    
    const secBox = document.getElementById('addon-security');
    if (secBox && secBox.checked) {
        addOnTotal += parseFloat(secBox.value); // Flat fee
    }
    
    const finalAmount = totalRent + addOnTotal;
    
    document.getElementById('calc-total').innerText = `$${Math.round(finalAmount).toLocaleString()}`;
}

// HTML5 Signature Pad Logic
let canvas, ctx;
let drawing = false;
let signatureSigned = false;

function setupSignatureCanvas() {
    canvas = document.getElementById('signature-pad');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    
    // Handle drawing triggers
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Touch events for mobile screens
    canvas.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
        e.preventDefault();
    });
    
    canvas.addEventListener('touchmove', (e) => {
        if (!drawing) return;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
        ctx.stroke();
        signatureSigned = true;
        e.preventDefault();
    });
    
    canvas.addEventListener('touchend', stopDrawing);
}

function startDrawing(e) {
    drawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    signatureSigned = true;
}

function stopDrawing() {
    drawing = false;
}

function clearSignaturePad() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    signatureSigned = false;
}

function confirmAgreement() {
    goToWizardStep(4);
}

// Stripe Payment processing simulator
function processStripePayment() {
    const cardNum = document.getElementById('stripe-card-num').value;
    const stripeEmail = document.getElementById('stripe-email').value;
    if (!cardNum || !stripeEmail) {
        alert('Please fill out card number and email address.');
        return;
    }
    
    // Simulate payment loading
    const payBtn = document.querySelector('#bpanel-4 button.btn-gold');
    payBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Securing Payment...`;
    payBtn.disabled = true;

    setTimeout(() => {
        // Success payment
        const newReservation = {
            id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
            guestName: stripeEmail.split('@')[0],
            propertyName: activeProperty.name,
            checkIn: document.getElementById('book-in-date').value,
            checkOut: document.getElementById('book-out-date').value,
            total: parseInt(document.getElementById('calc-total').innerText.replace(/[^0-9]/g, '')),
            status: "Confirmed",
            agreementSigned: true
        };
        
        reservations.push(newReservation);
        populateAdminPortal();
        
        alert(`Booking Confirmed! Confirmation email sent to ${stripeEmail}.\nReservation Reference: ${newReservation.id}`);
        
        // Reset loader
        payBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Submit Payment`;
        payBtn.disabled = false;
        
        closePropertyModal();
    }, 2000);
}

// CRM Form Processing
function handleCRMSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('crm-name').value;
    const email = document.getElementById('crm-email').value;
    const phone = document.getElementById('crm-phone').value;
    const service = document.getElementById('crm-service').value;
    const message = document.getElementById('crm-message').value;

    const newLead = { name, email, phone, service, message };
    leads.push(newLead);
    populateAdminPortal();

    alert(`Thank you ${name}! Your event inquiry was submitted to our group travel coordinators. We will call you within 2 hours.`);
    document.getElementById('crm-inquiry-form').reset();
}

function openCRMInquiry(serviceType) {
    document.getElementById('crm-service').value = serviceType;
    document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' });
}

// Navigation between Desktop sections, Mobile Simulator and Admin Dashboard
function showSection(sectionId) {
    const desktopWrapper = document.getElementById('desktop-view-wrapper');
    const mobileSimulator = document.getElementById('mobile-app-simulator');
    const adminDashboard = document.getElementById('admin-dashboard-view');
    
    // Reset tabs
    document.getElementById('desktop-mode-btn').classList.remove('active');
    document.getElementById('mobile-mode-btn').classList.remove('active');

    if (sectionId === 'desktop-home') {
        desktopWrapper.style.display = 'block';
        mobileSimulator.style.display = 'none';
        adminDashboard.style.display = 'none';
        document.getElementById('desktop-mode-btn').classList.add('active');
    } else if (sectionId === 'mobile-simulator') {
        desktopWrapper.style.display = 'none';
        mobileSimulator.style.display = 'flex';
        adminDashboard.style.display = 'none';
        document.getElementById('mobile-mode-btn').classList.add('active');
        loadMobileApp();
    } else if (sectionId === 'admin-dashboard') {
        desktopWrapper.style.display = 'none';
        mobileSimulator.style.display = 'none';
        adminDashboard.style.display = 'block';
    }
}

function toggleViewMode(mode) {
    if(mode === 'desktop') {
        showSection('desktop-home');
    } else {
        showSection('mobile-simulator');
    }
}

// --- ADMIN PORTAL LOGIC ---
function switchAdminTab(tabName, btn) {
    // Update active button
    const btns = document.querySelectorAll('.admin-menu-btn');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update active panel
    const panels = document.querySelectorAll('.admin-panel');
    panels.forEach(p => p.classList.remove('active'));
    document.getElementById(`admin-panel-${tabName}`).classList.add('active');

    if(tabName === 'blackout') {
        renderBlackoutCalendar();
    }
}

let selectedLeadIndex = null;
let leadNotes = {};
let leadStatuses = {};

function selectLead(idx, element) {
    selectedLeadIndex = idx;
    
    // Toggle active classes on list items
    const items = document.querySelectorAll('.lead-card-item');
    items.forEach(i => i.classList.remove('active'));
    if(element) {
        element.classList.add('active');
    }

    const lead = leads[idx];
    const detailsContainer = document.getElementById('admin-crm-details');
    
    const savedNote = leadNotes[idx] || "";
    const savedStatus = leadStatuses[idx] || "New";

    detailsContainer.innerHTML = `
        <div class="crm-detail-header" style="border-bottom: 1px solid var(--border-glass); padding-bottom: 15px; margin-bottom: 20px;">
            <div class="crm-detail-title" style="font-size: 1.6rem; font-family: var(--font-serif); margin-bottom: 4px;">${lead.name}</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
                Requested Service: <span class="text-gold" style="font-weight:600;">${lead.service}</span>
            </div>
            <div class="crm-contact-links" style="display: flex; gap: 15px; margin-top: 10px;">
                <a href="mailto:${lead.email}" class="crm-contact-btn" style="display: inline-flex; align-items: center; gap: 8px; color: var(--primary); text-decoration: none; font-size: 0.85rem; font-weight: 500;"><i class="fa-solid fa-envelope"></i> ${lead.email}</a>
                <a href="tel:${lead.phone}" class="crm-contact-btn" style="display: inline-flex; align-items: center; gap: 8px; color: var(--primary); text-decoration: none; font-size: 0.85rem; font-weight: 500;"><i class="fa-solid fa-phone"></i> ${lead.phone}</a>
            </div>
        </div>

        <div style="flex-grow: 1;">
            <h4 style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 10px; letter-spacing:0.05em;">Message Details</h4>
            <div class="crm-chat-bubble" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-dim); padding: 15px; border-radius: 12px; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 20px;">
                ${lead.message}
            </div>
        </div>

        <div style="margin-top: 20px; border-top: 1px solid var(--border-glass); padding-top: 15px;">
            <div class="form-row" style="margin-bottom: 15px;">
                <div class="form-group" style="margin-bottom:0;">
                    <label style="font-size:0.75rem; color:var(--text-secondary); display:block; margin-bottom:6px;">Lead Status</label>
                    <select onchange="updateLeadStatus(${idx}, this.value)" style="width:100%; background:var(--bg-base); border:1px solid var(--border-dim); color:#fff; padding:8px; border-radius:6px; outline:none; cursor:pointer;">
                        <option value="New" ${savedStatus === 'New' ? 'selected' : ''}>🔴 New Inquiry</option>
                        <option value="Contacted" ${savedStatus === 'Contacted' ? 'selected' : ''}>🟡 In Discussion</option>
                        <option value="Booked" ${savedStatus === 'Booked' ? 'selected' : ''}>🟢 Booked / Closed</option>
                        <option value="Archived" ${savedStatus === 'Archived' ? 'selected' : ''}>⚪ Archived</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom:0; display:flex; align-items:flex-end; gap:10px;">
                    <button class="btn-gold" style="padding:10px 15px; font-size:0.8rem; width:100%;" onclick="handleLeadReply(${idx})">
                        <i class="fa-solid fa-paper-plane"></i> Quick Outreach
                    </button>
                </div>
            </div>
            
            <div class="crm-notepad" style="margin-top:15px;">
                <label style="font-size:0.75rem; color:var(--text-secondary); display:block; margin-bottom:6px;">Internal Notes (Private)</label>
                <textarea class="crm-note-input" rows="3" placeholder="Write internal followups here... (auto-saves)" oninput="saveLeadNote(${idx}, this.value)" style="width:100%; background:rgba(0,0,0,0.2); border:1px solid var(--border-dim); border-radius:6px; color:#fff; padding:10px; font-size:0.85rem; resize:none; outline:none;">${savedNote}</textarea>
            </div>
        </div>
    `;
}

function updateLeadStatus(idx, val) {
    leadStatuses[idx] = val;
    renderCrmList();
}

function saveLeadNote(idx, note) {
    leadNotes[idx] = note;
}

function renderCrmList() {
    const listContainer = document.getElementById('admin-crm-list');
    listContainer.innerHTML = '';
    
    leads.forEach((l, idx) => {
        const savedStatus = leadStatuses[idx] || "New";
        let statusDot = "🔴";
        if(savedStatus === "Contacted") statusDot = "🟡";
        if(savedStatus === "Booked") statusDot = "🟢";
        if(savedStatus === "Archived") statusDot = "⚪";

        const card = document.createElement('div');
        card.className = `lead-card-item ${selectedLeadIndex === idx ? 'active' : ''}`;
        card.onclick = () => selectLead(idx, card);
        card.innerHTML = `
            <div class="lead-card-header">
                <span class="lead-card-name">${statusDot} ${l.name}</span>
                <span class="lead-card-service">${l.service}</span>
            </div>
            <div class="lead-card-snippet">${l.message}</div>
        `;
        listContainer.appendChild(card);
    });
}

function populateAdminPortal() {
    // 1. Calculate and populate stats summary
    let totalRevenue = 0;
    reservations.forEach(r => {
        totalRevenue += r.total;
    });
    
    const statsContainer = document.getElementById('admin-stats-summary');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card">
                <div class="stat-label">Total Revenue</div>
                <div class="stat-val">$${totalRevenue.toLocaleString()}</div>
                <div style="font-size:0.7rem; color:#4caf50;"><i class="fa-solid fa-arrow-trend-up"></i> 100% Direct Bookings</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Confirmed Stays</div>
                <div class="stat-val">${reservations.length}</div>
                <div style="font-size:0.7rem; color:var(--text-secondary);">Active Reservations</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Active Leads</div>
                <div class="stat-val">${leads.length}</div>
                <div style="font-size:0.7rem; color:var(--primary);">Pending Response</div>
            </div>
        `;
    }

    // 2. Populate Reservation cards
    const rCardsContainer = document.getElementById('admin-reservation-cards');
    rCardsContainer.innerHTML = '';
    
    reservations.forEach(r => {
        const prop = propertiesData.find(p => p.name === r.propertyName);
        const thumbImg = prop ? prop.image : 'assets/hero_villa.png';
        const checkInFormatted = new Date(r.checkIn + 'T00:00:00').toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
        const checkOutFormatted = new Date(r.checkOut + 'T00:00:00').toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});

        rCardsContainer.innerHTML += `
            <div class="res-card">
                <div class="res-details">
                    <img src="${thumbImg}" class="res-thumb" alt="${r.propertyName}">
                    <div class="res-info">
                        <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 2px; font-family: var(--font-serif);">${r.propertyName}</h4>
                        <p><i class="fa-solid fa-user text-gold" style="font-size:0.75rem; margin-right:4px;"></i> Guest: <strong>${r.guestName}</strong></p>
                        <p><i class="fa-solid fa-calendar text-gold" style="font-size:0.75rem; margin-right:4px;"></i> ${checkInFormatted} - ${checkOutFormatted}</p>
                    </div>
                </div>
                <div class="res-financials" style="text-align: right; min-width: 120px;">
                    <div class="res-price" style="font-size: 1.2rem; font-weight: 600; color: var(--primary); font-family: var(--font-serif);">$${r.total.toLocaleString()}</div>
                    <div class="res-meta" style="font-size: 0.75rem; color: var(--text-muted);">Paid via Stripe</div>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <span class="badge-status badge-confirmed" style="text-align:center;"><i class="fa-solid fa-circle-check"></i> ${r.status}</span>
                    <span style="font-size:0.75rem; color:#4caf50; text-align:center;"><i class="fa-solid fa-file-signature"></i> Signed</span>
                </div>
                <div class="res-actions" style="display: flex; gap: 10px;">
                    <button class="btn-outline" style="padding:8px 12px; font-size:0.75rem;" onclick="alert('Downloading Lease Agreement PDF for reference ID ${r.id}...')"><i class="fa-solid fa-download"></i> Lease</button>
                </div>
            </div>
        `;
    });

    // 3. Fill Blackout property dropdown
    const bSelect = document.getElementById('admin-blackout-property');
    bSelect.innerHTML = '';
    propertiesData.forEach(p => {
        bSelect.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });

    // 4. Populate CRM leads split-pane
    renderCrmList();
    
    // Auto-select first lead if available
    if(leads.length > 0 && selectedLeadIndex === null) {
        selectLead(0, null);
    } else if (selectedLeadIndex !== null) {
        selectLead(selectedLeadIndex, null);
    }
}

function handleLeadReply(idx) {
    const l = leads[idx];
    alert(`Initiating secure outreach to client ${l.name} (${l.email})... Opening email template.`);
}

function renderActiveBlackoutList(propertyId) {
    const listContainer = document.getElementById('admin-blackout-active-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    let activeDays = [];
    for (let key in selectedBlackoutDates) {
        if (key.startsWith(propertyId + "_") && selectedBlackoutDates[key] === true) {
            const dateStr = key.split('_')[1]; // e.g. "2026-07-15"
            activeDays.push(dateStr);
        }
    }
    
    if (activeDays.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); margin: auto; padding: 20px; font-size: 0.85rem;">
                <i class="fa-solid fa-calendar-check" style="font-size: 2.2rem; display: block; margin-bottom: 10px; opacity: 0.5;"></i>
                No blacked-out dates configured for this property.
            </div>
        `;
        return;
    }
    
    activeDays.sort();
    
    activeDays.forEach(dateStr => {
        const d = new Date(dateStr + 'T00:00:00');
        const formatted = d.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
        
        const badge = document.createElement('div');
        badge.className = 'glass-panel-light';
        badge.style.padding = '8px 14px';
        badge.style.borderRadius = '20px';
        badge.style.fontSize = '0.8rem';
        badge.style.display = 'inline-flex';
        badge.style.alignItems = 'center';
        badge.style.gap = '8px';
        badge.style.border = '1px solid rgba(211, 47, 47, 0.4)';
        badge.style.background = 'rgba(211, 47, 47, 0.05)';
        badge.style.color = '#ef5350';
        badge.innerHTML = `
            <span>${formatted}</span>
            <i class="fa-solid fa-circle-xmark" style="cursor:pointer; color:#ef5350; transition:color 0.2s;" onclick="removeBlackoutDate('${propertyId}', '${dateStr}')" title="Remove Blackout"></i>
        `;
        listContainer.appendChild(badge);
    });
}

function removeBlackoutDate(propertyId, dateStr) {
    const key = `${propertyId}_${dateStr}`;
    selectedBlackoutDates[key] = false;
    renderBlackoutCalendar();
}

function renderBlackoutCalendar() {
    const propertyId = document.getElementById('admin-blackout-property').value;
    const container = document.getElementById('admin-blackout-calendar');
    if (!container) return;
    container.innerHTML = '';

    // Simulate July 2026 calendar days
    for(let d = 1; d <= 31; d++) {
        const dateStr = `2026-07-${d < 10 ? '0' + d : d}`;
        const key = `${propertyId}_${dateStr}`;
        const isBlackedOut = selectedBlackoutDates[key] === true;

        const day = document.createElement('div');
        day.className = `cal-day ${isBlackedOut ? 'blacked-out' : ''}`;
        day.innerText = d;
        day.onclick = () => {
            selectedBlackoutDates[key] = !selectedBlackoutDates[key];
            renderBlackoutCalendar(); // Re-render calendar and list
        };
        container.appendChild(day);
    }
    
    // Update the right pane list of blacked out dates
    renderActiveBlackoutList(propertyId);
}

function saveBlackoutDates() {
    alert('Blackout parameters updated successfully!');
}

function savePricingRules() {
    pricingMultipliers.peak = parseFloat(document.getElementById('base-multiplier').value);
    pricingMultipliers.weekend = parseFloat(document.getElementById('weekend-multiplier').value);
    alert('Rate configuration models recalculated!');
}


// --- MOBILE NATIVE APP SIMULATION LOGIC ---
let activeAppTab = 'explore';
let appLoggedIn = false;
let userMessages = [
    { sender: "concierge", text: "Welcome to Miami, Greg! I am your AI concierge. How can I assist you with your booking at Boardwalk Mansion or yacht hire today?" }
];

function loadMobileApp() {
    loadAppTab('explore');
}

function loadAppTab(tab, btn) {
    activeAppTab = tab;
    
    // Toggle active state in footer
    const items = document.querySelectorAll('.app-nav-item');
    items.forEach(i => i.classList.remove('active'));
    if(btn) btn.classList.add('active');

    const appArea = document.getElementById('app-content-area');
    appArea.innerHTML = '';

    if (tab === 'explore') {
        renderAppExplore(appArea);
    } else if (tab === 'trips') {
        renderAppTrips(appArea);
    } else if (tab === 'concierge') {
        renderAppConcierge(appArea);
    } else if (tab === 'chat') {
        renderAppChat(appArea);
    }
}

function renderAppExplore(container) {
    container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 1.4rem;">Find Premium Villas</h3>
            <p style="color: var(--text-muted); font-size: 0.75rem;">Explore multi-market destinations direct</p>
        </div>
        
        <!-- Quick search scroll -->
        <div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:10px; margin-bottom: 20px;">
            <button class="filter-chip active" style="padding:6px 12px; font-size:0.75rem;">Miami</button>
            <button class="filter-chip" style="padding:6px 12px; font-size:0.75rem;">Medellín</button>
            <button class="filter-chip" style="padding:6px 12px; font-size:0.75rem;">F. Lauderdale</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 15px;">
            ${propertiesData.slice(0, 4).map(p => `
                <div class="glass-panel-light" style="border-radius:12px; overflow:hidden; border: 1px solid var(--border-dim);" onclick="openPropertyModal('${p.id}')">
                    <img src="${p.image}" style="width:100%; height:120px; object-fit:cover;">
                    <div style="padding: 10px;">
                        <h4 style="font-size:0.95rem; display:flex; justify-content:space-between; align-items:center;">
                            <span>${p.name}</span>
                            <span class="text-gold" style="font-size:0.8rem;">$${p.price}/nt</span>
                        </h4>
                        <p style="font-size: 0.7rem; color: var(--text-muted); margin-top:4px;"><i class="fa-solid fa-location-dot"></i> ${p.address.split(',')[1] || p.address}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderAppTrips(container) {
    if (!appLoggedIn) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 10px;">
                <i class="fa-solid fa-circle-user" style="font-size:3rem; color:var(--primary); margin-bottom:15px;"></i>
                <h3>Guest Trip Portal</h3>
                <p style="color: var(--text-secondary); font-size: 0.8rem; margin: 10px 0 20px 0;">
                    Log in with your reservation details to view keycodes, check-in instructions, and billing.
                </p>
                <form onsubmit="handleAppLogin(event)" style="display:flex; flex-direction:column; gap:10px; text-align:left;">
                    <div class="form-group">
                        <label style="font-size:0.7rem;">Reservation Ref ID</label>
                        <input type="text" id="app-login-ref" required value="RES-9021" style="padding:10px; font-size:0.8rem; background:rgba(255,255,255,0.05); border:1px solid var(--border-dim); border-radius:6px; color:#fff; width:100%;">
                    </div>
                    <div class="form-group">
                        <label style="font-size:0.7rem;">Your Email</label>
                        <input type="email" id="app-login-email" required value="alice@example.com" style="padding:10px; font-size:0.8rem; background:rgba(255,255,255,0.05); border:1px solid var(--border-dim); border-radius:6px; color:#fff; width:100%;">
                    </div>
                    <button type="submit" class="btn-gold" style="padding:10px; font-size:0.8rem; width:100%;">Log In</button>
                </form>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h3>Your Premium Stay</h3>
                <p style="color:var(--text-muted); font-size:0.75rem;">Upcoming check-in details</p>
            </div>
            
            <div class="app-card app-card-gold">
                <h4 class="text-gold" style="font-size:1.1rem;">House of Art</h4>
                <p style="font-size:0.75rem; color:var(--text-secondary); margin:5px 0 12px 0;">Miami, FL</p>
                
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; border-bottom:1px solid var(--border-dim); padding-bottom:8px; margin-bottom:8px;">
                    <span>Check In</span>
                    <strong>July 15, 2026</strong>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; border-bottom:1px solid var(--border-dim); padding-bottom:8px; margin-bottom:12px;">
                    <span>Digital Doorcode</span>
                    <strong class="text-gold"><i class="fa-solid fa-lock-open"></i> *4033#</strong>
                </div>
                
                <button class="btn-gold" style="width:100%; padding:8px; font-size:0.75rem;" onclick="alert('Digital Manual loading: Wifi SSID - BeyondTheBNB_Guest, Pass - luxuryrentals2026')">Open Guest Guide</button>
            </div>
        `;
    }
}

function handleAppLogin(event) {
    event.preventDefault();
    appLoggedIn = true;
    loadAppTab('trips');
}

function appLogout() {
    appLoggedIn = false;
    loadAppTab('explore');
}

function renderAppConcierge(container) {
    container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h3>Concierge Upgrades</h3>
            <p style="color:var(--text-muted); font-size:0.75rem;">Premium services delivered directly to your property</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="app-card" style="display:flex; align-items:center; gap:15px; cursor:pointer;" onclick="orderAppService('VIP Yacht Charter')">
                <span style="font-size:1.8rem; color:var(--primary);"><i class="fa-solid fa-ship"></i></span>
                <div>
                    <h4 style="font-size:0.9rem;">VIP Yacht Charter</h4>
                    <p style="font-size:0.7rem; color:var(--text-muted);">From $1,500 - Captain included</p>
                </div>
            </div>
            <div class="app-card" style="display:flex; align-items:center; gap:15px; cursor:pointer;" onclick="orderAppService('Private Chef Setup')">
                <span style="font-size:1.8rem; color:var(--primary);"><i class="fa-solid fa-utensils"></i></span>
                <div>
                    <h4 style="font-size:0.9rem;">Private Chef Dining</h4>
                    <p style="font-size:0.7rem; color:var(--text-muted);">Custom menu live at your villa</p>
                </div>
            </div>
            <div class="app-card" style="display:flex; align-items:center; gap:15px; cursor:pointer;" onclick="orderAppService('Luxury Airport Sprinter')">
                <span style="font-size:1.8rem; color:var(--primary);"><i class="fa-solid fa-bus"></i></span>
                <div>
                    <h4 style="font-size:0.9rem;">VIP Mercedes Sprinter</h4>
                    <p style="font-size:0.7rem; color:var(--text-muted);">Private chauffeur transit</p>
                </div>
            </div>
        </div>
    `;
}

function orderAppService(serviceName) {
    alert(`Request for ${serviceName} received! Our mobile coordinators will text your mobile phone (+1) to align booking times.`);
}

function renderAppChat(container) {
    container.innerHTML = `
        <div style="display:flex; flex-direction:column; height: 600px;">
            <!-- Message feed -->
            <div style="flex-grow:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px; padding:5px;" id="app-chat-feed">
                ${userMessages.map(m => `
                    <div style="align-self: ${m.sender === 'user' ? 'flex-end' : 'flex-start'}; 
                                background: ${m.sender === 'user' ? 'var(--primary)' : 'var(--bg-surface-elevated)'}; 
                                color: ${m.sender === 'user' ? '#000' : 'var(--text-primary)'};
                                border: 1px solid ${m.sender === 'user' ? 'var(--primary)' : 'var(--border-dim)'};
                                padding: 10px 14px; border-radius:12px; max-width: 85%; font-size:0.78rem;">
                        ${m.text}
                    </div>
                `).join('')}
            </div>

            <!-- Chat input -->
            <form onsubmit="handleAppSend(event)" style="display:flex; gap:8px; border-top:1px solid var(--border-dim); padding-top:10px; margin-top:10px;">
                <input type="text" id="app-chat-input" placeholder="Ask AI Concierge..." style="flex-grow:1; padding:10px; background:rgba(255,255,255,0.05); border:1px solid var(--border-dim); border-radius:6px; color:#fff; font-size:0.8rem; outline:none;">
                <button type="submit" class="btn-gold" style="padding:10px 15px; font-size:0.8rem;"><i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    `;
    
    // Auto scroll chat to bottom
    setTimeout(() => {
        const feed = document.getElementById('app-chat-feed');
        if (feed) feed.scrollTop = feed.scrollHeight;
    }, 50);
}

function handleAppSend(event) {
    event.preventDefault();
    const input = document.getElementById('app-chat-input');
    const text = input.value.trim();
    if(!text) return;

    userMessages.push({ sender: 'user', text: text });
    input.value = '';
    renderAppChat(document.getElementById('app-content-area'));

    // AI Auto Reply Simulator
    setTimeout(() => {
        let reply = "I am processing your inquiry. Would you like me to book a yacht charter or private chef for your upcoming trip?";
        
        const lower = text.toLowerCase();
        if (lower.includes('yacht')) {
            reply = "Excellent choice. I can schedule our 50ft Luxury yacht for $1,500. Should I confirm this request on your current card?";
        } else if (lower.includes('chef') || lower.includes('food')) {
            reply = "We offer a 3-course private chef package at $450/day. Let me know if you would like me to coordinate with the host.";
        } else if (lower.includes('wifi') || lower.includes('password')) {
            reply = "The wifi SSID at House of Art is 'BeyondTheBNB_Guest' and the passcode is 'luxuryrentals2026'.";
        } else if (lower.includes('key') || lower.includes('door')) {
            reply = "Your digital check-in keycode will activate on July 15. The door keypad entry code is: *4033#.";
        }

        userMessages.push({ sender: 'concierge', text: reply });
        renderAppChat(document.getElementById('app-content-area'));
    }, 1000);
}
