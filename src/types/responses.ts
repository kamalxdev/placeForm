





export type iResponses = {
    [key: string]: {
        question: string;
        answer: string | number | boolean | { [key: string]: boolean};
        type?: string;
    };
}