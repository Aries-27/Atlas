const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode","elaina"],
    desc: "Say hello to bot.",
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('https://images8.alphacoders.com/111/1115208.jpg')
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
*🎏Hobbies* : Coding, Video Editing, Workout 💪, Love Watching Animes and Kdramas

*Script* 🧣\n\n*🎀 Total Forks:* ${repo.forks_count}\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${repo.license.name}\n*📁 Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${repo.html_url}\n\n❝ Dont forget to give a Star ⭐ to the repo. It's made with restless harkwork by *Team ATLAS*. ❞\n\n*©️ Team ATLAS- 2023*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
