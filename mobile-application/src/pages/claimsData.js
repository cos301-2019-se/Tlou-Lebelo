import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Icon, Title, Thumbnail } from "native-base";

export default class CardItemBordered extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: "15 July 2019",
            total: 0,
            records: 0,
            logo: require('../images/logo.png'),
        }
    }

    onSettingsClick = () => {
        this.props.navigation.navigate('SETTINGS')
    }

    onFuelClick = () => {
        this.props.navigation.navigate('FUELCLAIM')
    }

    onMiscClick = () => {
        this.props.navigation.navigate('MISCCLAIM')
    }

    onViewClick = () => {
        this.props.navigation.navigate('CLAIMSDATA')
    }
    
    render() {
        return (

            <Container>
                <Header style={{ backgroundColor: 'black' }} androidStatusBarColor="grey">
                    <Left>
                        <Button transparent >
                            <Thumbnail source={this.state.logo} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: '#9EF911'}} >Retro Claims </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onSettingsClick()} >
                            <Icon name='settings' style={{color: '#9EF911'}} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header button onPress={() => alert("This is Card Header")}>
                        <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("This is Card Body")}>
                        <Body>
                            <Text>
                                Click on any carditem
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => alert("This is Card Footer")}>
                        <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}