import { ScrollView, Text } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';

function Contact() {
    return (
        <Card>
            <Card.Title>Contact Us</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>
                Have questions or concerns? Contact us at info@spincrawler.com and we'll get back to you as soon as we can.
            </Text>
        </Card>
    );
}

const ContactScreen = () => {
    return (
        <ScrollView>
            <Contact />
        </ScrollView>
    );
};

export default ContactScreen;