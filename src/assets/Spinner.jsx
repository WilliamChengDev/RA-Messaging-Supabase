import React from "react";
import { WhisperSpinner } from "react-spinners-kit";

export default function Spinner({loading}){
        return(
                <div className="spinner-overlay" style={{width:'100vw', height:'100vh', position:'absolute', pointerEvents:'none', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'100'}}>
                                <WhisperSpinner size={50} frontColor="#F25757" backColor="#FFFFE4" loading={loading}/>
                </div>
        )
}