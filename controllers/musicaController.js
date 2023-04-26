const Sequelize=require('sequelize');
const { sequelize } = require('../models');
const musicModel = require('../models/musica')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.adicionarMusica = async (req, res) => {
   console.log('POST');
    console.log(req.body);
    await musicModel.create({
        titulo: req.body.titulo,
        artista: req.body.artista,
    }).then((result) => {
        res.status(201).json({
            message: "Musica adicionada!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao adicionar musica",
            error: err
        });
    });
}

exports.verTodasMusicas = async (req, res) => {
    console.log('GET');
    await musicModel.findAll().then((result) => {
        res.status(200).json({
            message: "Musicas encontradas!",
            users: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar musicas",
            error: err
        });
    });
}

exports.verMusicaPorId = async (req, res) => {
    console.log('GET');
    await musicModel.findByPk(req.params.id).then((result) => {
        if(result == null){
            res.status(404).json({
                message: "Musica não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Musica encontrada!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar musica",
            error: err
        });
    });
}

exports.atualizarMusica = async (req, res) => {
    console.log('PATCH');
    await musicModel.update({
        titulo: req.body.titulo,
        artista: req.body.artista,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if(result == 0){
            res.status(404).json({
                message: "Musica não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Musica atualizado!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar musica",
            error: err
        });
    });
}

exports.deletarMusica = async (req, res) => {
    console.log('DELETE');
    await musicModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Musica deletada!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar musica",
            error: err
        });
    });
}
