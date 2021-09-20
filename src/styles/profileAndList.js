import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
            padding: theme.spacing(2)
        },
    }),
);