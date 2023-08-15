import Tweet from "../models/tweet.js";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log(error);
      console.log("SOmething went wrong while creating the crud");
      throw error;
    }
  }

  async destroy(id){
    try {
        const result = await this.model.findByIdAndRemove(id);
        return result;
    } catch (error) {
        console.log("SOmething went wrong while creating the crud");
      throw error;
    }
  }

  async get(id) {
    try {
        const result = await this.model.findById(id);
        return result;
    } catch (error) {
        console.log("SOmething went wrong while creating the crud");
      throw error;
    }

   
  }
  async getAll() {
    try {
        const result = await this.model.find({});
        return result;
    } catch (error) {
        console.log("SOmething went wrong while creating the crud");
      throw error;
    }
  }
  async update(id,data){
    try {
        const result = await this.model.findByIdAndUpdate(id,data,{new:true});
        return result;
    } catch (error) {
        console.log("SOmething went wrong while creating the crud");
      throw error;
    }
  }
}

export default CrudRepository;