

export type iFormData = {
    _id: string;
    title?: string;
    created_at: Date;
    updated_at: Date;
    state: string;
    created_by: string;
    Attempts: number;
    responses:any[]
    expiry_date?: Date;
    fields?: any[];
    __v?: number;
    start_date: Date;
}