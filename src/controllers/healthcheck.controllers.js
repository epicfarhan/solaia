import { ApiResponse } from "../utlis/api-response.js";
import {asyncHandler} from "../utlis/async-handlers.js"


const healthCheck = asyncHandler(async(req, res) => {
    res.status(200).json(new ApiResponse(200, {
        message: "server is running"
    }))
})

export {healthCheck};