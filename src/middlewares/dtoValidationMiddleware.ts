import { RequestHandler } from "express";
import { plainToClass, plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";

function dtoValidationMiddleware(type: any, skipMissingProperties = false): RequestHandler {

    return (req, res, next) => {
        const dtoObj = plainToClass(type, req.body);
        validate(dtoObj, { skipMissingProperties }).then(
            (errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const dtoErrors = errors.map((error: ValidationError) =>
                        (Object as any).values(error.constraints)).join(", ");
                    next(() => console.log(dtoErrors));
                } else {
                    //sanitize the object and call the next middleware
                    req.body = dtoObj;
                    next();
                }
            },
        );
    };
}

export default dtoValidationMiddleware;