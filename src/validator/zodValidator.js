import { StatusCodes } from "http-status-codes";


export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            console.log(req.body);
            schema.parse(req.body);
            next();
        }
        catch(error) {
            
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: error.errors,
                success: false,
                message: "Validation failed"
            })
        }
    }
}