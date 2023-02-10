const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "elaina",
    alias: ["ronen","bot"],
    desc: "Say hello to bot.",
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/FantoX001/Atlas-MD')
        let repo = repoInfo.data
        let txt = `      🧣 *${botName}*
        
Hii! I'm Elaina a whatsapp bot, Developed by Atlas and Reverse engineered by Ronen to make your whatsapp more enjoyable and to do everything possible on whatsapp.

💜 *Our official support group* : https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO
🐨 *My YouTube* : https://youtube.com/c/RonenAMVs
🔖 *Website* : Coming soon...


*About Ronen💜*

*🎗️Name* : Ronen Singha
*🧧Age* : Immortal heheh✨
*♦️Country* : India🇮🇳
*🎯Gender* : Male👨‍🦱

*❣️Relationship status* : Single
*🎏Hobbies* : Coding, Video Editing, Workout 💪, Love Watching Animes and Kdramas`


        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
