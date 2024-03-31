const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_26_03_31_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0ozU1FLd1lHL3h4bXRYS21sZ2EyMjlWRDQyeVAzRDh1WjRQS1NmSjRuZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkxiM3RTZkFpWGNtZ3Z1SmtUVktBWVVHTTdrck5PQitMdFBvZU12SVljMTg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0RoYzdjb1FZVnFJSWozZzZOZldmdVRzMWtmdGhnVlFJRWlVUkY0L3ZHQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkRCSFFlWGF5Z2w0MUNIUk1Jc3FaQXUwUU1MZU01NTg5SEY3cG81SUFjVzA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaU9kMkxRWDB0Y1R2bHRpd0RIWDN6VWhGR0hSSFdHY1BtYy9LSFlsbE8xaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkd4RnJvYnhlU0pZdWc4QWdsSFJnZ3lINUNjZk5OaXNXckxxekdYR3JxbHc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDSHNHdW9OYzljTlpMbENnRlRTa1pybUZUanFUaXV5dHYxVGhYWnJ2aFd3PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYnlackxKQ1MzTGtuZXR2d29nMXE1WTE4RHpESThiN3N2QVNvR3VYODF4UT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI2TithUjdScXZYNitZdjBTQ0dyQmhMd21jSzRtVkpIQU1KSHovSGpHRXN0WWp1TmZlUXZYa21PZmRWTHB6UWgyWmJHNnNnSzJNTks5UmpLTlFvb1JDdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NjksXCJhZHZTZWNyZXRLZXlcIjpcInkzM290ZlBUbHQzT3BraXBtdDJiUnNNRFNxNFRkcXV5cmhsWDdqSmx4K0k9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMzNDY1ODA3NTdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQjFFMUM3NkIxOEYxNDhCNjMxRjlFMUQ0OTM0NDg4MjFcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTkyNzU4NX0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMzNDY1ODA3NTdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiREFENEM4MDFCMkNGQzNGODlCNjk2Rjc4MjkzNkI3OThcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTkyNzU4NX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIm8xQkJfaTBTVDVLckVGeDg4TnRfYXdcIixcInBob25lSWRcIjpcIjZiNGI2ZjA1LTNiMjItNDNlNy05ZjdkLTgzZWQ5NjkwMzJhZVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNUhURTZSOGRwTHBLZ1h6U1BXVms2SG44YWZNPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlQzSUlxKzMwN0VkckJWZGFvOVZIOGN0QTJMST1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCI1MUhNTFc5QVwiLFwibWVcIjp7XCJpZFwiOlwiOTIzMzQ2NTgwNzU3OjJAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIuCyoF/gsqAo44CN776f776b776fKe+9o1wiLFwibGlkXCI6XCIxNTc5NzMwOTE2NTY0MToyQGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSkRwK1BrQkVKdmlwN0FHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInlraGxiazNTWDFWT21aQnVpcDl2RStmUzhNc0liQ2x5cHNnRXJiM3ZOUkk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJUdU5SMGJpVGZOTXhNZFQ5UzkzNllMaWRKcWFKQk9TMWJtZkdwNk5NTElPMGcvOU1RVTlpeExZbUNwMDEvVEpNdXJrNGM1a0FsNE4xeGNIL2VTN2xDUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIndWSVdGWVVmSVhXK0VqQWxNaTBIU0pjN3duN0xxMjFlU2NEZzdjMEw5NXZodHA1OFNNalhVa3VhdnBQUUFqNmVOMjdGV1A0WVJuVW1SejkzaW9PTUJnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMzNDY1ODA3NTc6MkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJjcElaVzVOMGw5VlRwbVFib3FmYnhQbjB2RExDR3dwY3FiSUJLMjk3elVTXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTkyNzU4MyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFJWUxcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNa2tiMVJqT2VESkNrYU9icHJZR1VhZnE5c3FTbDFzd0srQk9rUWFLTktzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyNDE3MDM4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzExOTI3NTg1MTM2XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's Jaani",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "c8ec5b7e-bfe0-4639-a5fd-9b82d495e8ae",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
