import { useSelector } from "react-redux"



function colorSchema() {

    const  theme = useSelector((state) => state.theme.value)
    
    const colorpalette = {

        // light mode
        "light": {
            "brand": "rgb(9 40 106)",
            "btnbg":  "rgb(9 40 106)",
            "btnColor": "#ffffff",
            "bg": "#ffffff",
            "bgSecondery": "#F5F5F5",
            "hoverbg": "",
            "txt": "#2D3250",
            "textSecondery": "#BEBEBE",
            "borderColor": "#2E2E2E",
        } ,   
        
        
        // dark mode
        "dark": {
            "brand": "#0069D2",
            "btnbg" : "#0069D2",
            "btnColor": "#ffffff",
            "bg": "#101218",
            "bgSecondery": "#2E2E2E",
            "hoverbg": "hover:bg-[#54585D]",
            "txt": "#ffffff",
            "textSecondery": "#BEBEBE",
            "borderColor": "#2E2E2E",
        }

    }
    return theme ? colorpalette.dark : colorpalette.light
}

export default colorSchema
