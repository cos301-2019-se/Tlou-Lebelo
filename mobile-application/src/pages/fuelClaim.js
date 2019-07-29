import React, { Component } from "react";
import { 
    Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Icon, Title, Form, Item, Input, Label, Thumbnail, Image
} from "native-base";
import GpsLocationTracker from '../gps/GpsLocationTracker';

export default class CardItemBordered extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracker: false,
            date: "0",
            total: "0",
            Distance: 0,
            odometer: require('../images/odometer.jpg'),
        }
    }

    onBackClick = () => {
        this.props.navigation.navigate('HOME')
    }

    onRefreshClick = () => {
        alert("Refresh")
    }

    render() {
        return (

            <Container>
                
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.onBackClick()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Retro </Title>
                    </Body>
                </Header>

                <Card>
                    <CardItem header bordered>
                        <Left>
                            <Button transparent>
                                <Icon active name="car" />
                                <Text> Fuel Claim</Text>
                                <Text note> Moday 15 August '19  </Text>
                            </Button>
                        </Left>
                    </CardItem>

                    <CardItem bordered>
                        <Left>
                            <Thumbnail source={this.state.odometer} />
                        </Left>
                        <Body>
                            <Form>
                                <Item inlineLabel last>
                                    <Label>Distance</Label>
                                    <Input />
                                </Item>
                            </Form>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon active name="camera" />
                            </Button>   
                        </Right>
                    </CardItem>
                    <CardItem bordered>
                        <GpsLocationTracker/>
                    </CardItem>
                    <CardItem bordered>
                        <Left>
                            <Thumbnail source={this.state.odometer} />
                        </Left>
                        <Body>
                            <Form>
                                <Item inlineLabel last>
                                    <Label>Distance</Label>
                                    <Input />
                                </Item>
                            </Form>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon active name="camera" /> 
                            </Button>   
                        </Right>
                    </CardItem>

                    <CardItem footer bordered>
                        <Left>
                            <Button onPress={() => this.onRefreshClick()} >
                                <Icon active name="refresh" />
                            </Button>
                        </Left>
                        <Right>
                            <Button success onPress={() => alert("Confirm your request to submit a claim")}>
                                <Text>save</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
                
            </Container>
        );
    }
}