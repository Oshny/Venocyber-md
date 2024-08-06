//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xrS29TSURJSFNSV05HNExOeXpEKzU3R05QZDYyRUFsS2VsSFFVamlGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2FNc2gycWQvTEovOXJUOXpqSDZ1R01rUVZjcmlpN3lJVzlYcUNZbEJHaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSXh1V2lYa3FkaWVQdDBsUTBvak4ydjNxQ3pPVit5RDV4N3FndWJpaW5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXdVc4TC9hbEo3ZlhPYjRIOGQ1ZjlvckhmNDNTTWRnbVpzQkhzcmFWQlUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QL25VSnppeWw4Q2pkWHYvZVBZRzJ3YWhDUitYOHZpSTRES1l0MTdUSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlhU0tRdHdkRE5CMit0ZTlNMlpKTnZCd3NYbWl5aU45c3BLK1NRMys0VTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1UL0wvSjhoRVZ6KzVnM2tHeUZ2MkVzZTJNa0RwenNFSHo4UDRmODAwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUp5RWVMLy9sT3kybEZCQUVTcGprYnM1WUVsNzdtdHhlQU5WcU5tVHBtND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJYZTFYY0NXVlo2ekV3MTdLSTN4YmtWazc4M09RUUNack5paHZUQmVHSUpCZnk3akVwN0xkSkpmVHJNN1BtYnlEN1dwMDFOOVVDRFNOMUxNc0NWaGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6ImZPdEh5cVB6R1c4SUtQQzVKeHFMNlpuS0MxT0c1RStNOTNuTlQ2YndpaTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBYQkpzcnZFVFZDN1BuZWdoMGUwcVEiLCJwaG9uZUlkIjoiMmNhNmM3MWItZDFmOS00NzFiLTg5MzItZjA2MWFkNGI4YWM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRVRkg3S29mNFhBWFNKZkE4MFZjNE1vWUJpQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzOXdDZ3owYVg5YTBVclo0NWJDbXMxQ0p2cjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFFNQUpNUlkiLCJtZSI6eyJpZCI6IjUwOTQwMTQxNzgzOjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Inx8fPCdkbrwnZGy8J2RtvCdkbPwnZKBIF9fX/Cdl6HwnZeV8J2XlHx8fCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnJMbzBFUTBLUEt0UVlZRFNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid0JSR2RVeXV6UVF5amI2dWxoQWhNTmJYWjc0QnhKQWVWdlJCUnZkOGtXOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS2NoT3V2b0tNWmx3QS9xZFRNZEp3ZkpUWTB2SlF2SnpqNVFsd2hNRmQ2dS84d214WitWajcvR3dGSGsyYldsNDl2aTFESDB4bjV4VWFHWFlZaUsrRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkNsSmZMd0JEaFUvamlzOHRwQnA3b1UwUGpaYlI5cXhraHBhdFlJaGI5amZDSCtSUUZaVzRJVVFTYWs0NldyODNKN3lybHJPczEybDZXYmJuOEZpZWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDAxNDE3ODM6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0FVUm5WTXJzMEVNbzIrcnBZUUlURFcxMmUrQWNTUUhsYjBRVWIzZkpGdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk3ODc4MH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-VENOCYBER-𝐌𝐃😍",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
