export const getLibrary = async (context) => {
  //console.log("context in getlibrary: ", context);
  const library = await context.library;

  //console.log("[2] library in web3gettesr: ", library);

  return library;
};
