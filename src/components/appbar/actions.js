import {ActionIconsDesktop, ActionIconsMobile, MyList} from "../../styles/appbar";
import {Divider, ListItemButton, ListItemIcon} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import {Colors} from "../../styles/theme";
export default function Actions({matches})
{
    const Component = matches
        ? ActionIconsMobile : ActionIconsDesktop
    return(
        <Component>
            <MyList type={'row'}>
            <ListItemButton
                sx={{
                    justifyContent : 'center'
                }}
            >
                <ListItemIcon
                sx={{
                    display : 'flex',
                    justifyContent : 'center',
                    color : matches && Colors.secondary
                }}
                >
                    <ShoppingCart/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation={'vertical'} flexItem/>
            <ListItemButton
                sx={{
                    justifyContent : 'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display : 'flex',
                        justifyContent : 'center',
                        color : matches && Colors.secondary
                    }}>
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation={'vertical'} flexItem/>
            <ListItemButton
                sx={{
                    justifyContent : 'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display : 'flex',
                        justifyContent : 'center',
                        color : matches && Colors.secondary
                    }}>
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation={'vertical'} flexItem/>
        </MyList>
        </Component>
    )
}