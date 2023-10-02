const HTTPMethods = {
  'GET': 'GET',
  'POST': 'POST',
  'PUT': 'PUT',
  'DELETE': 'DELETE',
};

function fetchInstance(config) {
  const { baseUrl, headers } = config;

  async function get(url) {
    return await fetch(baseUrl + url, { method: HTTPMethods.GET, headers });
  }

  async function post(url, body) {
    return await fetch(baseUrl + url, { method: HTTPMethods.POST, headers, body });
  }

  async function put(url, body) {
    return await fetch(baseUrl + url, { method: HTTPMethods.PUT, headers, body });
  }

  async function deleteRequest(url, body) {
    return await fetch(baseUrl + url, { method: HTTPMethods.DELETE, headers, body });
  }

  return {
    get,
    post,
    put,
    delete: deleteRequest,
  };
}
