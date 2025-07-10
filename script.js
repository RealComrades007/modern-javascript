AOS.init({
  duration: 1100,
  once: true,
  offset: 60,
});

// Hamburger menu logic
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 700){
      navLinks.classList.remove('active');
    }
  });
});

// Dark mode toggle
const darkToggle = document.getElementById('darkmode-toggle');
const darkIcon = document.getElementById('dark-icon');
const lightIcon = document.getElementById('light-icon');
const body = document.body;
function setDarkMode(on) {
  if (on) {
    body.classList.add('dark-mode');
    darkIcon.style.display = "none";
    lightIcon.style.display = "inline";
    localStorage.setItem('darkmode', 'on');
  } else {
    body.classList.remove('dark-mode');
    darkIcon.style.display = "inline";
    lightIcon.style.display = "none";
    localStorage.setItem('darkmode', 'off');
  }
}
if (localStorage.getItem('darkmode') === 'on') {
  setDarkMode(true);
} else {
  setDarkMode(false);
}
darkToggle.addEventListener('click', () => {
  setDarkMode(!body.classList.contains('dark-mode'));
});

// TEAM BIOS
const bios = {
  alex: {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alex Brown",
    role: "Lead AI Engineer",
    bio: "Alex architects the AI systems at VectorSense. With 10+ years in machine learning, he’s passionate about building ethical, scalable solutions."
  },
  sara: {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sara Lee",
    role: "Product Designer",
    bio: "Sara shapes the user experience and visual design, ensuring every product is intuitive and delightful. She’s an advocate for inclusive tech."
  },
  mike: {
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Mike Doe",
    role: "Automation Specialist",
    bio: "Mike automates complex business processes using AI. He’s skilled in robotics and workflow optimization for enterprise clients."
  },
  nina: {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Nina Patel",
    role: "Data Scientist",
    bio: "Nina loves extracting insights from massive datasets. She’s a regular speaker on data ethics and predictive analytics."
  },
  james: {
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "James Kim",
    role: "Backend Developer",
    bio: "James builds the backbone of VectorSense’s platforms, focusing on high performance and security in distributed systems."
  },
  emily: {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Emily Wang",
    role: "UI/UX Engineer",
    bio: "Emily codes beautiful, user-friendly interfaces. She bridges the gap between design and engineering for seamless products."
  },
  josh: {
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Josh Smith",
    role: "DevOps Lead",
    bio: "Josh automates deployments and ensures reliability. He’s passionate about cloud infrastructure and continuous delivery."
  },
  olivia: {
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Olivia Taylor",
    role: "Marketing Manager",
    bio: "Olivia connects VectorSense with real businesses. She crafts compelling stories and drives customer engagement."
  },
  liam: {
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    name: "Liam Harris",
    role: "AI Ethicist",
    bio: "Liam ensures VectorSense’s AI is fair and transparent. He leads our efforts in responsible AI deployment."
  },
  zoe: {
    img: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Zoe Carter",
    role: "Frontend Developer",
    bio: "Zoe turns complex logic into clean, interactive web experiences. She champions accessibility in everything she builds."
  }
};
document.querySelectorAll('.member').forEach(member => {
  member.addEventListener('click', function() {
    const key = member.getAttribute('data-member');
    const data = bios[key];
    if (data) {
      document.getElementById('bio-details').innerHTML = `
        <img src="${data.img}" alt="${data.name}"/>
        <h3>${data.name}</h3>
        <p>${data.role}</p>
        <div class="bio">${data.bio}</div>
      `;
      document.getElementById('bio-modal').style.display = 'flex';
    }
  });
});
document.getElementById('close-bio').onclick = function() {
  document.getElementById('bio-modal').style.display = 'none';
};

// PLAN DETAILS
const planDetails = {
  starter: {
    name: "Starter",
    price: "$29/mo",
    features: [
      "Basic Analytics Dashboard",
      "Email Support",
      "Up to 1 user",
      "Monthly Usage Reports",
      "Community Access",
      "Integrates with Google Sheets",
      "30-day free trial",
      "Secure cloud hosting"
    ]
  },
  pro: {
    name: "Professional",
    price: "$79/mo",
    features: [
      "Advanced Analytics & AI",
      "Priority Support",
      "Up to 10 users",
      "Weekly Usage Reports",
      "Third-party integrations",
      "Customizable dashboards",
      "Role-based access control",
      "24/7 uptime guarantee"
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: "$199/mo",
    features: [
      "All Features Included",
      "Dedicated Account Manager",
      "Unlimited users",
      "Custom AI models",
      "API access",
      "On-premise deployment option",
      "Compliance & security audits",
      "Premium onboarding & training"
    ]
  }
};
document.querySelectorAll('.choose-plan').forEach(btn => {
  btn.addEventListener('click', function() {
    const plan = btn.getAttribute('data-plan');
    const data = planDetails[plan];
    if (data) {
      document.getElementById('plan-details').innerHTML = `
        <h3>${data.name} <span class="price">${data.price}</span></h3>
        <ul>
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      `;
      document.getElementById('plan-modal').style.display = 'flex';
    }
  });
});
document.getElementById('close-plan').onclick = function() {
  document.getElementById('plan-modal').style.display = 'none';
};
// AOS Animate On Scroll - animations repeat every scroll
AOS.init({
  duration: 1100,
  once: false, // repeat animation every time element enters viewport
  offset: 60,
});

// Hamburger, dark mode, team bios, plan modal JS unchanged...

// SPARKLE EFFECT
const canvas = document.getElementById('sparkle-canvas');
const ctx = canvas.getContext('2d');
let sparkles = [];

function resizeCanvas() {
  // Make canvas cover hero section
  const hero = document.querySelector('.hero');
  canvas.width = hero.offsetWidth;
  canvas.height = hero.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
window.addEventListener('DOMContentLoaded', resizeCanvas);

// Sparkle object
function createSparkle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    life: Math.random() * 60 + 40
  };
}
function drawSparkle(s) {
  ctx.save();
  ctx.globalAlpha = s.opacity;
  ctx.beginPath();
  ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.shadowColor = '#43cea2';
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.restore();
}
function sparkleAnimate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (sparkles.length < 60) {
    sparkles.push(createSparkle());
  }
  sparkles.forEach((s, i) => {
    drawSparkle(s);
    s.x += s.dx;
    s.y += s.dy;
    s.life--;
    if (s.life < 0) sparkles.splice(i, 1);
  });
  requestAnimationFrame(sparkleAnimate);
}
resizeCanvas();
sparkleAnimate();