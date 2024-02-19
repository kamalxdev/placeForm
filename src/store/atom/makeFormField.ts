import { iFormField } from "@/types/makeFormField";
import { atom } from "recoil";




export const FormField=atom({
    key:'FormField',
    default:[] as iFormField
})