import ExcelJS from 'exceljs';


export default function  generateExcel(response:Array<any>,headers:Array<any>){
    try {
        
        const workbook=new ExcelJS.Workbook();
        const worksheet=workbook.addWorksheet('Responses');
        worksheet.columns=headers?.map((header:any)=>{
            return {header:header?.title,key:header?.title,width:20};
        });
        response?.map((res:any)=>{
            worksheet.addRow(res);
        });


        return workbook.xlsx.writeBuffer()
    } catch (error) {
        console.log("Error generating excel---->",error);
        
    }
}