import { ScrollView, Text } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';

function Faq() {
    return (
        <Card>
            <Card.Title>FAQ</Card.Title>
            <Card.Divider />
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>Why was this site created?</ListItem.Title>
                        <ListItem.Subtitle>
                            We want to help visitors understand the political and perceptual bias of all news organizations large and small throughout the internet. We want this website to help visitors make educated decisions when it comes to forming opinions on important issues. It is our goal to curb the confirmation bias that we believe has plays an important role in forming our polarized political and social climate.
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>What is confirmation bias?</ListItem.Title>
                        <ListItem.Subtitle>
                            Confirmation bias is the tendency to search for, interpret, favor, and recall information in a way that confirms or supports one's prior beliefs or values.
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>How are you categorizing organizations?</ListItem.Title>
                        <ListItem.Subtitle>
                            We use third party data sources such as Axios to determine how to categorize particular websites. For websites with a smaller audience and no third party data to refer to we do our best to carefully discern how to categorize these ourselves.
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>How large is the team at SpinCrawler?</ListItem.Title>
                        <ListItem.Subtitle>
                            Right now, it's just me behind the scenes refining my knowledge of API programming to make this website a reality.
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
        </Card>
    );
}

const FaqScreen = () => {
    return (
        <ScrollView>
            <Faq />
        </ScrollView>
    );
};

export default FaqScreen;