import { ApiModel } from "../../models/api";
class ApiServices {
  private apiInfo: ApiModel;
  private headers: object = {
    "Content-Type": "application/json",
  };
  public constructor(apiModel: ApiModel) {
    apiModel.headers = { ...this.headers };
    !apiModel.cache ? (apiModel.cache = "no-cache") : "";
    !apiModel.credentials ? (apiModel.credentials = "same-origin") : "";
    !apiModel.mode ? (apiModel.mode = "no-cors") : "";
    this.apiInfo = apiModel;
  }

  async postData() {
    // Default options are marked with *
    const response = await fetch(this.apiInfo.url, {
      method: this.apiInfo.method?.toString(),
      mode: this.apiInfo.mode, // no-cors, *cors, same-origin
      cache: this.apiInfo.cache, // *default, no-cache, reload, force-cache, only-if-cached
      credentials: this.apiInfo.credentials, // include, *same-origin, omit
      headers: this.apiInfo.headers,
      body: JSON.stringify(this.apiInfo.body), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async getData() {
    // Default options are marked with *
    const response = await fetch(this.apiInfo.url, {
      method: this.apiInfo.method?.toString(),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}

export { ApiServices };
