import { Router } from 'express';
import ProvinceService from './../services/provinciasService.js';

const router = Router();
const svc = new ProvinceService();

router.get('', async (req, res) => {
    let respuesta;

    const returnArray = await svc.getAllAsync();

    if (returnArray != null) {
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(500).send('Error interno.');
    }

    return respuesta;
});

router.get('/:id', async (req, res) => {
    let respuesta;

    const id = req.params.id;
    const returnEntity = await svc.getByIdAsync(id);

    if (returnEntity != null) {
        respuesta = res.status(200).json(returnEntity);
    } else {
        respuesta = res.status(404).send('Provincia no encontrada.');
    }

    return respuesta;
});

router.post('', async (req, res) => {

    const entity = req.body;

    if (!entity.name) {
        return res.status(400).send('El nombre es obligatorio.');
    }

    if (!entity.full_name) {
        return res.status(400).send('El nombre completo es obligatorio.');
    }

    const returnEntity = await svc.createAsync(entity);

    return res.status(201).json(returnEntity);
});

router.put('', async (req, res) => {
    let respuesta;

    const entity = req.body;
    const returnEntity = await svc.updateAsync(entity);

    if (returnEntity != null) {
        respuesta = res.status(200).json(returnEntity);
    } else {
        respuesta = res.status(404).send('Provincia no encontrada.');
    }

    return respuesta;
});

router.delete('/:id', async (req, res) => {
    let respuesta;

    const id = req.params.id;
    const rowsAffected = await svc.deleteByIdAsync(id);

    if (rowsAffected > 0) {
        respuesta = res.status(200).send('Provincia eliminada.');
    } else {
        respuesta = res.status(404).send('Provincia no encontrada.');
    }

    return respuesta;
});

export default router;