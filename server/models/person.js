module.exports = (sequelize, DataType) => {
    let model = sequelize.define('Person', {
        first_name: {
            type: DataType.TEXT
        },
        last_name: {
            type: DataType.TEXT
        },
        cnp: {
            type: DataType.INTEGER,
            maxLength: 13
        },
        age: {
            type: DataType.INTEGER,
            maxLength: 3
        }
    }, {
        timestamps: true
    });

    return model;
};
