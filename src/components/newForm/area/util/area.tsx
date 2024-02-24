import { memo } from "react"




function Area({ children }: { children: React.ReactNode }) {
  return <div className="border p-4 my-4 md:mx-4">{children}</div>
}


export default memo(Area);
