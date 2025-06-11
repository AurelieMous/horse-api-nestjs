import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Suppression dans l’ordre des dépendances
    await prisma.breedUse.deleteMany();
    await prisma.breedCoat.deleteMany();
    await prisma.breedCategory.deleteMany();
    await prisma.breed.deleteMany();
    await prisma.category.deleteMany();
    await prisma.coat.deleteMany();
    await prisma.use.deleteMany();
    await prisma.country.deleteMany();
    await prisma.user.deleteMany();

    await prisma.category.createMany({
        data: [
            { name: "Cheval de selle", description: "...", image: "" },
            { name: "Cheval de sport", description: "...", image: "" },
            { name: "Cheval de trait", description: "...", image: "" },
            { name: "Cheval miniature", description: "...", image: "" },
            { name: "Poney", description: "...", image: "" },
            { name: "Âne", description: "...", image: "" },
            { name: "Sauvage", description: "...", image: "" }
        ]
    });

    await prisma.coat.createMany({
        data: [
            { name: "Alezan", description: "...", image: "" },
            { name: "Bai", description: "...", image: "" },
            { name: "Noir", description: "...", image: "" },
            { name: "Palomino", description: "...", image: "" },
            { name: "Isabelle", description: "...", image: "" },
            { name: "Souris", description: "...", image: "" },
            { name: "Gris", description: "...", image: "" },
            { name: "Crème", description: "...", image: "" },
            { name: "Blanc", description: "...", image: "" },
            { name: "Rouan", description: "...", image: "" },
            { name: "Aubère", description: "...", image: "" },
            { name: "Pie", description: "...", image: "" },
            { name: "Tacheté", description: "...", image: "" }
        ]
    });

    await prisma.use.createMany({
        data: [
            { name: "Attelage", description: "Utilisation des chevaux pour tirer des véhicules dans un cadre utilitaire, sportif ou de loisir.", image: "https://example.com/images/attelage.jpg" },
            { name: "Boucherie", description: "Destination des chevaux pour la consommation de viande chevaline.", image: "https://example.com/images/boucherie.jpg" },
            { name: "Concours complet", description: "Discipline équestre combinant dressage, cross et saut d'obstacles.", image: "https://example.com/images/concours-complet.jpg" },
            { name: "Concours d'attelage", description: "Compétition où les chevaux tractent un attelage dans des épreuves de dressage, maniabilité et marathon.", image: "https://example.com/images/concours-attelage.jpg" },
            { name: "Concours de modèles", description: "Présentation de chevaux selon leurs standards morphologiques pour l’élevage.", image: "https://example.com/images/concours-modeles.jpg" },
            { name: "Course", description: "Utilisation des chevaux pour les courses de galop, trot ou steeple-chase.", image: "https://example.com/images/course.jpg" },
            { name: "Cross", description: "Épreuve d’endurance et d'obstacles naturels faisant partie du concours complet.", image: "https://example.com/images/cross.jpg" },
            { name: "CSO", description: "Concours de Saut d'Obstacles, où les chevaux franchissent des barres sur un parcours chronométré.", image: "https://example.com/images/cso.jpg" },
            { name: "Dressage", description: "Discipline visant à développer la souplesse, l’équilibre et l’obéissance du cheval.", image: "https://example.com/images/dressage.jpg" },
            { name: "Éco-pâturage", description: "Utilisation des chevaux pour l’entretien écologique de terrains et espaces naturels.", image: "https://example.com/images/eco-paturage.jpg" },
            { name: "Endurance", description: "Course d’endurance sur de longues distances mettant à l’épreuve la résistance du cheval.", image: "https://example.com/images/endurance.jpg" },
            { name: "Équitation western", description: "Style d’équitation inspiré du travail des cowboys, incluant des disciplines spécifiques comme le reining.", image: "https://example.com/images/western.jpg" },
            { name: "Équithérapie", description: "Approche thérapeutique utilisant la relation au cheval pour le soin ou le développement personnel.", image: "https://example.com/images/equitherapie.jpg" },
            { name: "Horse-Ball", description: "Sport équestre collectif mélangeant rugby et basketball à cheval.", image: "https://example.com/images/horseball.jpg" },
            { name: "Hunter", description: "Discipline proche du CSO avec un accent sur le style et la régularité.", image: "https://example.com/images/hunter.jpg" },
            { name: "Loisir", description: "Utilisation du cheval pour le plaisir personnel, sans objectif de performance.", image: "https://example.com/images/loisir.jpg" },
            { name: "Polocrosse", description: "Sport équestre combinant polo et lacrosse, joué avec une balle et des raquettes.", image: "https://example.com/images/polocrosse.jpg" },
            { name: "Poney Club", description: "Structures d’initiation à l’équitation pour les enfants, avec des poneys.", image: "https://example.com/images/poney-club.jpg" },
            { name: "Production mulassière", description: "Élevage de juments pour la production de mulets par croisement avec des baudets.", image: "https://example.com/images/production-mulassiere.jpg" },
            { name: "Randonnée", description: "Voyage ou promenade à cheval sur une ou plusieurs journées.", image: "https://example.com/images/randonnee.jpg" },
            { name: "Spectacle", description: "Représentations artistiques mettant en scène chevaux et cavaliers.", image: "https://example.com/images/spectacle.jpg" },
            { name: "Tauromachie", description: "Utilisation du cheval pour les corridas ou spectacles taurins.", image: "https://example.com/images/tauromachie.jpg" },
            { name: "Tourisme", description: "Activités touristiques autour du cheval ou incluant des balades et visites.", image: "https://example.com/images/tourisme.jpg" },
            { name: "Travaux agricoles", description: "Travaux de traction ou de labour dans un cadre agricole traditionnel.", image: "https://example.com/images/travaux-agricoles.jpg" },
            { name: "Travaux urbains", description: "Utilisation du cheval pour la collecte de déchets, le transport ou l’animation en ville.", image: "https://example.com/images/travaux-urbains.jpg" },
            { name: "TREC", description: "Techniques de Randonnée Équestre de Compétition, testant l’autonomie et la polyvalence du binôme.", image: "https://example.com/images/trec.jpg" },
            { name: "Voltige", description: "Discipline acrobatique réalisée sur un cheval en mouvement.", image: "https://example.com/images/voltige.jpg" }
        ]
    });

    await prisma.country.createMany({
        data: [
            { name: "Afrique du Nord" }, { name: "Allemagne" }, { name: "Argentine" }, { name: "Australie" },
            { name: "Autriche" }, { name: "Belgique" }, { name: "Brésil" }, { name: "Canada" },
            { name: "Colombie" }, { name: "Ecosse" }, { name: "Espagne" }, { name: "Etats-Unis" },
            { name: "France" }, { name: "Grande-Bretagne" }, { name: "Hongrie" }, { name: "Irlande" },
            { name: "Islande" }, { name: "Mexique" }, { name: "Norvège" }, { name: "Pays-Bas" },
            { name: "Pologne" }, { name: "Porto Rico" }, { name: "Portugal" },
            { name: "Proche et Moyen-Orient" }, { name: "République Tchèque" }, { name: "Turkménistan" }
        ]
    });

    // Les données dépendant de IDs automatiques nécessitent un fetch préalable (ex : coatId, useId, countryId, etc.)
    // Pour des associations many-to-many, tu dois d’abord récupérer les bons IDs avec `findFirst` ou `findMany`.

    console.log('✅ Seed terminé sans ids manuels.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
