// istanbul ignore file

// User
const userJSON = require('./usuarios');
const userRestrictionsJSON = require('./usuarios/restricciones');
const userPurchasesJSON = require('./usuarios/compras');

// Level
const levelJSON = require('./nivel');

// Payments
const paymentsJSON = require('./transacciones');

// Shipments
const shipmentsJSON = require('./envios');

class MockUtils {
  constructor() {
    this.basePath = './mocks';
  }

  _readJSON(jsonFile, parameter = null, timeout = 1000, notFoundErrorMessage = '') {
    return new Promise((resolve, reject) => {
      try {
        if (!jsonFile || (parameter && !jsonFile[parameter])) {
          const error = new Error(notFoundErrorMessage);
          error.status = 404;
          throw error;
        }
        setTimeout(() => {
          resolve(parameter ? jsonFile[parameter] : jsonFile);
        }, timeout);
      } catch (error) {
        reject(error);
      }
    });
  }

  getUser() {
    return this._readJSON(userJSON);
  }

  getUserRestrictions(userId) {
    return this._readJSON(userRestrictionsJSON, userId, 3000, `Could not find restrictions for user of id ${userId}`);
  }

  getUserPurchases(userId) {
    return this._readJSON(userPurchasesJSON, userId, 1500, `Could not find purchases for user of id ${userId}`);
  }

  getLevel(levelId) {
    return this._readJSON(levelJSON, levelId, 500, `Could not find level of id "${levelId}"`);
  }

  getShipment(shipmentId) {
    return this._readJSON(shipmentsJSON, shipmentId, 1200, `Could not find shipment of id ${shipmentId}`);
  }

  getPayment(paymentId) {
    return this._readJSON(paymentsJSON, paymentId, 2200, `Could not find payment of id ${paymentId}`);
  }
}

module.exports = MockUtils;
