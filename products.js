const Product = require('./models/Product');
const connectToDatabase = require('./db');


module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
      Product.create(JSON.parse(event.body))
    )
    .then(product => callback(null, {
      statusCode: 200,
      body: JSON.stringify(product),
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true }
    })) 
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      body: 'Could not create the product.',
      headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true },
    }));
}

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
      Product.find({ id: event.pathParameters.id})
    )
    .then(product => callback(null, {
      statusCode: 200,
      body: JSON.stringify(product),
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true }
    }))
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      body: 'Could not fetch the product.',
      headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true },
    }));
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
      Product.find()
    )
    .then(products => callback(null, {
      statusCode: 200,
      body: JSON.stringify(products),
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true }
    }))
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      body: 'Could not fetch the products.',
      headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true },
    }))
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
      Product.findOneAndUpdate({ id: event.pathParameters.id}, JSON.parse(event.body), { new: true })
    )
    .then(product => callback(null, {
      statusCode: 200,
      body: JSON.stringify(product),
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true }
    }))
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      body: 'Could not fetch Products.',
      headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true },
    }));
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
Product.findOneAndRemove({ id: event.pathParameters.id})
    )
    .then(product => callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: 'RemoProduct with id: Product._Product' }),
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true }
    }))
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      body: 'Could not fetch Products.',
      headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true },
    }));
};

module.exports.getAllStudentsByCity = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
Product.find({ city: event.pathParameters.id })
    )
    .then(products => callback(null, {
      statusCode: 200,
      body: JSON.stringify(products),
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true }
    }))
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      body: 'Could not fetch Products.',
      headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true },
    }))
};

module.exports.getAllFacilitators = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
Product.find({ role: 'facilitator' })
    )
    .then(products => callback(null, {
      statusCode: 200,
      body: JSON.stringify(products),
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true }
    }))
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      body: 'Could not fetch Products.',
      headers: { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true },
    }))
};