const router = require("express").Router();
const controller = require("../controllers/TransaccionController");

/**
 * @swagger
 * tags:
 *   name: Transacciones
 *   description: Registro de transacciones
 */

/**
 * @swagger
 * /transacciones:
 *   post:
 *     summary: Registrar una transacción
 *     tags: [Transacciones]
 *     responses:
 *       200:
 *         description: Transacción registrada
 */

router.post("/", controller.crear);

/**
 * @swagger
 * /transacciones:
 *   get:
 *     summary: Obtener todas las transacciones
 *     tags: [Transacciones]
 *     responses:
 *       200:
 *         description: Lista de transacciones
 */

router.get("/", controller.obtenerTodas);

/**
 * @swagger
 * /transacciones/cliente/{email}:
 *   get:
 *     summary: Obtener transacciones por email
 *     tags: [Transacciones]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *     responses:
 *       200:
 *         description: Histórico del cliente
 */

router.get("/cliente/:email",controller.obtenerPorEmail);

/**
 * @swagger
 * /transacciones/{origen}/{destino}:
 *   get:
 *     summary: Obtener transacciones por idiomas
 *     tags: [Transacciones]
 *     parameters:
 *       - in: path
 *         name: origen
 *         required: true
 *       - in: path
 *         name: destino
 *         required: true
 *     responses:
 *       200:
 *         description: Transacciones filtradas
 */

router.get("/:origen/:destino",controller.obtenerPorIdiomas);

module.exports = router;