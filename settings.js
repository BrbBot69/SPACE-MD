require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJVd7lqAL8rVWAQAAHwHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGLmpYERHLLdWbFAEFXFjHkooELlaVUDjhP8+gX2Zedid7eWpqKIyT55zMvkBijIh6AV1YPYDVDhpIEX9knYVAjOg1FGEMBiCEFIIZsAyXHTYqClSTnPKcII3cgeqf7o6guoaR2sudW2+SRcRSfUncB+Cqj5lSfCHgMd2EI6bfLQKznBV2WbloMQ4okBoJ5p1Pah6kb0mvGlfmfQJ3PuIMMFJEevVGeUIw+wFdTZM8Nfgq*pxtWOF0cDb+Y6GK*9C1mXmN9tYnHqb1I*L6YgEStOwwtfgh56z3*AYxls13UJeeq5ZYbVyWypY8pXZ3rQISuE8ymG6e4NPkrhAoRGigia0+zLv+ktgRW0x2Vp2anrlJViteKVbm6dluYdCWdi3k6SlfrNkjK8BV8I8Ow50x3ydmoUIF4r8sueqQ5Tv6qOx5i78crc3TrU9bsXfgdv4wyvp*+HdUA*Pey68ndTDWuSWh5VmI3084dfytIhtVcDJXNmbDpvu2q*Bv3jT25nbrCp8dcPMFCHjbby959hKyW0nYojO61jKGTPm4l*wIa3xn1DSDdK7Ej6LDeMibHl2u5fFTF6TxmqpuagaluXZycKzHP80l6Qde2uXGb9chJfmSiaKKKiuNBjvSX60lutyWyfaRlPap0dFKeqMEMzY+xBgFCeEYkiTsuj3OEEaAhg2Lgowog96gd7h7WhPlBX2m0N0lFl3YfLRrRhx0nUruFRhB4YfurEi+U9gCCpcBogQFC4SQkvcWYgQGCMCZn9*H4ICvdI34fp0PDsEUYIJ3RV1lZUw*FD14xAGQVkX1O2KQO0XCIMZ82sbUZoUMel5rAuIg3PSIPUMKQGzCGYEfVaIMArBjOIafXatWoY98Y6gmbbpcGAI8ocgSQhmgJuKrMjxHDeRZhz3F*nW9lFhVX0rEAVDUMD8oRrMMkjAEGSPW+xUGEssI7GT6ZjnxP5mf3D*BNzHDxGFSUb6CWAPuJbzN1XYbNvW9+VOll9kuSfxo8APp7wpgSceFl80zKS1tagv+YpI89dxmppkkbeaPpVTTRWShBzY+J+CgBk4s8ENVxX0006uT5tn302NM7VHJDJ585QPGH0chE1w2TbXevucDlpNjKh+dVUfulZ9605nOJmiStRHllvl3n7seKIcP*XZQtQkAfo9mb0bLJutYhHpUhxG83VeWiN*bqwIJ4dhFJXL3YVySsQdjhODLrvDpdW6Paf6ih*aKS8NHP9gaAQKY6Qy*isSHN3i1HcPP3ooe59dycNdvXT9a5Sgxyh41+i*pHzD3RuOuQ9*C*E+W*5tZsFBdh2p8URamhdlWo4vJ9sh6LhUp8qYyK*rdim3tVHiZ8kH9*v3IagySKMS52AGSH6CYAhwWff2NYqo*NN*Qt4ZqvxWdQYJlX+1xDbJEaEwr8CMnY45QeIFkXn7ysZltYDk3MvgpWOlt3cnV5VLIf1oMCD3j7Y8gvtPUEsBAhQDFAAACAgAlV3uWoAvytVYBAAAfAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAgAQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '27767494368',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'BrbBot69',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 20072705,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 20072705,
  
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
