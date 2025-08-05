const names = [
    "ShadowSlayer", "XxDarkWolfxX", "GhostSniper", "NinjaZ", "CrazyKiller",
    "DeathMachine", "PixelPunk", "SkullCrusher", "VortexBlade", "GamingGuru"
];

function generateName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById('nameDisplay').innerText = names[randomIndex];
}
