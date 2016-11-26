import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './albumDetail';

class AlbumList extends Component {

	styles = {
		viewStyles: {
			marginTop: 20
		}
	};

	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
			this.setState({ albums: response.data });
		});
	}	

	renderAlbums() {
		return this.state.albums.map(
			album => <AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		if (this.state.albums.length !== 0) {
			return (
				<ScrollView>
					{this.renderAlbums()}
				</ScrollView>
			);	
		}	
		return (
			<View style={ this.styles.viewStyles }>
				<ActivityIndicator size="large" color="#000" />
			</View>
		);
	}
}

export default AlbumList;
