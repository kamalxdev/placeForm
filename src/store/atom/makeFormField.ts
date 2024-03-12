import { iFormField, iQuizField } from "@/types/generateField";
import { atom } from "recoil";




export const FormField=atom({
    key:'FormField',
    default:[] as iFormField | iQuizField
})