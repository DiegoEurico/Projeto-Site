import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Cabecalho from '../Cabecalho'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Tarefas');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Cabecalho />
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Tarefas" value="Tarefas"  to="/Tarefas" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favoritos" value="Favoritos" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Local" value="Local" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Documentos" value="Documentos" icon={<FolderIcon />} />
            </BottomNavigation>
        </>
    );
}
