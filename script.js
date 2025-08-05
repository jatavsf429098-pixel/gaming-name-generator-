const names = ["ShadowSniper", "GhostHunter", "NinjaX", "ProDestroyer", "FireFury", "NoobMasterX", "DeadlyDuo", "CyberRanger", "SniperQueen", "ZombieCrush"];
const titles = ["The Silent Avenger", "Master of Mayhem", "Destroyer of Worlds", "Fearless Legend", "The Ultimate Warrior", "Noob Slayer", "Bullet Whisperer"];
const descriptions = [
  "A stealthy shadow in the battlefield, feared by all.",
  "Master of close-range chaos, always on top.",
  "Strikes fast and disappears faster. Never seen, always felt.",
  "Brings destruction with style and humor.",
  "An unstoppable gamer with an unbeatable strategy."
];
const tagsList = ["gamer", "gaming", "pro", "shooter", "survivor", "fps", "battle", "multiplayer", "action", "strategy"];
const thumbnails = [
  "Fire blazing skull with gaming headset",
  "Animated soldier aiming sniper",
  "Dark forest with glowing eyes",
  "Retro arcade theme background",
  "Pixelated battleground chaos"
];

function generateGameContent() {
  const game = document.getElementById("gameInput").value.trim();
  if (!game) return alert("Please enter a game name!");
  const name = names[Math.floor(Math.random() * names.length)];
  const title = titles[Math.floor(Math.random() * titles.length)];
  const desc = descriptions[Math.floor(Math.random() * descriptions.length)];
  const tags = shuffle(tagsList).slice(0, 5).join(", ");
  const thumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];

  document.getElementById("nameOutput").innerText = name;
  document.getElementById("titleOutput").innerText = title;
  document.getElementById("descOutput").innerText = desc;
  document.getElementById("tagOutput").innerText = tags;
  document.getElementById("thumbOutput").innerText = thumb;

  updateHistory(game);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function copyContent() {
  const all = `Name: ${nameOutput.innerText}\nTitle: ${titleOutput.innerText}\nDescription: ${descOutput.innerText}\nTags: ${tagOutput.innerText}\nThumbnail: ${thumbOutput.innerText}`;
  navigator.clipboard.writeText(all).then(() => alert("Copied!"));
}

function downloadContent() {
  const all = `Name: ${nameOutput.innerText}\nTitle: ${titleOutput.innerText}\nDescription: ${descOutput.innerText}\nTags: ${tagOutput.innerText}\nThumbnail: ${thumbOutput.innerText}`;
  const blob = new Blob([all], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'gaming-content.txt';
  link.click();
}

function shareContent() {
  const all = `Name: ${nameOutput.innerText}\nTitle: ${titleOutput.innerText}\nDescription: ${descOutput.innerText}`;
  if (navigator.share) {
    navigator.share({ title: "Gaming Content", text: all });
  } else {
    alert("Share not supported!");
  }
}

function updateHistory(game) {
  const historyList = document.getElementById("historyList");
  const entry = document.createElement("li");
  entry.innerText = game;
  historyList.prepend(entry);
  while (historyList.childElementCount > 5) {
    historyList.removeChild(historyList.lastChild);
  }
}

function showSuggestions() {
  const input = document.getElementById("gameInput").value.toLowerCase();
  const box = document.getElementById("suggestionBox");
  box.innerHTML = "";
  if (!input) return;
  const filtered = names.filter(n => n.toLowerCase().includes(input));
  filtered.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    li.onclick = () => {
      document.getElementById("gameInput").value = item;
      box.innerHTML = "";
    };
    box.appendChild(li);
  });
}

function downloadVideo() {
  const url = document.getElementById("videoUrl").value;
  if (!url) return alert("Paste a video link!");
  alert("This feature requires backend or external API integration.");
}

function changeLanguage(lang) {
  alert("Language switch feature coming soon!");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function submitContact(event) {
  event.preventDefault();
  alert("Thanks for contacting us! We’ll reply soon.");
}
