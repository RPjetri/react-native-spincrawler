import { ScrollView, Text } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';

function Mission() {
    return (
        <Card>
            <Card.Title>About Us</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>
                This site was created to help create awareness for how information is being disseminated on the internet. In a polarized world and political climate, we hope that visitors find the organization of stories useful to dissecting the perspective of particular data sources and newsrooms. We give people a comprehensive and inclusive summary of topics they'd like to search. We want people to make educated choices on forming their perspectives considering the infinitesmal amount of data sources available to us on the web. Curbing confirmation bias is our mission and we will continually strive to do better given the technology provided to us.
            </Text>
        </Card>
    );
}

const AboutScreen = () => {
        return (
            <ScrollView>
                <Mission />
            </ScrollView>
        );
    };

export default AboutScreen;