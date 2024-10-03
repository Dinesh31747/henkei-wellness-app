import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link

const items = [
    {
        name: "Mental Health Resources",
        description: "Find help and support for mental well-being.",
        image: "https://via.placeholder.com/800x300?text=Mental+Health",
        link: "/developing" // Add link for the item
    },
    {
        name: "Fitness Programs",
        description: "Get access to fitness programs tailored for you.",
        image: "https://via.placeholder.com/800x300?text=Fitness+Programs",
        link: "/developing" // Add link for the item
    },
    {
        name: "Nutrition Advice",
        description: "Personalized nutrition guidance for a healthier you.",
        image: "https://via.placeholder.com/800x300?text=Nutrition+Advice",
        link: "/developing" // Add link for the item
    }
];

const HomeCarousel = () => {
    return (
        <Carousel>
            {items.map((item, i) => (
                <CarouselItem key={i} item={item} />
            ))}
        </Carousel>
    );
};

const CarouselItem = ({ item }) => {
    return (
        <Paper style={{ position: 'relative', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', color: 'white' }}>
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                position: 'absolute',
                bottom: '0',
                width: '100%',
                padding: '20px'
            }}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body2">{item.description}</Typography>
                <Link to={item.link} style={{ textDecoration: 'none' }}> {/* Wrap Button in Link */}
                    <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                        Learn More
                    </Button>
                </Link>
            </div>
        </Paper>
    );
};

export default HomeCarousel;
