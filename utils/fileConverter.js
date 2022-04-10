const csvToJson = require("convert-csv-to-json");

exports.convertDataFormat = function (fileName) {
  return csvToJson.getJsonFromCsv(fileName);
};
