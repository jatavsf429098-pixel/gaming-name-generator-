const names = ["ShadowSniper", "NinjaX", "FireFury"];
const titles = ["Mastermind of Victory", "Conqueror of Chaos"];
const descriptions = [
  "This gamer dominates with unmatched reflexes and tactics.",
  "Feared and respected across all battlegrounds."
];
const thumbnails = [
  "🔥 Fire background with gamer name in bold red.",
  "👑 Crown over joystick with stars and skulls.",
  "💥 Exploding background with tagline."
];

function generateGameContent() {
  const game = document.getElementById("gameInput").value.trim();
  if (!game) return alert("Please enter a game name!");

  const name = names[Math.floor(Math.random() * names.length)];
  const title = titles[Math.floor(Math.random() * titles.length)];
  const desc = descriptions[Math.floor(Math.random() * descriptions.length)];

  const result = `🎮 Game: ${game}\n👤 Name: ${name}\n🏷️ Title: ${title}\n📝 Description: ${desc}`;
  document.getElementById("generatedOutput").innerText = result;

  // Add to history
  const history = document.getElementById("historyOutput");
  const entry = document.createElement("p");
  entry.textContent = result;
  history.appendChild(entry);
}

function copyContent() {
  const text = document.getElementById("generatedOutput").innerText;
  navigator.clipboard.writeText(text).then(() => alert("Copied!"));
}

function downloadContent() {
  const text = document.getElementById("generatedOutput").innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "gaming-content.txt";
  link.click();
}

function shareContent() {
  const text = document.getElementById("generatedOutput").innerText;
  if (navigator.share) {
    navigator.share({ title: "Gaming Content", text });
  } else {
    alert("Sharing not supported on this browser.");
  }
}

function showSuggestions() {
  const input = document.getElementById("gameInput").value.toLowerCase();
  const suggestions = ["Free Fire", "PUBG", "Call of Duty", "Valorant", "Minecraft"];
  const matched = suggestions.filter(g => g.toLowerCase().includes(input));

  const box = document.getElementById("suggestionBox");
  box.innerHTML = "";
  matched.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => {
      document.getElementById("gameInput").value = item;
      box.innerHTML = "";
    };
    box.appendChild(li);
  });
}

function generateThumbnail() {
  const idea = thumbnails[Math.floor(Math.random() * thumbnails.length)];
  document.getElementById("thumbnailIdea").innerText = idea;
}

function changeLang(lang) {
  document.getElementById("searchLabel").innerText =
    lang === "hi" ? "🔍 अपना गेम नाम लिखें" : "🔍 Enter Game Name";
}
