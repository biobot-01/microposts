/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Kevin Michael
 * @license MIT
 * 
 **/

class EasyHTTP {
  // Make a HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  // Make a HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

  // Make a HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

  // Make a HTTP DELETE Request
  async delete(url) {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = 'Resource Deleted!';
    return data;
  }
}

export const http = new EasyHTTP();