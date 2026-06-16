const router = require("express").Router();
const controller = require("../controllers/SocioController");

/**
 * @swagger
 * /socios:
 *   post:
 *     summary: Crear un socio
 *     tags: [Socios]
 *     responses:
 *       200:
 *         description: Socio creado correctamente
 */

router.post("/", controller.crearSocio);

/**
 * @swagger
 * /socios:
 *   get:
 *     summary: Obtener todos los socios
 *     tags: [Socios]
 *     responses:
 *       200:
 *         description: Lista de socios
 */
router.get("/", controller.obtenerSocios);

/**
 * @swagger
 * /socios/activos:
 *   get:
 *     summary: Obtener socios activos
 *     tags: [Socios]
 *     responses:
 *       200:
 *         description: Lista de socios activos
 */

router.get("/activos", controller.obtenerActivos);

/**
 * @swagger
 * /socios/{id}:
 *   put:
 *     summary: Modificar un socio
 *     tags: [Socios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Socio modificado
 */

router.put("/:id", controller.modificarSocio);

/**
 * @swagger
 * /socios/{id}:
 *   delete:
 *     summary: Eliminar un socio
 *     tags: [Socios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Socio eliminado
 */

router.delete("/:id", controller.eliminarSocio);

module.exports = router;