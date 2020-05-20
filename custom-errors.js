class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = this.constructor.name;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        this.property = property;
    }
}

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (e) {
        if (e instanceof SyntaxError) {
            throw new ReadError("JSON Syntax Error", e);
        } else {
            throw e;
        }
    }

    try {
        validateUser(user);
    } catch (e) {
        if (e instanceof ValidationError) {
            throw new ReadError("JSON Validation Error", e);
        } else {
            throw e;
        }
    }
}

try {
    // readUser('{"age": 25}');
    readUser('{bbb}');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e);
    } else {
        throw e;
    }
}