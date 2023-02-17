import { extendTheme } from '@chakra-ui/react'

const AllFonts = {
    primary: `'Lexend', sans-serif`,
    secondary: `'Inter', sans-serif`
}

const fontFormer = (fontSize: number, fontWeight: Number, fontFamily?: string) => {
    return {fontSize: `${fontSize}px`, fontFamily: fontFamily ? fontFamily : AllFonts.primary, fontWeight: String(fontWeight)}
}

export const styleGuide = extendTheme({
    colors: {
        brand: {
            1: "#4529E6",
            2: "#5126EA",
            3: "#B0A6F0",
            4: "#EDEAFD"
        },
        grey: {
            0: "#0B0D0D",
            1: "#212529",
            2: "#495057",
            3: "#868E96",
            4: "#ADB5BD",
            5: "#CED4DA",
            6: "#DEE2E6",
            7: "#E9ECEF",
            8: "#F1F3F5",
            9: "#F8F9FA",
            10: "#FDFDFD"
        },
        feedback: {
            alert: {
                1: "#CD2B31",
                2: "#FDD8D8",
                3: "#FFE5E5"
            },
            sucess: {
                1: "#FFE5E5",
                2: "#CCEBD7",
                3: "#DDF3E4"
            }
        },
        random: {
            1: "#E34D8C",
            2: "#C04277",
            3: "#7D2A4D",
            4: "#7000FF",
            5: "#6200E3",
            6: "#36007D",
            7: "#349974",
            8: "#2A7D5F",
            9: "#153D2E",
            10: "#153D2E",
            11: "#5700E3",
            12: "#30007D"
        }
    },
    textStyles: {
        "heading-1-700": fontFormer(42, 700),
        "heading-2-600": fontFormer(36, 600),
        "heading-3-600": fontFormer(32, 600),
        "heading-3-500": fontFormer(32, 500),
        "heading-4-600": fontFormer(28, 600),
        "heading-4-500": fontFormer(28, 500),
        "heading-5-600": fontFormer(24, 600),
        "heading-5-500": fontFormer(24, 500),
        "heading-6-600": fontFormer(20, 600),
        "heading-6-500": fontFormer(20, 500),
        "heading-7-600": fontFormer(16, 600),
        "heading-7-500": fontFormer(16, 500),
        "body-1-400": fontFormer(16, 400, AllFonts.secondary),
        "body-1-600": fontFormer(16, 600, AllFonts.secondary),
        "body-2-400": fontFormer(14, 400, AllFonts.secondary),
        "body-2-500": fontFormer(14, 500, AllFonts.secondary),
        "button-big-text": fontFormer(16, 600, AllFonts.secondary),
        "button-medium-text": fontFormer(14, 600, AllFonts.secondary),
        "input-placeholder": fontFormer(16, 400, AllFonts.secondary),
        "input-label": fontFormer(16, 400, AllFonts.secondary)
    }
})

