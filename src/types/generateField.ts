


export type iFormField = {
    type: string,
    title: string,
    required?: boolean,
    options?: string[],
    uniqueID: string
}[]

export type iQuizField = {
    title: string,
    options?: string[],
    required?: boolean,
    uniqueID: string,
    correctOption?: number
}[]