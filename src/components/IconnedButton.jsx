import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function IconnedButton() {
    // deleted packages
        // "@mantine/carousel": "^7.9.0",
    // "@mantine/charts": "^7.9.0",
    // "@mantine/core": "^7.9.0",
    // "@mantine/dates": "^7.9.0",
    // "@mantine/form": "^7.9.0",
    // "@mantine/hooks": "^7.9.0",
    // "@mantine/modals": "^7.9.0",
    // "@mantine/notifications": "^7.9.0",
    // "@mantine/nprogress": "^7.9.0",
    // "@mantine/spotlight": "^7.9.0",
    return (
        <div>
            <Box color={'white'} sx={{ display: 'flex', alignItems: 'flex-end'}}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="With sx" variant="standard" />
            </Box>
        </div>
    )
}
