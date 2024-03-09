"use client"
export default function UserItem (){
    return ( <div className="flex items-center justify-center gap-2 border rounded-[8px] p-2" >
      <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center ">
        <p>ND</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Natnael Dejene</p>
        <p className="text-[12px] text-neutral-500">natnaeldejene@gmail.com</p>
      </div>
    </div>
    )
}