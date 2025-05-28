import prisma from './lib/prisma.js';

async function main() {
  const contacts = await prisma.contact.findMany();
  console.log('Contacts:', contacts);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
