module.exports = db => {
    return {
        create: (req, res) => {
            db.models.Car.create(req.body).then(() => {
                res.send({ success: true });
            }).catch(() => res.status(401));
        },

        update: (req, res) => {
            db.models.Car.update(req.body, { where: { id: req.params.id } }).then(() => {
                res.send({ success: true })
            }).catch(() => res.status(401));
        },

        findAll: (req, res) => {
            db.query(`SELECT id, brand_name, model_name, production_year, engine, tax, id_person
            FROM "Car"
            ORDER BY id`, { type: db.QueryTypes.SELECT }).then(resp => {
                res.send(resp);
            }).catch(() => res.status(401));
        },

        find: (req, res) => {
            db.query(`SELECT id, brand_name, model_name, production_year, engine, tax, id_person
            FROM "Car" WHERE id = ${req.params.id}`, { type: db.QueryTypes.SELECT }).then(resp => {
                res.send(resp[0]);
            }).catch(() => res.status(401));
        },

        destroy: (req, res) => {
            db.query(`DELETE FROM "Car" WHERE id = ${req.params.id}`, { type: db.QueryTypes.DELETE }).then(() => {
                res.send({ success: true });
            }).catch(() => res.status(401));
        }
    };
};
