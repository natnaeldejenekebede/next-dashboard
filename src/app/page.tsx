


    // import General from "@/components/Cards/General"
    import General from "../components/Cards/General"
    import { Card } from "../components/ui/card"
    import Lines from "../components/Cards/Lines"

    export default function Home() {
      return (
        <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General/>
        <div  className="grid  gap-[32px]">
          <Card/>
          <Card/>
        </div>
    </div>
     <div>
        <div className="grid grid-cols-3 gap-4 ">
      <div className="col-span-1">
      <Lines/>
      </div>
      <div className="col-span-1">
      <Card className="h-[300px]">Hello Natnael </Card> 
      </div>
      <div className="col-span-1 h-[300px]">
      <Card className="h-[300px]" >Hello Natnael </Card> 
      </div>
    </div>

     </div>
    </div>
        
      );
    }
