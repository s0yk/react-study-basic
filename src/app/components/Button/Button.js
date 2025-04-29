import Button from '@mui/material/Button';

export default function BasicButtons(
    {children}
) {
    return (
        <div>
            <Button variant="text">{children}</Button>
            {/* <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button> */}
        </div>
    );
}