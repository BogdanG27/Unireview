import React, { useEffect, useState } from 'react';
import { Button, Box, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, ListItemButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './MenuBar.css'
import { Link } from 'react-router-dom';
import { primaryColor } from '../../utils/constants';


function buildMenuItem(props: { name: string, key: string, to: string, style: React.CSSProperties }) {
	return (
		<Link to={props.to} style={{ textDecoration: 'none', color: 'white' }}> {props.name}</ Link>
	);
}


const items = [
	buildMenuItem({ name: 'Home', key: '1', to: '/', style: {} }),
	buildMenuItem({ name: 'Explore', key: '2', to: '/explore', style: {} }),
	buildMenuItem({ name: 'About', key: '3', to: '/about', style: { marginLeft: 'auto' } }),
]

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function MenuBar(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};


	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ backgroundColor: `${primaryColor}`, padding: '0' }}>
			<List>
				{items.map((item) => (
					<ListItem key={item.key} disablePadding>
						<ListItemButton sx={{ textAlign: 'start' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (<Box sx={{ display: 'flex' }}>
		<AppBar component="nav" position="sticky" style={{ backgroundColor: `${primaryColor}`, zIndex: '0', border: '0px', boxShadow: 'none' }}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					style={{ paddingLeft: '20%' }}
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					Unireview
				</Typography>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }} style={{ paddingRight: '20%' }}>
					{items.map((item) => (
						<Button key={item.key} sx={{ color: '#fff' }}>
							{item}
						</Button>
					))}
				</Box>

			</Toolbar>
		</AppBar>
		<Box component="nav">
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				{drawer}
			</Drawer>
		</Box>
	</Box >);
}
