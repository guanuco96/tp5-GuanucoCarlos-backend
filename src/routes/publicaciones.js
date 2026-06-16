const router = require("express").Router();
const controller = require("../controllers/PublicacionController");

/**
 * @swagger
 * tags:
 *   name: Publicaciones
 *   description: Gestión de publicaciones
 */

/**
 * @swagger
 * /publicaciones:
 *   post:
 *     summary: Crear publicación
 *     tags: [Publicaciones]
 *     responses:
 *       200:
 *         description: Publicación creada
 */
router.post("/", controller.crear);

/**
 * @swagger
 * /publicaciones:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags: [Publicaciones]
 *     responses:
 *       200:
 *         description: Lista de publicaciones con empleados
 */
router.get("/", controller.obtenerTodas);


/**
 * @swagger
 * /publicaciones:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags: [Publicaciones]
 *     responses:
 *       200:
 *         description: Lista de publicaciones con empleados
 */
router.get("/buscar", controller.buscar);

/**
 * @swagger
 * /publicaciones/{id}:
 *   put:
 *     summary: Modificar publicación
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Publicación modificada
 */

router.put("/:id", controller.modificar);

/**
 * @swagger
 * /publicaciones/{id}:
 *   delete:
 *     summary: Eliminar publicación
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Publicación eliminada
 */
router.delete("/:id", controller.eliminar);

module.exports = router;