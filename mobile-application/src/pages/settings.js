import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Picker, Button } from 'native-base';


export default class ListDividerExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }

    onEmailUpdateClick = () => {
        alert("update email!")
    }
    
    onValueChangeUpdate = (value) => {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <List>

                        <ListItem itemDivider>
                            <Left> 
                                <Button transparent> 
                                    <Icon name='mail' /> 
                                    <Text>Claim Submission</Text>
                                </Button>
                            </Left>
                        </ListItem>
                        <ListItem>
                            <Body> 
                                <Text> address@email.com </Text> 
                            </Body>
                            <Right>
                                <Button onPress={() => this.onEmailUpdateClick()} >
                                    <Text>update</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem itemDivider>
                            <Left> 
                                <Button transparent>
                                    <Icon name='clock' /> 
                                    <Text> Auto Submission </Text>
                                </Button> 
                            </Left>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body> 
                                <Text> address@email.com </Text> 
                            </Body>
                            <Right>
                                <Picker
                                    mode="dropdown"
                                    Header="Select Time"
                                    Icon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.selected}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({selected: itemValue})}
                                >
                                    <Picker.Item label="Week" value="key0" />
                                    <Picker.Item label="Month" value="key1" />
                                </Picker>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Time</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ali Connors</Text>
                        </ListItem>

                        <ListItem itemDivider>
                            <Left> 
                                <Button transparent>
                                    <Icon name='person' /> 
                                    <Text>Personal Information</Text>
                                </Button> 
                            </Left>
                        </ListItem>  
                        <ListItem>
                            <Text>Mr Tlou Lebelo </Text>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}