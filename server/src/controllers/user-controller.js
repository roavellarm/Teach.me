'use strict';

const repository = require('../repositories/user-repository.js');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Usuário atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            phone: req.body.phone,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            userType: req.body.userType,
            userTypeString: req.body.userTypeString,
            gender_id: req.body.gender_id,
            adress: req.body.adress
            // roles: ["user"]
        });

        // emailService.send(
        //     req.body.email,
        //     'Bem vindo ao Teach.me',
        //     global.EMAIL_TMPL.replace('{0}', req.body.firstName));

        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.authenticate = async(req, res, next) => {
    try {
        const user = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            // roles: user.roles
            userType: user.userType
        });

        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                firstName: user.firstName
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.refreshToken = async(req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const user = await repository.getById(data.id);

        if (!user) {
            res.status(404).send({
                message: 'Usuário não encontrado'
            });
            return;
        }

        const tokenData = await authService.generateToken({
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            // roles: user.roles
            userType: user.userType
        });

        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                firstName: user.firstName
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

console.log('Controller do usuário exportado com sucesso!')