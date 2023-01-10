import { useSelector } from 'react-redux'
const commonColor = {
    white: '#fff',
    black:'#000',
    grey:'#808080',
    lightBlue: '#07E1FF',
    lightGray: '#8A8A8A',
    pink: '#FF01EC'
}
const dark = {
    grey: commonColor.grey,
    lightBlue: commonColor.lightBlue,
    black: "#FFFFFF",
    white: "#000000",
    DarkGray: "#707070",
    pink: commonColor.pink,
    lightGray: commonColor.lightGray
}
const light = {
    grey: commonColor.grey,
    lightBlue: commonColor.lightBlue,
    black: "#000000",
    white: "#FFFFFF",
    DarkGray: "#707070",
    pink: commonColor.pink,
    lightGray: commonColor.lightGray
}

const Color = () => {
    const theme = useSelector((state) =>  state?.themeReducer?.theme)
    console.log("🚀 ~ file: color.js ~ line 31 ~ Color ~ theme", theme)
    return theme !== "light" ? light : dark
};

export default Color;