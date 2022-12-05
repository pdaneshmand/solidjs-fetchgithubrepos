import { Repo } from "../../components/repoCard";
import { ApiModel, ApiMethodType } from "../../models/api";
import { ApiServices } from "./apiservice";

export default class ModuleServices<T> {
  private apiMethodType: ApiMethodType | undefined;
  private apiModel: ApiModel = {
    url: "",
  };
  async getAll(params: string): Promise<T[]> {
    this.apiModel.method = ApiMethodType.GET;
    this.apiModel.url = `https://api.github.com/users/${params}/repos?sort=created`;
    const res = await new ApiServices(this.apiModel).getData();
    return res;
  }
}
