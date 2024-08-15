import MiniBot from "../../models/MiniBot";

export interface IMiniBotService {
    URLController: String,
    GetResponce(question:string):Promise<MiniBot>,
}