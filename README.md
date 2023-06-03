# PlayList Gamer
Site para ouvir musicas enquanto joga

## Funcionalidades
* Tocar Música
* Avançar Música
* Repetir Música
* Voltar Música
* Pausar Música

Vai reproduzir as músicas de uma pasta local.

## Formatos
* mp3

## Modelo de Dados
### Entidade Música
* Título da música
* Nome do artista

```json
musica = {
    id: String,
    titulo: String,
    artista: String
} 
```

## Modos de Reprodução
### Normal
Pega a próxima música no disco.

### Modo de Repetição
Fica reproduzindo a mesma musica infinitamente, ate o usuario voltar para o modo de reprodução normal

## Para Funcionar:
### npm start (na pasta Client)
### Servidor vai rodar em: http://localhost:3000
