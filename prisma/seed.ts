import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productData = [
    {
        "title": "Strawberry Shortcake",
        "price": 25.00,
        "category": "Fruits",
        "description": "A timeless fruit cake, layered with a creamy vanilla buttercream. Perfect for any celebration.",
        "image": "strawberry-shortcake.jpeg",
        "model": "strawberry_cream_cake_shortcake",
        "rating": 4.5,
        "ratingCount": 120
    },
    {
        "title": "Rich Chocolate Cake",
        "price": 30.00,
        "category": "Chocolate",
        "description": "Decadent chocolate cake with a rich chocolate ganache. A chocolate lover's dream.",
        "image": "chocolate-cake.jpg",
        "model": "chocolate_cake",
        "rating": 4.8,
        "ratingCount": 150
    },
    {
        "title": "Raspberry tartelette",
        "price": 28.00,
        "category": "Red Velvet",
        "description": "Classic raspberry tartelette cake with a smooth lemon buttercream. Velvety and luscious.",
        "image": "raspberry_alyzee.jpg",
        "model": "cake_1_-_maison_alyzee",
        "rating": 4.7,
        "ratingCount": 90
    },
    {
        "title": "Cartoon Cake",
        "price": 22.00,
        "category": "Lemon",
        "description": "Light and cartoony, 0 calories. Eyes only.",
        "image": "cartoon-cake.jpg",
        "model": "handpainted_watercolor_cake",
        "rating": 4.6,
        "ratingCount": 110
    },
    {
        "title": "Fruit cake",
        "price": 26.00,
        "category": "Fruits",
        "description": "Moist cake with fruits and nuts, airy bottom. Rich and fresh.",
        "image": "fruit-cake-slice.jpg",
        "model": "fruit_cake_slice",
        "rating": 4.9,
        "ratingCount": 105
    }
];


async function main() {
    await prisma.product.deleteMany({});
    for (const p of productData) {
        await prisma.product.create({
            data: p,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });