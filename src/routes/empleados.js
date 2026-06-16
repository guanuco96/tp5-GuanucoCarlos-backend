const router = require("express").Router();
const controller = require("../controllers/EmpleadoController");

/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: Gestión de empleados
 */

/**
 * @swagger
 * /empleados:
 *   post:
 *     summary: Crear empleado
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Empleado creado
 */

router.post("/", controller.crear);

/**
 * @swagger
 * /empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 */

router.get("/", controller.obtenerTodos);

/**
 * @swagger
 * /empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 */

router.get("/:id", controller.obtenerUno);

module.exports = router;