const names = [
  "ShadowSniper", "GhostHunter", "NinjaX", "ProDestroyer", "FunnyGamer007",
  "LaughingAssassin", "FireFury", "XxNoobMasterxX", "SilentBullet", "CrazyChamp"
];

const titles = [
  "The Unstoppable Legend of the Battle Arena",
  "The Silent Hunter Who Owns the Shadows",
  "Mastermind Behind Every Victory",
  "The Ultimate Gamer of Destruction and Glory",
  "The One-Man Army in Virtual Warfare",
  "Gaming's Most Feared Name of 2025",
  "Conqueror of Noob Lands and Pro Realms",
  "Champion of Chaos with a Joystick",
  "God of Headshots and Critical Kills",
  "The Phantom King of Virtual Worlds"
];

const descriptions = [
  "This legendary gamer is feared across every multiplayer arena for their incredible precision, unbeatable strategies, and fearless gameplay. Wherever they go, chaos follows — and enemies fall.",
  "With unmatched skills and lightning-fast reflexes, this player dominates every game. Their name is etched into the scoreboard, and their presence alone sends enemies running.",
  "Known for turning every mission into a massacre, this gamer plays with deadly focus and tactical brilliance. Their style is fast, furious, and always entertaining.",
  "They laugh in the face of danger, troll their enemies with flair, and still finish top of the leaderboard — a deadly mix of humor and headshots.",
  "Not just a gamer — a myth, a legend, and a force of destruction. Their loadout is fire, aim is godlike, and mind is unbeatable. Watch out, they’re online."
];

function generateName() {
  const random = names[Math.floor(Math.random() * names.length)];
  document.getElementById("nameOutput").innerText = random;
}

function generateTitle() {
  const random = titles[Math.floor(Math.random() * titles.length)];
  document.getElementById("titleOutput").innerText = random;
}

function generateDescription() {
  const random = descriptions[Math.floor(Math.random() * descriptions.length)];
  document.getElementById("descOutput").innerText = random;
}
