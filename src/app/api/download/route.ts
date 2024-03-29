import generateExcel from "@/controllers/generateExcel"



export async function POST(request: Request) {
    try {
      const data = await request.json();
      const xlsBuffer= await generateExcel(data.response,data.headers);
        return new Response(xlsBuffer, {
            headers: {
            "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Content-Disposition": "attachment; filename=Tasks.xls",

            },
        });
    } catch (error) {
        console.log("Error Getting excel---->",error);
        
    }
}