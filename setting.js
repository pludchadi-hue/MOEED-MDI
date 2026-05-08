const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "MOEED-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJyL0g2RWVIaCs3dktDQVdiaGtZN2JWbkJHRS9JVVJTbWNubXdKeHNuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVJvditjUy9BdjljbmErV0FUZjJqTzVlNThoUDQ5VCtsMDhxdkpJdkQzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRytacENlekFoVTdWSkFLKzdsSFpOOThPTVRETUF5ZHZpb0pCVXg3OEZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDY3Zza1VqU0I4VjZ1UTN4Y3czZW5ZUk1nKzYrcjJFTHBKcnlWRFFIWHo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDYWV4Yk9OUWd5Q2FYY3MrY0Z3Yy9WMTBNc0ZaMGpJZldNWGhWYU9NR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo5S2xrWHNLWWhSc3pXaXd0N2dwZWIzMU55akpXUVBnQTk0R0FQbEFiVmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0R1ZFJKZGQzT2U1WEZnTW9NTFU5ZjBXSWhsVlJsUWdseFFBNk9EUEwxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienI1OFVIV2hlQlBTUTlFWUJOS1hudmxDSnJncWlLbjV0cTViSGRnUnlpST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVoMGt1U0tWK3pyQVVvaUZGY2JlVXBXWUk3UUJTakZ6a1NvR0svWW9SU25SdTVOTHdSVmlud3I2MlN1ajByUmgxK3pLYnI3YjVBSGlJSjk1bzJ6WkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiI2aW1BVzRHQlV1OXJ6TTF0akx3MjBaMEVNNnJWNjdXb1QzZ1BGM2h2K1VZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI1NTIyNzU1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM4NzA4RTQ4NjZDRENBQjE0MUEwRTVFODc2OTJFOTYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3ODIxMTQ0MX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI2QlZGRkJHOSIsIm1lIjp7ImlkIjoiOTIzMjU1MjI3NTUzOjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNDExMTE1Nzg3NTkyNDY6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1b3Z2RURFT1cwOWM4R0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9yV2tYM0FjYmZvSFFTNHlSVzR5MWgwSlY1SGR6RDZhTlZycVBvaG0xWEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZzcmYrZmwyb2IyWTJxZE5Uelg4VmUwMzN0VkxJeUVwWDk3eFIxSkRKN1JQeTQ5WGEvcWNSaURCUmdwcWxseVpiSVQ2VXBMWXpmNG9yVWJGMW5Sb0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwaHBiVUdrazF2ZlUvai9MOHhqSWlvcUx6TnhDTmlOYXpSRGpWYzB2Qm9LSEtRNWxHTGQ3VllyQjlYK2ZBc0dsQzlHZ2pEcCttK1I3dFN2elFRZC9BUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTExMTU3ODc1OTI0Njo3QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmNjFwRjl3SEczNkIwRXVNa1Z1TXRZZENWZVIzY3crbWpWYTZqNkladFZ3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtJRFFnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzgyMTE0MzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmt4In0=",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MOEED-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MOEED-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "MOEED-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923094676374",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MoeedMD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923094676374",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







