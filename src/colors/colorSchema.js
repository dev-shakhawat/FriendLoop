import { useSelector } from "react-redux"



function colorSchema() {

    const  theme = useSelector((state) => state.theme.value)
    
    const colorpalette = {

        // light mode
        "light": {
            "txtbrand": "text-[#2D3250]",
        } ,   
        
        
        // dark mode
        "dark": {
            "txtbrand": "text-[#e63f36]",
        }

    }
    return theme ? colorpalette.dark : colorpalette.light
}

export default colorSchema