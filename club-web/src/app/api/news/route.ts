import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

export async function POST(request:Request){
    const supabase =await createClient();
    const body=await request.json();

    const {error}=await supabase
    .from("news")
    .insert([
        {
            title:body.title,
            content:body.content,
            date:new Date().toISOString().slice(0,10)
        }
    ]);

    if(error){

        return NextResponse.json(error,{
            status:500
        });

    }

    return NextResponse.json({
        success:true
    });

}