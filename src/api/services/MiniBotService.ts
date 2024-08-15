import { IMiniBotService } from "./IMiniBotService";
import MiniBot from "../../models/MiniBot";
import apiClient from "../apiClient";

class MiniBotService implements IMiniBotService{
    URLController = '/responce';

    async GetResponce(question: string): Promise<MiniBot> {
        const httpResponce = await apiClient.get(`${this.URLController}/${question}`);

        const result = httpResponce.data as MiniBot;
        
        return result;
    }
}

export default MiniBotService;