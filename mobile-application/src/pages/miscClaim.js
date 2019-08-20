import React, { Component } from "react";
import { 
    Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Icon, Title, Form, Item, Input, Label, Picker, Image, Thumbnail
} from "native-base";
//import { Image, TouchableHighlight } from "react-native";
//import myurl from '../images/receipt.jpg';


export default class CardItemBordered extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracker: false,
            date: "0",
            total: "0",
            purpose: "Food",
            receipt: require('../images/receipt.jpg'),
            logo: require('../images/logo.png'),
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
                                <Text> Fuel Claim </Text>  
                            </Button>
                        </Left>
                    </CardItem>


                    <CardItem bordered>
                        <Body>
                            <Image source={this.state.receipt} style={{height: 200, width: null, flex: 1}}/>
                            <Button block info>
                                <Icon active name="camera" /> 
                            </Button>
                            <Form>
                                <Item FloatLabelTextInput >
                                    <Label>Date</Label>
                                    <Input />
                                </Item>
                                <Item FloatLabelTextInput >
                                    <Label>Total R</Label>
                                    <Input />
                                </Item>
                                <Item FloatLabelTextInput >
                                    <Picker
                                        mode="dropdown"
                                        Header="Select Time"
                                        Icon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        selectedValue={this.state.purpose}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({purpose: itemValue})
                                    }>
                                        <Picker.Item label="Food" value="Food" />
                                        <Picker.Item label="Travel" value="Travel" />
                                        <Picker.Item label="Stationary" value="Stationary" />
                                        <Picker.Item label="Other" value="Other" />
                                    </Picker>
                                </Item>
                            </Form>
                        </Body>
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