import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Icon, Title } from "native-base";

export default class CardItemBordered extends Component {

    onSettingsClick = () => {
        this.props.navigation.navigate('SETTINGS')
    }

    onFuelClick = () => {
        this.props.navigation.navigate('FUELCLAIM')
    }

    onMiscClick = () => {
        this.props.navigation.navigate('MISCCLAIM')
    }

    render() {
        return (

            <Container>
                
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='grid' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Retro </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onSettingsClick()} >
                            <Icon name='settings' />
                        </Button>
                    </Right>
                </Header>

                <Card>
                    <CardItem header bordered>
                        <Left>
                            <Button transparent>
                                <Icon active name="car" />
                                <Text>13</Text>
                            </Button>
                        </Left>
                        
                        <Right>
                            <Button transparent>
                                <Icon active name="pizza" />
                                <Text>8</Text> 
                            </Button>   
                        </Right>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text> Records: 21 </Text>
                            <Text> Total: R897.38 </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Left>
                            <Button onPress={() => alert("View Claims Record!")} >
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
                    <CardItem bordered header style={{alignItems: 'center',justifyContent: 'center'}}>
                        <Text>Record New Claim</Text>
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