import { id } from "date-fns/locale";
import database from "../../services/database.service";
import User from "./model";

class UserDAO {
   collectionName:string;
   constructor(collectionName:string){
      this.collectionName = collectionName;
   }

   async saveUser(user:User){
    const collection = await database.getCollection(this.collectionName)
    return collection.insertOne(user);
}

    async getUser(user: User) {
      console.log(user);
      const collection = await database.getCollection(this.collectionName)
      const result = await collection.findOne({email:user.email});
      return result;
    }

    // async getUserbyId(id: string) {
    //   console.log(id);
    //   const collection = await database.getCollection(this.collectionName)
    //   const result = await collection.findOne({_id: id});
    //   return result;
    // }

    async getUsers(){
      const collection = await database.getCollection(this.collectionName)
      const result = await collection.find({}).project({"_id":0,"email":1,"name":1}).toArray();
      return result;
    }
    async updateUserExp(idUser:string, idExperiencia:any){
      const collection = await database.getCollection(this.collectionName)
      const user = await collection.findOneAndUpdate({"_id":idUser} , {$set: {"experiences":[idExperiencia]}})
      //Mirar mongoshell que esta cerca la cosa
      return user;
    }

}

export default new UserDAO('users');