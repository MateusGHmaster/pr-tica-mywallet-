const serviceErrorToStatusCode = {
    
    unauthorized: 401,
    conflict: 409

};

export function unauthorizedError() {
  throw { type: "unauthorized" };
}

export function conflictError() {
  throw { type: "conflict" };
}

export default function handleErrorsMiddleware(e, req, res, next) {

  if (e.type) {
    res.sendStatus(serviceErrorToStatusCode[e.type]);
  }

  res.sendStatus(500);

}