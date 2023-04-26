# Radio de Rock

## Funcionalidades
* Tocar Música
* Avançar Música
* Reprodução Aleatória
* Voltar Música
* Pausar Música

Vai reproduzir as músicas de uma pasta local.

## Formatos
* mp3

## Modelo de Dados
### Entidade Música
* Nome do artista
* Título da música
* Imagem

```json
musica = {
    titulo: String,
    artista: String
} 
```

## Modos de Reprodução
### Normal
Pega a próxima música no disco.

### Aleatório
Define uma função que retorna um número aleatório entre 1 e x=length(arquivos de músicas na pasta)
