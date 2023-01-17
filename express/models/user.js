const { InvalidModelDataError } = require("../utils/errors");

module.exports = class User {
    constructor({
        name,
        email,
        dateOfBirth
    }) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        // Initializations
        this.#validateParameters();
    }

    #validateParameters() {
        if(!this.name || !this.email || !this.dateOfBirth)
            throw new InvalidModelDataError(
                ['name', 'email', 'dateOfBirth'],
                [this.name, this.email, this.dateOfBirth]
            );
    }

    async save(dbConnection) {
        return await dbConnection.execute(
            `INSERT INTO Users(name, email, dob) VALUES(?, ?, ?)`,
            [this.name, this.email, this.dateOfBirth]
        )[0];
    }
}