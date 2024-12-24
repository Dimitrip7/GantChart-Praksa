import prisma from './prisma';

async function fetchData() {
    const events = await prisma.event.findMany({
        include: { Partner: true },
    });
    console.log(events);
}

fetchData()
    .catch((error) => console.error(error))
    .finally(async () => {
        await prisma.$disconnect();
    });
