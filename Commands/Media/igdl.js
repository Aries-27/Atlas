const {instagramdl, instagramdlv4, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const { getBuffer } = require("../../lib/myfunc");

module.exports = {
    name: "igdl",
    alias:["instagram","instadl","instagramdl","igvid"],
    desc: "To download an instagram video",
    category: "Media",
    usage: `igdl <video link>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
  
      if (!args[0])
          return Miku.sendMessage(
            m.from,
            { text: `Please provide a YouTube Video link !` },
            { quoted: m }
          );
      if(!args[0].includes("instagram.com"))
          return Miku.sendMessage(
              m.from,
              { text: `Please provide a valid Instagram Video link !` },
              { quoted: m }
            );
            const results =await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0]))
            .catch(async _ => await instagramdlv3(args[0]))
            .catch(async _ => await instagramdlv4(args[0]))           
       
            for (const { url } of results){
              await Miku.sendMessage(m.from, {video: {url: url}, caption: `Downloaded by: *${botName}*` }, { quoted: m });
            }
          }}