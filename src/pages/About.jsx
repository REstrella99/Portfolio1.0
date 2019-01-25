import React from 'react';
import Tea from '../images/tea.svg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paragraph from '../components/Paragraph';

const About = () => (
	<div>
		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>About me</Title>
					</Col>
					<Paragraph>Things you should know about me</Paragraph>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Img src={Tea} sizeX="100%" sizeY="120%" max="600px" />
					</Col>
				</Row>
			</Grid>
		</Section>
	</div>
);

export default About;
