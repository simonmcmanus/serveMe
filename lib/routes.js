
/**
 * Module exports.
 */
module.exports = exports = Routes;

function Routes()
{
  Routes.hashIds = {};
}

Routes.hashIds = {};
Routes.instance = undefined;

Routes.add = function(url, callback)
{
  if(typeof url != "string")
  {
    console.log("Routes.add: Need a string in the parameter 'url'");
    return;
  }

  Routes.hashIds[url] = callback;
};

Routes.get = function(url)
{
  if(typeof url != "string")
  {
    console.log("Routes.get: Need a string in the parameter 'url'");
    return undefined;
  }
  return Routes.hashIds[url];
};

