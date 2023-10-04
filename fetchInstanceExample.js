const HTTPMethods = {
  'GET': 'GET',
  'POST': 'POST',
  'PUT': 'PUT',
  'DELETE': 'DELETE',
};

function errorHandler(response) {
  if (!response.ok) {
    throw new Error(response.text());
  }

  if (response.status === 204) {
    throw new Error('Empty response');
  }
}

function fetchInstance(config) {
  const { baseUrl, headers: baseHeaders } = config;

  async function get(url, userHeaders) {
    const requestUrl = baseUrl + url;
    const requestOptions = {
      method: HTTPMethods.GET,
      headers: {
        ...baseHeaders,
        ...userHeaders,
      },
    };

    try {
      const response = await fetch(requestUrl, requestOptions);

      errorHandler(response);

      return await response.json();
    } catch (error) {
      console.log(error)
    }
  }

  async function post(url, body, userHeaders) {
    const requestUrl = baseUrl + url;
    const requestOptions = {
      method: HTTPMethods.POST,
      body: JSON.stringify(body),
      headers: {
        ...baseHeaders,
        ...userHeaders,
      },
    };

    try {
      const response = await fetch(requestUrl, requestOptions);

      errorHandler(response);

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async function put(url, body, userHeaders) {
    const requestUrl = baseUrl + url;
    const requestOptions = {
      method: HTTPMethods.PUT,
      body: JSON.stringify(body),
      headers: {
        ...baseHeaders,
        ...userHeaders,
      },
    };

    try {
      const response = await fetch(requestUrl, requestOptions);

      errorHandler(response);

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteRequest(url, body, userHeaders) {
    const requestUrl = baseUrl + url;
    const requestOptions = {
      method: HTTPMethods.DELETE,
      body: JSON.stringify(body),
      headers: {
        ...baseHeaders,
        ...userHeaders,
      },
    };

    try {
      const response = await fetch(requestUrl, requestOptions);

      errorHandler(response);

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  return {
    get,
    post,
    put,
    delete: deleteRequest,
  };
}
