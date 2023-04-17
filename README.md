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
    artista: String,
    imagem: String, # 64 bits ou url da imagem
    endereco: String, # caminho da música no disco, nome do arquivo físico
} 
```

## Modos de Reprodução
### Normal
Pega a próxima música no disco.

### Aleatório
Define uma função que retorna um número aleatório entre 1 e x=length(arquivos de músicas na pasta)


## Passos
1. Clona o projeto na sua máquina
2. Adiciona as alterações
3. Dá um commit e pus
```bash
git add --all
git commit -m "Sua mensagem explicando as alterações"
git push
```
