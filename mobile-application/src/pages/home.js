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

                <Card>
                    <CardItem header bordered style={{alignItems: 'center',justifyContent: 'center',backgroundColor:'#D8DAD6'}}>
                        <Text style={{color: 'black'}} >Records Summary</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Left>
                            <Button transparent>
                                <Icon active name="car" />
                                <Text>13</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Text> Count: 21 </Text>
                            <Text> Total: R897.38 </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon active name="pizza" />
                                <Text>8</Text> 
                            </Button>   
                        </Right>
                    </CardItem>
                    <CardItem footer bordered>
                        <Left>
                            <Button onPress={() => this.onViewClick()} >
                                <Text>view</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button success onPress={() => alert("Confirm your request to submit your claims!")}>
                                <Icon active name="thumbs-up" />
                                <Text>submit</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem bordered header style={{alignItems: 'center',justifyContent: 'center',backgroundColor:'#D8DAD6'}}>
                        <Text style={{color: 'black'}} >Record New Claim</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Left>
                            <Button rounded light onPress={() => this.onFuelClick()}>
                                <Icon active name="car" />
                                <Text>Fuel</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button rounded info onPress={() => this.onMiscClick()}>
                                <Icon active name="pizza" />
                                <Text>Misc</Text> 
                            </Button>   
                        </Right>
                    </CardItem>
                    
                </Card>
                
            </Container>
        );
    }
}