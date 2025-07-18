require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAHUy8lork7VCVwQAAHsHAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nVmhYEEau6agEVUREQuxW39iFCxAgEOglfTvnft7C7Z+Zhd7aXp5CPe88959z7HZAcM7RCLZh8BwXFFeSoW*K2QGAC9PJ8RhT0QQQ5BBMQTL2jvx6F2nAgmQ3ZN5vUfnFQMD*NbpWn2E+qmdjoHM0E+xnc+6AoTykOfxOwNA6bXYB42uMS2ksn5SjcmKasIZl7RJGZo3CVkYwt8PgZ3LuIEFNM4llxQRmiMF2h1oWYfg2+Y2Y7qBhE01+uEB4HqDxuYOwqVpWoI**FaRuR4YwZ3pB9DX7bTNtqK4*rmXNBVqn6LlEvyqB1JRVuYtlxeDaQl9NdbLJ3+AzHBEVWhAjHvP0y76FBDqfVU6ujp9nNzHkhxoukhze3Kmg8WzpWcLrdmhtbM4OvAZ*l1frq9JbbYn7I2tol50WhomPdLI3aMjyilHauVySIh9KvwF366ZXk**Bez2ETvMFwL1Czql*L+TA3Z6+z5VsZ+c3cPRyT6trb7sN0MPsafHS6uUy6xgcqGCtlPGf5QbJscze1rKGw9m*FaMP8plY8P*4JH*KS*g6lG9t7nflOsFyvHISh3iOXFVYjr64KV2Pry5qvveBpOi4s5RbvzFFCFQerkUC8nnNK583T0znd5ZkabGJqx4KzKBxNe35UlKDWisBEuPcBRTFmnEKOc9LtqWofwKjyUUgRf7ALnFE4jFZT7Ou5u9UKf6rc3LlX7ZsejL00Ocj2adfOdXduzJ5BHxQ0DxFjKFpgxnPa2ogxGCMGJn*+1QcENfxdty7bUOiDM6aMv5CySHMYfYr6eQjDMC8J91sSGt0CUTAZ*NxGnGMSs47GkkAaXnCFjAvkDEzOMGXoR4GIoghMOC3Rj6Y18qjjfbY+BqIuKqAPsoceOAITICpjYSwORXGkTmTpD*at7qLCovhGEAd9QGD2EA2mKWSgD9LHK0GRZFUYqMJIkYfiuHvZHdx*AO7iR4hDnDIwAYZlDmsx8Hq2Quo6CHSsaStN60j8LPDTKO9K0NGejldTOkhKe1Fesw1TzUZOkjVbZPV0pmjJ1JAwZgch*qcgnfflxF55qGqybJwlm6Wy4nB3CxuhmRqDrR8OzqmdHIVdZvK8aY837Uk8cKc9bJeSddmaeLm+wLSNbmQ2P1XbHsXS21XznrtsEapwiH5NtpPdEvPEe71KlXoMbOlQWld*s9ncZqlCrhx7ogy3xcYMFbkcb5sY70YD8eaIi4t8JPv1y2p02ofVTbf52fAlFb9Onan3buFHC6Ufows*3NVJ1*2eMXpMgg+N*kvKd9yd4Qb3*i8hPkbLv7SnDnvp25MRj9Tl+qoruXw9uVuGjktD0WWmNU691OrSyulcDcD9*lcfFCnk55xmYAJYdoKgD2hedva1yDn*TSZDe7GMj8ZNIePaz5bY4QwxDrMCTARFFseCKo+F91suzYsFZJdukuwTWe*s3WpF4XPIPxsMaN03H1*B*W9QSwECFAMUAAAICAB1MvJaK5O1QlcEAAB7BwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB*BAAAAAA=lSfCHgMd2EI6bfLQKznBV2WbloMQ4okBoJ5p1Pah6kb0mvGlfmfQJ3PuIMMFJEevVGeUIw+wFdTZM8Nfgq*pxtWOF0cDb+Y6GK*9C1mXmN9tYnHqb1I*L6YgEStOwwtfgh56z3*AYxls13UJeeq5ZYbVyWypY8pXZ3rQISuE8ymG6e4NPkrhAoRGigia0+zLv+ktgRW0x2Vp2anrlJViteKVbm6dluYdCWdi3k6SlfrNkjK8BV8I8Ow50x3ydmoUIF4r8sueqQ5Tv6qOx5i78crc3TrU9bsXfgdv4wyvp*+HdUA*Pey68ndTDWuSWh5VmI3084dfytIhtVcDJXNmbDpvu2q*Bv3jT25nbrCp8dcPMFCHjbby959hKyW0nYojO61jKGTPm4l*wIa3xn1DSDdK7Ej6LDeMibHl2u5fFTF6TxmqpuagaluXZycKzHP80l6Qde2uXGb9chJfmSiaKKKiuNBjvSX60lutyWyfaRlPap0dFKeqMEMzY+xBgFCeEYkiTsuj3OEEaAhg2Lgowog96gd7h7WhPlBX2m0N0lFl3YfLRrRhx0nUruFRhB4YfurEi+U9gCCpcBogQFC4SQkvcWYgQGCMCZn9*H4ICvdI34fp0PDsEUYIJ3RV1lZUw*FD14xAGQVkX1O2KQO0XCIMZ82sbUZoUMel5rAuIg3PSIPUMKQGzCGYEfVaIMArBjOIafXatWoY98Y6gmbbpcGAI8ocgSQhmgJuKrMjxHDeRZhz3F*nW9lFhVX0rEAVDUMD8oRrMMkjAEGSPW+xUGEssI7GT6ZjnxP5mf3D*BNzHDxGFSUb6CWAPuJbzN1XYbNvW9+VOll9kuSfxo8APp7wpgSceFl80zKS1tagv+YpI89dxmppkkbeaPpVTTRWShBzY+J+CgBk4s8ENVxX0006uT5tn302NM7VHJDJ585QPGH0chE1w2TbXevucDlpNjKh+dVUfulZ9605nOJmiStRHllvl3n7seKIcP*XZQtQkAfo9mb0bLJutYhHpUhxG83VeWiN*bqwIJ4dhFJXL3YVySsQdjhODLrvDpdW6Paf6ih*aKS8NHP9gaAQKY6Qy*isSHN3i1HcPP3ooe59dycNdvXT9a5Sgxyh41+i*pHzD3RuOuQ9*C*E+W*5tZsFBdh2p8URamhdlWo4vJ9sh6LhUp8qYyK*rdim3tVHiZ8kH9*v3IagySKMS52AGSH6CYAhwWff2NYqo*NN*Qt4ZqvxWdQYJlX+1xDbJEaEwr8CMnY45QeIFkXn7ysZltYDk3MvgpWOlt3cnV5VLIf1oMCD3j7Y8gvtPUEsBAhQDFAAACAgAlV3uWoAvytVYBAAAfAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAgAQAAAAA',
  
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
