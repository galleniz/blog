
var map = {
    "DISCORD_PARTNER": "https://github.com/mezotv/discord-badges/raw/main/assets/discordpartner.svg",
    "NITRO":"https://github.com/mezotv/discord-badges/raw/main/assets/discordnitro.svg",
    "ACTIVE_DEVELOPER":"https://github.com/mezotv/discord-badges/raw/main/assets/activedeveloper.svg",
    "HOUSE_BALANCE":"https://github.com/mezotv/discord-badges/raw/main/assets/hypesquadbalance.svg",
    "HOUSE_BRAVERY":"https://github.com/mezotv/discord-badges/raw/main/assets/hypesquadbravery.svg",
    "HOUSE_BRILLIANCE":"https://github.com/mezotv/discord-badges/raw/main/assets/hypesquadbrilliance.svg",
}
console.log(map)
fetch(`https://universal-cors-proxy.glitch.me/${encodeURIComponent(`https://api.mdcdev.me/v1/users/@me`)}`)
.then(response => response.json())
.then(data => {
    const userText = `${JSON.stringify(data)}`;
    console.log(data);
})
.catch(error => console.error(error));