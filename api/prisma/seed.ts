import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main() {

    const category = await prisma.category.createMany(
        {
            data: [
                {
                    id: 1,
                    name:"Cheval de selle",
                    description: "Cheval destiné à être monté par un cavalier.",
                    image:""
                },
                {
                    id: 2,
                    name: "Cheval de sport",
                    description: "Cheval de selle élevé et sélectionné pour la pratique des sports équestres.",
                    image:""
                },
                {
                    id: 3,
                    name: "Cheval de trait",
                    description: "Un cheval de trait est un cheval sélectionné pour ses aptitudes à la traction de véhicules et de matériaux de toutes sortes.",
                    image:""
                },
                {
                    id: 4,
                    name: "Cheval miniature",
                    description: "Les chevaux miniatures sont de la taille des plus petits poneys.",
                    image:""
                },
                {
                    id: 5,
                    name: "Poney",
                    description: "cheval de petite taille.",
                    image:""
                },
                {
                    id: 6,
                    name: "Âne",
                    description: "Équidé domestique, plus petit que le cheval, à longues oreilles, à robe généralement grise.",
                    image:""
                },
                {
                    id: 7,
                    name: "Sauvage",
                    description: "Cheval qui vit en liberté, sans contacts avec l'être humain, ou très peu.",
                    image:""
                }
            ]
        }
    )
    const coat = await prisma.coat.createMany(
        {
            data: [
                {
                    id: 1,
                    name: "Alezan",
                    description: "Le cheval alezan présente des poils et des crins de couleur fauve. Les crins peuvent être de couleur plus claire, mais jamais noirs. La couleur de la peau n’est pas rose, mais elle reste claire et les yeux sont foncés.",
                    image:""
                },
                {
                    id: 2,
                    name: "Bai",
                    description: "Un cheval bai présente des poils de couleur fauve (marron, roux, noisette, chocolat…) et des crins de couleur noire. Le bout du nez, le bas des membres, et plus globalement toutes les extrémités du cheval bai sont noires.",
                    image:""
                },
                {
                    id: 3,
                    name: "Noir",
                    description: "Un cheval noir possède des poils et des crins noirs. La peau et les yeux sont de la même couleur.",
                    image:""
                },
                {
                    id: 4,
                    name: "Palomino",
                    description: "Un cheval palomino présente des poils fauves clairs, parfois dorés. Les crins sont plus clairs que les poils, de couleur blanc-argenté. La peau est grise ou noire et les yeux sont foncés.",
                    image:""
                },
                {
                    id: 5,
                    name: "Isabelle",
                    description: "Un cheval dont la robe est isabelle présente des poils de couleur jaune sable. Les crins sont noirs tout comme l’extrémité des membres. La peau est noire et les yeux sont foncés.",
                    image:""
                },
                {
                    id: 6,
                    name: "Souris",
                    description: "Un cheval souris possède des poils de couleur gris cendrés et des crins de la même couleur, tirant toutefois vers le noir. Le contour des oreilles et le bas des membres sont noirs eux-aussi (sauf présence de balzanes). La peau est noire et les yeux sont foncés.",
                    image:""
                },
                {
                    id: 7,
                    name: "Gris",
                    description: "Le cheval dont la robe est grise est un animal qui possède des poils et des crins de couleurs mélangées (blanc et noir, bai ou alezan). Le poil est clair, la peau est noire et les yeux sont foncés.",
                    image:""
                },
                {
                    id: 8,
                    name: "Crème",
                    description: "Un cheval à la robe crème possède des poils de couleur crème et des crins blancs, voire gris. La peau est rose et les yeux sont clairs.",
                    image:""
                },
                {
                    id: 9,
                    name: "Blanc",
                    description: "Un cheval blanc possède des poils et des crins totalement blancs, sans aucune marque ni tache. Seul le contour des yeux peut être plus foncé. Sa peau est rose, ses sabots sont blancs et les yeux peuvent être bleus ou foncés.",
                    image:""
                },
                {
                    id: 10,
                    name: "Rouan",
                    description: "Le cheval rouan présente un mélange de poils alezans, noirs et blancs. Les poils blancs ne se retrouvent généralement ni sur la tête du cheval, ni sur le bas de ses membres. La peau est foncée et il n’existe généralement pas de marques blanches.",
                    image:""
                },
                {
                    id: 11,
                    name: "Aubère",
                    description: "Le cheval aubère présente un mélange de poils alezans et blancs. La couleur du cheval aubère peut varier selon la quantité de poils blancs qu’il présente et la nuance d’alezan.",
                    image:""
                },
                {
                    id: 12,
                    name: "Pie",
                    description:"Un cheval à la robe pie est un cheval qui présente plusieurs zones de poils blancs, des zones de poils colorés et une ou plusieurs balzanes plus hautes que le coude ou le grasset. Le cheval peut, par exemple, être blanc et alezan ou blanc et noir. La peau doit être rose sous les poils blancs et les taches peuvent être de forme et de taille variées.",
                    image:""
                },
                {
                    id: 13,
                    name: "Tacheté",
                    description: "Un cheval tacheté présente une robe unie surmontée de petites taches rondes. Cette robe est très caractéristique des chevaux de race Appaloosa.",
                    image:""
                }
            ]
        }
    )

    const use = prisma.use.createMany(
        {
            data: [
                {
                    id: 1,
                    name: "Attelage",
                    description: "Utilisation des chevaux pour tirer des véhicules dans un cadre utilitaire, sportif ou de loisir.",
                    image: "https://example.com/images/attelage.jpg"
                },
                {
                    id: 2,
                    name: "Boucherie",
                    description: "Destination des chevaux pour la consommation de viande chevaline.",
                    image: "https://example.com/images/boucherie.jpg"
                },
                {
                    id: 3,
                    name: "Concours complet",
                    description: "Discipline équestre combinant dressage, cross et saut d'obstacles.",
                    image: "https://example.com/images/concours-complet.jpg"
                },
                {
                    id: 4,
                    name: "Concours d'attelage",
                    description: "Compétition où les chevaux tractent un attelage dans des épreuves de dressage, maniabilité et marathon.",
                    image: "https://example.com/images/concours-attelage.jpg"
                },
                {
                    id: 5,
                    name: "Concours de modèles",
                    description: "Présentation de chevaux selon leurs standards morphologiques pour l’élevage.",
                    image: "https://example.com/images/concours-modeles.jpg"
                },
                {
                    id: 6,
                    name: "Course",
                    description: "Utilisation des chevaux pour les courses de galop, trot ou steeple-chase.",
                    image: "https://example.com/images/course.jpg"
                },
                {
                    id: 7,
                    name: "Cross",
                    description: "Épreuve d’endurance et d'obstacles naturels faisant partie du concours complet.",
                    image: "https://example.com/images/cross.jpg"
                },
                {
                    id: 8,
                    name: "CSO",
                    description: "Concours de Saut d'Obstacles, où les chevaux franchissent des barres sur un parcours chronométré.",
                    image: "https://example.com/images/cso.jpg"
                },
                {
                    id: 9,
                    name: "Dressage",
                    description: "Discipline visant à développer la souplesse, l’équilibre et l’obéissance du cheval.",
                    image: "https://example.com/images/dressage.jpg"
                },
                {
                    id: 10,
                    name: "Éco-pâturage",
                    description: "Utilisation des chevaux pour l’entretien écologique de terrains et espaces naturels.",
                    image: "https://example.com/images/eco-paturage.jpg"
                },
                {
                    id: 11,
                    name: "Endurance",
                    description: "Course d’endurance sur de longues distances mettant à l’épreuve la résistance du cheval.",
                    image: "https://example.com/images/endurance.jpg"
                },
                {
                    id: 12,
                    name: "Équitation western",
                    description: "Style d’équitation inspiré du travail des cowboys, incluant des disciplines spécifiques comme le reining.",
                    image: "https://example.com/images/western.jpg"
                },
                {
                    id: 13,
                    name: "Équithérapie",
                    description: "Approche thérapeutique utilisant la relation au cheval pour le soin ou le développement personnel.",
                    image: "https://example.com/images/equitherapie.jpg"
                },
                {
                    id: 14,
                    name: "Horse-Ball",
                    description: "Sport équestre collectif mélangeant rugby et basketball à cheval.",
                    image: "https://example.com/images/horseball.jpg"
                },
                {
                    id: 15,
                    name: "Hunter",
                    description: "Discipline proche du CSO avec un accent sur le style et la régularité.",
                    image: "https://example.com/images/hunter.jpg"
                },
                {
                    id: 16,
                    name: "Loisir",
                    description: "Utilisation du cheval pour le plaisir personnel, sans objectif de performance.",
                    image: "https://example.com/images/loisir.jpg"
                },
                {
                    id: 17,
                    name: "Polocrosse",
                    description: "Sport équestre combinant polo et lacrosse, joué avec une balle et des raquettes.",
                    image: "https://example.com/images/polocrosse.jpg"
                },
                {
                    id: 18,
                    name: "Poney Club",
                    description: "Structures d’initiation à l’équitation pour les enfants, avec des poneys.",
                    image: "https://example.com/images/poney-club.jpg"
                },
                {
                    id: 19,
                    name: "Production mulassière",
                    description: "Élevage de juments pour la production de mulets par croisement avec des baudets.",
                    image: "https://example.com/images/production-mulassiere.jpg"
                },
                {
                    id: 20,
                    name: "Randonnée",
                    description: "Voyage ou promenade à cheval sur une ou plusieurs journées.",
                    image: "https://example.com/images/randonnee.jpg"
                },
                {
                    id: 21,
                    name: "Spectacle",
                    description: "Représentations artistiques mettant en scène chevaux et cavaliers.",
                    image: "https://example.com/images/spectacle.jpg"
                },
                {
                    id: 22,
                    name: "Tauromachie",
                    description: "Utilisation du cheval pour les corridas ou spectacles taurins.",
                    image: "https://example.com/images/tauromachie.jpg"
                },
                {
                    id: 23,
                    name: "Tourisme",
                    description: "Activités touristiques autour du cheval ou incluant des balades et visites.",
                    image: "https://example.com/images/tourisme.jpg"
                },
                {
                    id: 24,
                    name: "Travaux agricoles",
                    description: "Travaux de traction ou de labour dans un cadre agricole traditionnel.",
                    image: "https://example.com/images/travaux-agricoles.jpg"
                },
                {
                    id: 25,
                    name: "Travaux urbains",
                    description: "Utilisation du cheval pour la collecte de déchets, le transport ou l’animation en ville.",
                    image: "https://example.com/images/travaux-urbains.jpg"
                },
                {
                    id: 26,
                    name: "TREC",
                    description: "Techniques de Randonnée Équestre de Compétition, testant l’autonomie et la polyvalence du binôme.",
                    image: "https://example.com/images/trec.jpg"
                },
                {
                    id: 27,
                    name: "Voltige",
                    description: "Discipline acrobatique réalisée sur un cheval en mouvement.",
                    image: "https://example.com/images/voltige.jpg"
                }
            ]
        }
    )

    const country = prisma.country.createMany(
        {
            data:
            [
                {
                    id: 1,
                    name: "Afrique du Nord"
                },
                {
                    id: 2,
                    name: "Allemagne"
                },
                {
                    id: 3,
                    name: "Argentine"
                },
                {
                    id: 4,
                    name: "Australie"
                },
                {
                    id: 5,
                    name: "Autriche"
                },
                {
                    id: 6,
                    name: "Belgique"
                },
                {
                    id: 7,
                    name: "Brésil"
                },
                {
                    id: 8,
                    name: "Canada"
                },
                {
                    id: 9,
                    name: "Colombie"
                },
                {
                    id: 10,
                    name: "Ecosse"
                },
                {
                    id: 11,
                    name: "Espagne"
                },
                {
                    id: 12,
                    name: "Etats-Unis"
                },
                {
                    id: 13,
                    name: "France"
                },
                {
                    id: 14,
                    name: "Grande-Bretagne"
                },
                {
                    id: 15,
                    name: "Hongrie"
                },
                {
                    id: 16,
                    name: "Irlande"
                },
                {
                    id: 17,
                    name: "Islande"
                },
                {
                    id: 18,
                    name: "Mexique"
                },
                {
                    id: 19,
                    name: "Norvège"
                },
                {
                    id: 20,
                    name: "Pays-Bas"
                },
                {
                    id: 21,
                    name: "Pologne"
                },
                {
                    id: 22,
                    name: "Porto Rico"
                },
                {
                    id: 23,
                    name: "Portugal"
                },
                {
                    id: 24,
                    name: "Proche et Moyen-Orient"
                },
                {
                    id: 25,
                    name: "République Tchèque"
                },
                {
                    id: 26,
                    name: "Turkménistan"
                }
            ]
        }
    )

    const breed = prisma.breed.createMany(
        {
            data: [
                {
                    id: 1,
                    name: "Frison",
                    description:"Cheval emblématique de spectacles et de scènes de cinéma, le Frison a su se faire remarquer grâce à sa robe noire et à ses fières allures de type « baroques ». Ce grand cheval originaire des Pays-Bas est une des races les plus anciennes d’Europe. Elle a conservé ses caractéristiques primaires au cours de son évolution tout en ayant les capacités de s’adapter aux besoins de l’Homme.",
                    countryId: 20,
                    image: "",
                    size: "1m55 à 1m65",
                    weight:"600 à 800kg"
                },
                {
                    id: 2,
                    name: "Pottok",
                    description:"Le Pottok est un poney originaire du pays basque français et espagnol. Il est montagnard et s’est développé au fil des années dans les sommets pyrénéens. Aujourd’hui deux catégories de pottok se distinguent. Le pottok montagnard est le plus traditionnel, et est censé vivre 9 mois de l’année en libre parcours (conditions pour porter l’appellation « Pottok des montagnes »).\n" + "Le pottok dit de « prairie » correspond lui au croisement avec d’autres races, notamment l’arabe, en vue d’en faire des poneys de sport.",
                    countryId: 13,
                    image: "",
                    size: "1m15m à 1m47",
                    weight:"220 à 400kg"
                },
                {
                    id: 3,
                    name: "Percheron",
                    description:"Le Percheron est un des chevaux de trait français les plus célèbres. Il provient de la région du Perche où son élevage y a été longtemps cantonné avant de s’exporter à d’autres régions françaises et du monde comme les Etats-Unis. Au fil de l’élevage, deux modèles de chevaux se distinguent. Le trait percheron : grand, lourd et plus robuste, adapté aux travaux du champs et au débardage. Le diligencier qui comme son nom l’indique tracte les diligences, et dont le modèle plus léger fait de lui un cheval très réputé pour la traction au trot.",
                    countryId: 13,
                    image: "",
                    size: "1m68 à 1m85",
                    weight:"500kg à 1200kg"
                }
            ]
        }
    )

    const breed_category = prisma.breedCategory.createMany({
        data: [
            {id: 1, breedId: 1, categoryId: 1},
            {id: 2, breedId: 1, categoryId: 2},
            {id: 3, breedId: 1, categoryId: 3},
            {id: 4, breedId: 2, categoryId: 5},
            { id: 5, breedId: 3, categoryId: 3 }
        ]
    })

    const breed_coat = prisma.breedCoat.createMany({
        data: [
            {id: 1, breedId: 1, coatId: 3},
            {id: 2, breedId: 2, coatId: 1},
            {id: 3, breedId: 2, coatId: 2},
            {id: 4, breedId: 2, coatId: 3},
            {id: 5, breedId: 2, coatId: 12},
            { id: 6, breedId: 3, coatId: 7 },
            { id: 7, breedId: 3, coatId: 3 }
        ]
    })

    const breed_use = prisma.breedUse.createMany(
        {
            data: [
                {id: 1, breedId: 1, useId: 1},
                { id: 2, breedId: 1, useId: 9  },
                {id: 3, breedId: 1, useId: 16},
                {id: 4, breedId: 1, useId: 1},
                { id: 5, breedId: 1, useId: 20 },
                { id: 6, breedId: 1, useId: 21 },
                { id: 7, breedId: 1, useId: 26 },
                { id: 8, breedId: 1, useId: 27 },
                { id: 9, breedId: 2, useId: 1 },
                { id: 10, breedId: 2, useId: 18 },
                { id: 11, breedId: 2, useId: 20 },
                { id: 12, breedId: 2, useId: 24 },
                { id: 13, breedId: 3, useId: 1 },
                { id: 14, breedId: 3, useId: 24 }
            ]
        }
    )

    console.log('Seed terminé ✅')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })