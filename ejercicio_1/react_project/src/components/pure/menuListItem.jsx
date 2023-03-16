import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { HomeIcon, Settings } from '@mui/icons-material';

const getIcon = () => {
	switch (icon) {
		case 'HOME':
			return (<Home />)
	    case 'TASKS':
			return (<Home />)
		case 'SETTINGS':
			return (<Settings />)
		default:
			return (<Home />)
	}
}

const menuListItems = ({list}) => {
	const history = useNavigate();

	const navigate = (path) => {
		history(path);
	}

	return (
		<List>
		    {list.map(({text, path, icon}, index) => {
		    	<ListItem key={index} button onClick={() => navigate(path)}>
		    	    <ListItemIcon>
		    	       {getIcon(icon)}
		    	    </ListItemIcon>
		    	    <ListItemText primary={text} />
		    	</ListItem>
		    })}
		</List>
	)
}

export default menuListItems;