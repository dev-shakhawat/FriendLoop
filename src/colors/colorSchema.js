import { useSelector } from "react-redux"



function colorSchema() {

    const  theme = useSelector((state) => state.theme.value)
    
    const colorpalette = {

        // light mode
        "light": {
            "brand": "text-[#2D3250]",
            "bg": "bg-[#ffffff]",
            "bgsecondery": "bg-[#F5F5F5]",
            "hoverbg": "",
            "txt": "text-[#2D3250]",
            "txtsecondery": "text-[#BEBEBE]",
            "border": "border border-[#2E2E2E]",

        } ,   
        
        
        // dark mode
        "dark": {
            "brand": "text-[#0069D2]",
            "bg": "bg-[#101218]",
            "bgsecondery": "bg-[#2E2E2E]",
            "hoverbg": "hover:bg-[#54585D]",
            "txt": "text-[#ffffff]",
            "txtsecondery": "text-[#BEBEBE]",
            "border": "border border-[#2E2E2E]",
        }

    }
    return theme ? colorpalette.dark : colorpalette.light
}

export default colorSchema