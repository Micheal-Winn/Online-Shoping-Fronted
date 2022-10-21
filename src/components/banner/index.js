import {useTheme} from "@mui/material/styles";
import {Typography, useMediaQuery} from "@mui/material";
import {BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle} from "../../styles/banner";


export default function Banner()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return(
        <BannerContainer theme={theme}  >
            <BannerImage src={'https://w7.pngwing.com/pngs/522/727/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-thumbnail.png'} />
           <BannerContent>
               <Typography variant={'h6'}>Huge Collection</Typography>
               <BannerTitle variant={'h2'}>
                   New Bags
               </BannerTitle>
               <BannerDescription variant={'subtitle'}>
                   loream ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna
               </BannerDescription>
           </BannerContent>
        </BannerContainer>
    )
}