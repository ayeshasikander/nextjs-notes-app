// src/components/ui/card/Card.tsx
import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image'; // Importing the Image component from next/image

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className={styles.card}>
            <Image
                src={imageUrl}
                alt={title}
                className={styles.image}
                width={300}   // You can specify width and height here
                height={200}  // to optimize image rendering
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default Card;
