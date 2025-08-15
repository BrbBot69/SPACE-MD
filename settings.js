require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGCYD1spsLJ4VQQAAHwHAAAKAAAAY3JlZHMuanNvbpVU2ZKiSBT9l3zV6GIRASMqYlJwpRRBXHBiHhJIJJXNzATFDv99Aququx9memp4SnI599x7zr3fQV4Qhi3cgMF3UFJSI47bJW9KDAZgWMUxpqALIsQRGIDeguqTW6KhxalQrLEor1HukVMWp1VpmyNoS6y0O5F8E+EreHRBWQUpCX8DaA*He7Z7OR5Iere5OjeSIpeC0grk3JrulUXhXKK3PB4q6fUVPFpERCjJj6MywRmmKLVws0KEfo0+Gx72x6rjiv1Vo8HTQrYnJBDfrsu7Jx9Cf2vHyPXSyPe37Gv0O1VjHh0Ij45kjLhyaXrZds+LVejdNXudbE63i7z28qE3dt7pM3LMcTSLcM4Jb75c98myMfd3GEOUOZqwDA3sTmhqHEabRTbcKmKt1uVJv02SifM14itEe2Q+iQRPuA+L0MG7JRYqq6zDaNzpvMCA7Q4e317sFP5KfEU*vXL+P3UPR+VbHYQjeJVlYQ*ddYLGc7kfxvt5GZuxaGSRPo0a0ZTOX6NvTVeGOUZ9jSQm2tuaO5wcxHHdv3YEiVjSahgnW6M4C3C8+Ukf8Yr+jqV2cRokRPtdCDX7qLgF3F10KzZnjEkkW+5VNKuzbdRRNpUmFHDYuV9hYrpzKfVmbyxT6sV2ZJ8b2U8sXWQj8UUYSvD6+szojJtZBAbiowsoPhLGKeKkyJ97otgFKKrXOKSYP8sLjubbijbjfTOU5jiOIs*xtzw8FHca2rrZ3139u2fcfEgmwivogpIWIWYMR1PCeEGbBWYMHTEDgz**6oIc3*i7cG24vtgFMaGMb*KqTAsUfar6eYjCsKhyvm7y0GgXmIKB8HMbc07yI2vrWOWIhgmpsZEgzsAgRinDPzLEFEdgwGmFf3StUURt4VWnN1cnuga6IHsKQiIwAJKqiZokS1JfH0jiH+zbtUVFZfktxxx0QY6yp2ooTREDXZA+X4lqT9FFQRf7qiJLWvuyPXj8INziR5gjkjIwAMbciDRh5MjFqXODvj9qILQgbIv4meCnU96VsLNOPy*72whSuNStoKb21bdf7uJIWyD9LpI4nnpVc03Go38CaRF2wbic01Fw77gTN+TbjVXoXib1BGS7m2Jqwyojp5vvZCHGl6ZwzbVwMsnaVZGac3I7Xa0YbRQ5heF02WwO3r3pP23VBRGuSYh*DSZPj7QIRRkHSpCNp1Le8PPFv9q61rxs+rxzSa8O2ot+EsjY75zPrlo6E6oG*CaYm+po64Wt95QL66XiMriJ+vrFj0347uFnD6Ufs4s83dVK1*7GBD9HwYdG*yXlO+*WcMKj+wvEx2z5l*4cemVdlX2c7h3rasbrTO3f2cSsNd1dmZM61P1cvgkqYzPXBY*HX11QpojHBc3a0Z8FCHQBLarWvrM8Ln4TyYCbmfGRdYoYhz9bwiMZZhxlJRiIqqJIWk9RtfdbK1qUU8SSdrzuzsqwtXcDy3LNEf9sMADbby5x8PgbUEsBAhQDFAAACAgAYJgPWymwsnhVBAAAfAcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAfQQAAAAA',
  
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
