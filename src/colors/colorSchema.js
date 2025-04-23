import { useSelector } from "react-redux"



function colorSchema() {

    const  theme = useSelector((state) => state.theme.value)
    
    const colorpalette = {

        // light mode
        "light": {
            "logo": "text-[#2D3250]",
            "txtbrand": "text-[#2D3250]",
        } ,   
        
        
        // dark mode
        "dark": {
            "logo": "text-[#e63f36]",
            "txtbrand": "text-[#e63f36]",
        }

    }
    return theme ? colorpalette.dark : colorpalette.light
}

export default colorSchema