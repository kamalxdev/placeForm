import { iResponses } from "@/types/responses";
import { atom } from "recoil";




export const UserResponses=atom({
    key:'UserResponses',
    default:{} as iResponses
})