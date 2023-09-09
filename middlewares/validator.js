export default (schema) => [
    (req, res, next) => {
      const validation = schema.validate(req.body, { abortEarly: false });//tabortEarly ira todos los errores de uno
      if (validation.error) {
        return res.status(400).json({
          success: false,
          messages: validation.error.details.map((error) => error.message),
        });
      }
      return next();
    },
  ];