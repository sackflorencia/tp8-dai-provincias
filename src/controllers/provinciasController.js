import { Router } from 'express';
import ProvinceService from './../services/provinciasService.js';

const router = Router();
const svc = new ProvinceService();

router.get('/', async (req, res) => {
    /*
#swagger.tags = ['Provincias']
#swagger.description = 'Obtiene todas las provincias.'
#swagger.responses[200] = {
    description: 'Lista de provincias obtenida correctamente.'
}
#swagger.responses[500] = {
    description: 'Error interno del servidor.'
}
*/
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
    /*
#swagger.tags = ['Provincias']
#swagger.description = 'Obtiene una provincia a partir de su ID.'
#swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'string',
    description: 'ID de la provincia.'
}
#swagger.responses[200] = {
    description: 'Provincia encontrada correctamente.'
}
#swagger.responses[404] = {
    description: 'Provincia no encontrada.'
}
*/
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


router.post('/', async (req, res) => {
    /*
#swagger.tags = ['Provincias']
#swagger.description = 'Crea una nueva provincia.'
#swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires'
    }
}
#swagger.responses[201] = {
    description: 'Provincia creada correctamente.'
}
#swagger.responses[400] = {
    description: 'El nombre o el nombre completo son obligatorios.'
}
*/

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


router.put('/', async (req, res) => {
    /*
#swagger.tags = ['Provincias']
#swagger.description = 'Actualiza una provincia existente.'
#swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
        id: '1',
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires'
    }
}
#swagger.responses[200] = {
    description: 'Provincia actualizada correctamente.'
}
#swagger.responses[404] = {
    description: 'Provincia no encontrada.'
}
*/
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
    /*
#swagger.tags = ['Provincias']
#swagger.description = 'Elimina una provincia a partir de su ID.'
#swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'string',
    description: 'ID de la provincia que se desea eliminar.'
}
#swagger.responses[200] = {
    description: 'Provincia eliminada correctamente.'
}
#swagger.responses[404] = {
    description: 'Provincia no encontrada.'
}
*/
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