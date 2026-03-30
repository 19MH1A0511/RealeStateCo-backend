// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";

export default class commons {
  bigintToString = (data) =>
    JSON.parse(
      JSON.stringify(data, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

//   bigintToString = (data) => {
//   console.log("Input data:", data);

//   const json = JSON.stringify(
//     data,
//     (_, value) => {
//       if (typeof value === "bigint") {
//         console.log("Converting BigInt:", value, "to string:", value.toString());
//         return value.toString();
//       }
//       return value;
//     }
//   );

//   console.log("After JSON.stringify:", json);

//   const parsed = JSON.parse(json);
//   console.log("After JSON.parse:", parsed);

//   return parsed;
// }


  getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
  };

  generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });
  };

  decodedJWT = (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.log("JWT Decode Error:", error.message);
      throw error; // 👈 RE-THROW so upper layer can handle it
    }
  };

}