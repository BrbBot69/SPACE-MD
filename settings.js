require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGqXBltrNLuuWgQAAHwHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGAG5GtERy0VBaRRFQNyYhxIKBLk1VSg44b9PYE*PzMPubC9PRRWVeTLPOck3UFYpRibqwewbqJv0CgkalqSvEZgBpY1j1IAxiCCBYAaCtWJeKL8N116NerEIDjhSjAlsF+isM*SiCV43ibhzpWL+Ah5jULenPA3*EBA71*TcTrsiIsfag5ybq1nteuHVW+PKY*WmOh61NpJNlXoBjyEiTJu0TOb1GRWogbmJehumzefgpwp9UndFeHTdOC5H1uSw5m+GbPO1crCNtCpWO+wUxjGnPgl*PuKcioQZH2RrT4*Or8wF6umVPsB9wpLRqTuZDM3ZS1sP3uHjNClRtIxQSVLSf7rvrFbpLDM5hbJ2oDaL7uIfxRvvqUFk85Nos06uIiNmCjQ963PAeXWr7ySOR+j1YMr1ytn3V02XVnXtv5bHEMXFFscBfeJ193fgdvOhlcv*6ft24drxqJtUnCON5r13DE87pi0umVZXIir0dcphdq6Jq0X4OfiLgxjsp3bZyXBzIFwzDbI4t7utJ7AnfUo6OqkU7JL1hE5+wYekbf6E8qKOZK30ghEybuc9m1t+cw54y7kR6lg4G+*usz4vFZLlUK91Lwh7Dwts0+90Z*WqpcH2zgtZt20N1qLtOr8Hb6G0k5OXZ0UX1C8jMKMfY9CgJMWkgSStyucey40BjK4OChtEnu0Fb9GFz5QMC1fDnSu+6Bl3ylqfgiMz5cRusjjchHhL3z31Xr2AMaibKkQYo8hIMama3kIYwwRhMPv76xiUqCPvxA3ppvQYxGmDiVu2dV7B6IPVj0MYhlVbEqcvQ3VYoAbMqF*biJC0TPDQx7aETXhOr0g9Q4LBLIY5Rj8rRA2KwIw0LfrpWrWKhsZr0tQxV44AxqB4EpJGYAYYQaRFZsowvDQThL*wl9sQFdb1lxIRMAYlLJ6swTyHGIxB*rxFCywn0ZRE8wI3ZcTh5nDw+Al4iB8hAtMcgxlQl6NIpObbRLxvOjkIVEeWTVkemvhR4IdS3pnIyNlP+OjI4Y1*suiTZc+FWEFecM9aNc8nc1UTnYoys3P1T0EG71aNR2v9rm8ClOnmfgIpprO02jHJpI17SeC3EBpuyiLjtFkuF9Tt6IWsfmBbfRowxmrKnvmztZEcib8fS39ld62iDbIagwhd0xD9nmzEmVp39cUg803KPOie7eJGpV3XsDOviLNd4pdEixXRkKBt94HTJFrG1yHiPXFyOFOOdl+8TaSCyS1zv8S7w86yldu7hp8eyn*MrvSproG64TVO0XMU*ODov6h8xz0IjnqMfwvxY7b8iz+VQAi8alP66KTlxX3t37VuM70dct9ihaQ+xp2cTOZva7ViIXg8vo5BnUMSV00x*GiKEwRj0FTtIN9lGVd*yKTK7lKV36vOISbyL0vs0wJhAosazGiBYzmKFzjx*Su7qWoD4jOYAdu*cMog716ua4dA8mEwIA*PMl2Cx3dQSwECFAMUAAAICABqlwZbazS7rloEAAB8BwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACCBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '27767494368',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'BrbBot69',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
