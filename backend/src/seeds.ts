import prisma from "./prisma";

async function seed() {
  try {
    // Clear existing data
    await prisma.event.deleteMany();
    await prisma.partner.deleteMany();

    // Seed partners
    const partners = await prisma.partner.createMany({
      data: [
        { name: "John Smith" },
        { name: "Jane Doe" },
        { name: "Alice Johnson" },
        { name: "Bob Williams" },
        { name: "Test Partner" },
      ],
    });

    console.log("Partners seeded successfully.");

    // Fetch all partners to get their IDs
    const partnerList = await prisma.partner.findMany();
    const partnerIds = partnerList.map((partner) => partner.id);

    // Seed events: every event will have Build, Closed, and Production versions
    await prisma.event.createMany({
      data: [
        // Tech Expo
        { name: "Tech Expo (Build)", dateStart: new Date("2023-06-01T00:00:00.000Z"), dateEnd: new Date("2023-06-02T23:59:59.000Z"), status: "Build", partnerId: partnerIds[0] },
        { name: "Tech Expo (Closed)", dateStart: new Date("2023-06-02T00:00:00.000Z"), dateEnd: new Date("2023-06-03T23:59:59.000Z"), status: "Closed", partnerId: partnerIds[0] },
        { name: "Tech Expo (Production)", dateStart: new Date("2023-06-03T00:00:00.000Z"), dateEnd: new Date("2023-06-04T23:59:59.000Z"), status: "Production", partnerId: partnerIds[0] },

        // Family Festival
        { name: "Family Festival (Build)", dateStart: new Date("2023-06-04T00:00:00.000Z"), dateEnd: new Date("2023-06-05T23:59:59.000Z"), status: "Build", partnerId: partnerIds[1] },
        { name: "Family Festival (Closed)", dateStart: new Date("2023-06-05T00:00:00.000Z"), dateEnd: new Date("2023-06-06T23:59:59.000Z"), status: "Closed", partnerId: partnerIds[1] },
        { name: "Family Festival (Production)", dateStart: new Date("2023-06-06T00:00:00.000Z"), dateEnd: new Date("2023-06-07T23:59:59.000Z"), status: "Production", partnerId: partnerIds[1] },

        // Music Festival
        { name: "Music Festival (Build)", dateStart: new Date("2023-06-07T00:00:00.000Z"), dateEnd: new Date("2023-06-08T23:59:59.000Z"), status: "Build", partnerId: partnerIds[2] },
        { name: "Music Festival (Closed)", dateStart: new Date("2023-06-08T00:00:00.000Z"), dateEnd: new Date("2023-06-09T23:59:59.000Z"), status: "Closed", partnerId: partnerIds[2] },
        { name: "Music Festival (Production)", dateStart: new Date("2023-06-09T00:00:00.000Z"), dateEnd: new Date("2023-06-10T23:59:59.000Z"), status: "Production", partnerId: partnerIds[2] },

        // Sports Day
        { name: "Sports Day (Build)", dateStart: new Date("2023-06-01T00:00:00.000Z"), dateEnd: new Date("2023-06-02T23:59:59.000Z"), status: "Build", partnerId: partnerIds[3] },
        { name: "Sports Day (Closed)", dateStart: new Date("2023-06-02T00:00:00.000Z"), dateEnd: new Date("2023-06-03T23:59:59.000Z"), status: "Closed", partnerId: partnerIds[3] },
        { name: "Sports Day (Production)", dateStart: new Date("2023-06-03T00:00:00.000Z"), dateEnd: new Date("2023-06-04T23:59:59.000Z"), status: "Production", partnerId: partnerIds[3] },

        // Innovation Workshop
        { name: "Innovation Workshop (Build)", dateStart: new Date("2023-06-04T00:00:00.000Z"), dateEnd: new Date("2023-06-05T23:59:59.000Z"), status: "Build", partnerId: partnerIds[4] },
        { name: "Innovation Workshop (Closed)", dateStart: new Date("2023-06-05T00:00:00.000Z"), dateEnd: new Date("2023-06-06T23:59:59.000Z"), status: "Closed", partnerId: partnerIds[4] },
      ],
    });

    console.log("Events seeded successfully.");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
