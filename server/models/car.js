module.exports = (sequelize, DataType) => {
    let model = sequelize.define('Car', {
        brand_name: {
            type: DataType.TEXT
        },
        model_name: {
            type: DataType.TEXT
        },
        production_year: {
            type: DataType.INTEGER,
            maxLength: 4
        },
        engine: {
            type: DataType.INTEGER,
            maxLength: 4
        },
        tax: {
            type: DataType.INTEGER,
            maxLength: 4
        }
    }, {
        timestamps: true
    });
    model.belongsTo(sequelize.models.Person, {foreignKey: 'id_person', onDelete: 'set null'});
    return model;
};
