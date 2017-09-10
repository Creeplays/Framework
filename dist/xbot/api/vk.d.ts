import { Api, Audio } from "../";
import XRest from "@meteor-it/xrest";
export default class VKApi extends Api {
    logged: boolean;
    tokens: any[];
    xrest: XRest;
    uploadToken: string;
    constructor();
    auth(tokens: any): Promise<void>;
    execute(method: any, params?: {}): Promise<any>;
    tokenId: number;
    executeMulti(tasks: any): Promise<any>;
    getUser(user: any, onlyCached?: boolean): Promise<any>;
    getUserFromApiData(data: any): any;
    cache: Map<any, any>;
    getUsers(users_orig: any): Promise<any[]>;
    getChat(chat: any): Promise<any>;
    uGetUser(uid: any): Promise<any>;
    uGetChat(cid: any): Promise<any>;
    startReceiver(): Promise<void>;
    parseAttachment(attachment: any): Promise<any>;
    receive(key: any, server: any, ts: any): Promise<void>;
    randomId(): number;
    static processText(text: any): any;
    sendLocation(targetId: any, answer: any, caption: any, location: any, options: any): Promise<void>;
    sendText(targetId: any, answer: any, text: any, options: any): Promise<void>;
    sendCommonAttachment(targetId: any, answer: any, caption: any, attachmentId: any, options: any): Promise<void>;
    sendImageStream(targetId: any, answer: any, caption: any, image: any, options: any): Promise<void>;
    sendFileStream(targetId: any, answer: any, caption: any, file: any, options: any): Promise<void>;
    sendVoiceStream(targetId: any, answer: any, caption: any, file: any, options: any): Promise<void>;
    sendAudioStream(targetId: any, answer: any, caption: string, audio: Audio, options: any): Promise<void>;
    sendCustom(targetId: any, answer: any, caption: any, options: any): Promise<void>;
}