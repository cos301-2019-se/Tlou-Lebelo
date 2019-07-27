import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Icon, Title } from "native-base";

export default class CardItemBordered extends Component {

    onSettingsClick = () => {
        this.props.navigation.navigate('SETTINGS')
    }

    render() {
        return (

            <Container>
                
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
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
                            <Button onPress={() => alert("View Records")} >
                                <Text>view</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button onPress={() => alert("Confirm your request to submit a claim")}>
                                <Icon active name="thumbs-up" />
                                <Text>submit</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
                
            </Container>
        );
    }
}