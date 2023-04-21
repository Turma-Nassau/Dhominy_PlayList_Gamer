const Sequelize = require('sequelize')
// conexao com banco de dados mysql
const sequelize = new Sequelize('radiorock', 'root', 'dhominy',{
    host: "localhost",
    dialect: 'mysql'
  })

const Music = sequelize.define('musics', {
    titulo: {
        type: Sequelize.STRING
    },
    artista:{
        type: Sequelize.STRING
    }
})

Music.create({
    titulo: "Numb",
    artista: "Linkin Park"
})

Music.create({
    titulo: "Here Without You",
    artista: "3 Doors Down"
})

Music.create({
    titulo: "Bring Me To Life",
    artista: "Evanescence"
})

Music.create({
    titulo: "Sweet Child O Mine",
    artista: "Guns N Roses"
})

Music.create({
    titulo: "Complicated",
    artista: "Avril Lavigne"
})

Music.create({
    titulo: "Dont Tell Me",
    artista: "Avril Lavigne"
})

Music.create({
    titulo: "Im With You",
    artista: "Avril Lavigne"
})

Music.create({
    titulo: "Nobodys Home",
    artista: "Avril Lavigne"
})

Music.create({
    titulo: "Sk8er Boi",
    artista: "Avril Lavigne"
})

Music.create({
    titulo: "I Hate Everything About",
    artista: "Three Days Grace"
})

Music.create({
    titulo: "The Reason",
    artista: "Hoobastank"
})

Music.create({
    titulo: "In The End",
    artista: "Linkin Park"
})

Music.create({
    titulo: "Papercut",
    artista: "Linkin Park"
})

Music.create({
    titulo: "Crawling",
    artista: "Linkin Park"
})

Music.create({
    titulo: "Faint",
    artista: "Linkin Park"
})

Music.create({
    titulo: "From The Inside",
    artista: "Linkin Park"
})

Music.create({
    titulo: "With Arms Wide Open",
    artista: "Creed"
})

Music.create({
    titulo: "My Sacrifice",
    artista: "Creed"
})

Music.create({
    titulo: "Dont Stop Dancing",
    artista: "Creed"
})

Music.create({
    titulo: "One Last Breath",
    artista: "Creed"
})

Music.create({
    titulo: "Call Me When You re Sober",
    artista: "Evanescence"
})

Music.create({
    titulo: "Everybodys Fool",
    artista: "Evanescence"
})

Music.create({
    titulo: "Going Under",
    artista: "Evanescence"
})

Music.create({
    titulo: "Photograph",
    artista: "Nickelback"
})

Music.create({
    titulo: "Someday",
    artista: "Nickelback"
})

Music.create({
    titulo: "Savin Me",
    artista: "Nickelback"
})

Music.create({
    titulo: "Far Away",
    artista: "Nickelback"
})

Music.create({
    titulo: "How You Remind Me",
    artista: "Nickelback"
})

Music.create({
    titulo: "Dani California",
    artista: "Red Hot Chili Peppers"
})

Music.create({
    titulo: "Otherside",
    artista: "Red Hot Chili Peppers"
})

Music.create({
    titulo: "By The Way",
    artista: "Red Hot Chili Peppers"
})

Music.create({
    titulo: "Welcome To My Life",
    artista: "Simple Plan"
})

Music.create({
    titulo: "Crazy",
    artista: "Simple Plan"
})

Music.create({
    titulo: "Broken",
    artista: "Seether ft. Amy Lee"
})

Music.create({
    titulo: "Boulevard Of Broken Dreams",
    artista: "Green Day"
})


  sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
  }).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
  })