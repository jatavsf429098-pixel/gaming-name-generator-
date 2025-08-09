// TOOL DATA
const tools = [
  {
    title: "Esports Team Name Ideas",
    desc: "Generate catchy names for pro gaming teams.",
    icon: "fa-bolt",
    category: "name",
    link: "https://www.spinxo.com/"
  },
  {
    title: "Streamer Username Generator",
    desc: "Create unique streaming usernames.",
    icon: "fa-video",
    category: "name",
    link: "https://www.namegeneratorfun.com/gaming"
  },
  {
    title: "Cool Font Name Generator",
    desc: "Turn names into stylish fonts.",
    icon: "fa-font",
    category: "name",
    link: "https://coolfontsgenerator.com/"
  },
  {
    title: "AI Profile Picture Generator",
    desc: "Create an AI-generated gaming profile pic.",
    icon: "fa-robot",
    category: "avatar",
    link: "https://nickerly.com/"
  },
  {
    title: "Live Esports Match Tracker",
    desc: "View live scores and stats.",
    icon: "fa-trophy",
    category: "stats",
    link: "https://www.progametools.com/"
  },
  {
    title: "Gaming Meme Generator",
    desc: "Make hilarious gaming memes.",
    icon: "fa-laugh-beam",
    category: "utility",
    link: "https://coolsymbol.com/"
  },
  {
    title: "Global Gaming Chatroom",
    desc: "Chat with gamers worldwide.",
    icon: "fa-comments",
    category: "community",
    link: "https://discord.com"
  },
  {
    title: "AI Voice Pack Generator",
    desc: "Custom voices for stream alerts.",
    icon: "fa-microphone",
    category: "bonus",
    link: "https://nickerly.com/"
  }
];

// RENDER TOOL CARDS
const container = document.getElementById("toolContainer");
tools.forEach(t => {
  const card = document.createElement("div");
  card.classList.add("tool-card");
  card.setAttribute("data-category", t.category);
  card.innerHTML = `
    <i class="fas ${t.icon}"></i>
    <h3>${t.title}</h3>
    <p>${t.desc}</p>
    <a href="${t.link}" target="_blank" class="btn">Open Tool</a>
  `;
  container.appendChild(card);
});

// CATEGORY FILTER
document.querySelectorAll("nav li").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector("nav li.active").classList.remove("active");
    btn.classList.add("active");
    const cat = btn.getAttribute("data-category");
    document.querySelectorAll(".tool-card").forEach(card => {
      card.style.display = (cat === "all" || card.getAttribute("data-category") === cat) ? "block" : "none";
    });
  });
});

// SEARCH FILTER
document.getElementById("searchInput").addEventListener("keyup", e => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".tool-card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? "block" : "none";
  });
});

// MODAL FUNCTIONALITY FOR BUILT-IN TOOLS
function openBuiltIn(tool) {
  document.getElementById("modal").style.display = "block";
  if (tool === "name-generator") {
    document.getElementById("modalBody").innerHTML = `
      <h2>Gaming Name Generator</h2>
      <button onclick="generateName()">Generate Name</button>
      <p id="generatedName" style="margin-top:10px;color:#0ff;font-weight:bold;"></p>
    `;
  }
}

function generateName() {
  const names = ["ShadowNova", "PixelPhantom", "VortexWolf", "BlazeReaper", "CyberKnight", "NeonSpectre"];
  document.getElementById("generatedName").innerText = names[Math.floor(Math.random() * names.length)];
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};
window.onclick = e => {
  if (e.target == document.getElementById("modal")) document.getElementById("modal").style.display = "none";
};
