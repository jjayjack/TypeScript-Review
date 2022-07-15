//Returns Never!
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An Error occurred", 500);
