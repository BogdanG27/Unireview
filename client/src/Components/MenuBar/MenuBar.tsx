import React, { useEffect, useState } from 'react';
import { Button, Drawer, Menu } from 'antd'
import './MenuBar.css'
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';


function buildMenuItem(props: { name: string, key: string, to: string, style: React.CSSProperties }) {
	return (
		<Menu.Item key={props.key} style={props.style}>
			<Link to={props.to}>{props.name}</Link>
		</Menu.Item>
	);
}

function buildDrawerItem(props: { name: string, to: string }) {
	return (
		<Link to={props.to}>{props.name}</Link>
	);
}

const items = [
	buildMenuItem({ name: 'Home', key: '1', to: '/', style: {} }),
	buildMenuItem({ name: 'Explore', key: '2', to: '/explore', style: {} }),
	buildMenuItem({ name: 'About', key: '3', to: '/about', style: { marginLeft: 'auto' } }),
]

const itemsD = [
	buildDrawerItem({ name: 'Home', to: '/' }),
	buildDrawerItem({ name: 'Explore', to: '/explore' }),
	buildDrawerItem({ name: 'About', to: '/about' }),
]

function MenuH() {
	return <Menu mode={'horizontal'} defaultSelectedKeys={['home']} theme='dark'>
		{items}
	</Menu>;
}

export default function MenuBar() {
	const [matches, setMatches] = useState(
		window.matchMedia("(min-width: 768px)").matches
	)
	useEffect(() => {
		window
			.matchMedia("(min-width: 768px)")
			.addEventListener('change', e => setMatches(e.matches));
	}, []);



	return (
		matches === true ? <MenuH /> : <DrawerV />);
}


function DrawerV() {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	return <>
		<Button type="primary" onClick={showDrawer}>
			Open
		</Button>
		<Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
			{itemsD}
		</Drawer>
	</>;
}

