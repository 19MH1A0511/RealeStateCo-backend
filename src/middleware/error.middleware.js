// import { ApiError } from "../utils/apiError.js";
// import { ApiResponse } from "../utils/apiResponse.js";
// import { Prisma } from "@prisma/client";

// const handlePrismaError = (err) => {
//   switch (err.code) {
//     case "P2002":
//       return new ApiError(409, `Duplicate field value: ${err.meta.target.join(", ")}`);
//     case "P2025":
//       return new ApiError(404, "Record not found");
//     default:
//       return new ApiError(500, `Prisma error: ${err.message}`);
//   }
// };

// const errorMiddleware = (err, req, res, next) => {
//   try {
//     let error = err;

//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       error = handlePrismaError(error);
//     } else if (!(error instanceof ApiError)) {
//       const statusCode = error.statusCode || 500;
//       const message = error.message || "Something went wrong";
//       error = new ApiError(statusCode, message, error?.errors || [], err.stack);
//     }

//     const response = new ApiResponse(
//       error.statusCode,
//       error.data,
//       error.message,
//       error.errors,
//     );

//     if (process.env.NODE_ENV === "development") {
//       response.stack = error.stack;
//     }

//     return res.status(error.statusCode).json(response);
//   } catch (error) {
//     // Fallback for any errors that occur within the error middleware itself
//     console.error("Error in error middleware:", error);
//     return res.status(500).json({
//       success: false,
//       message: "An unexpected error occurred in the error handler.",
//     });
//   }
// };

// export { errorMiddleware };
