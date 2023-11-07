module.exports = (sequelize, DataType) => {
    let model = sequelize.define('Person', {
        first_name: {
            type: DataType.TEXT
        },
        last_name: {
            type: DataType.TEXT
        },
        CNP: {
            type: DataType.INTEGER,
            length: 13
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
