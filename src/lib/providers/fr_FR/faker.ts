import Faker from "../faker";
import Randomizer from "../../randomizer";

export default class FakerImpl extends Faker {

    protected firstNamesMale = [
        'Adrien', 'Aimé', 'Alain', 'Alexandre', 'Alfred', 'Alphonse', 'André', 'Antoine', 'Arthur', 'Auguste', 'Augustin',
        'Benjamin', 'Benoît', 'Bernard', 'Bertrand', 'Charles', 'Christophe', 'Daniel', 'David', 'Denis', 'Édouard', 'Émile',
        'Emmanuel', 'Éric', 'Étienne', 'Eugène', 'François', 'Franck', 'Frédéric', 'Gabriel', 'Georges', 'Gérard', 'Gilbert',
        'Gilles', 'Grégoire', 'Guillaume', 'Guy', 'William', 'Henri', 'Honoré', 'Hugues', 'Isaac', 'Jacques', 'Jean', 'Jérôme',
        'Joseph', 'Jules', 'Julien', 'Laurent', 'Léon', 'Louis', 'Luc', 'Lucas', 'Marc', 'Marcel', 'Martin', 'Matthieu',
        'Maurice', 'Michel', 'Nicolas', 'Noël', 'Olivier', 'Patrick', 'Paul', 'Philippe', 'Pierre', 'Raymond', 'Rémy', 'René',
        'Richard', 'Robert', 'Roger', 'Roland', 'Sébastien', 'Stéphane', 'Théodore', 'Théophile', 'Thibaut', 'Thibault', 'Thierry',
        'Thomas', 'Timothée', 'Tristan', 'Victor', 'Vincent', 'Xavier', 'Yves', 'Zacharie', 'Claude', 'Dominique'
    ];

    protected firstNamesFemale = [
        'Adélaïde', 'Adèle', 'Adrienne', 'Agathe', 'Agnès', 'Aimée', 'Alexandrie', 'Alix', 'Alexandria', 'Alex', 'Alice',
        'Amélie', 'Anaïs', 'Anastasie', 'Andrée', 'Anne', 'Anouk', 'Antoinette', 'Arnaude', 'Astrid', 'Audrey', 'Aurélie',
        'Aurore', 'Bernadette', 'Brigitte', 'Capucine', 'Caroline', 'Catherine', 'Cécile', 'Céline', 'Célina', 'Chantal',
        'Charlotte', 'Christelle', 'Christiane', 'Christine', 'Claire', 'Claudine', 'Clémence', 'Colette', 'Constance',
        'Corinne', 'Danielle', 'Denise', 'Diane', 'Dorothée', 'Édith', 'Éléonore', 'Élisabeth', 'Élise', 'Élodie', 'Émilie',
        'Emmanuelle', 'Françoise', 'Frédérique', 'Gabrielle', 'Geneviève', 'Hélène', 'Henriette', 'Hortense', 'Inès', 'Isabelle',
        'Jacqueline', 'Jeanne', 'Jeannine', 'Joséphine', 'Josette', 'Julie', 'Juliette', 'Laetitia', 'Laure', 'Laurence',
        'Lorraine', 'Louise', 'Luce', 'Lucie', 'Lucy', 'Madeleine', 'Manon', 'Marcelle', 'Margaux', 'Margaud', 'Margot',
        'Marguerite', 'Margot', 'Margaret', 'Maggie', 'Marianne', 'Marie', 'Marine', 'Marthe', 'Martine', 'Maryse',
        'Mathilde', 'Michèle', 'Michelle', 'Michelle', 'Monique', 'Nathalie', 'Nath', 'Nathalie', 'Nicole', 'Noémi', 'Océane',
        'Odette', 'Olivie', 'Patricia', 'Paulette', 'Pauline', 'Pénélope', 'Philippine', 'Renée', 'Sabine', 'Simone', 'Sophie',
        'Stéphanie', 'Susanne', 'Suzanne', 'Susan', 'Suzanne', 'Sylvie', 'Thérèse', 'Valentine', 'Valérie', 'Véronique',
        'Victoire', 'Virginie', 'Zoé', 'Camille', 'Dominique'
    ];

    protected lastNames = [
        'Martin', 'Bernard', 'Thomas', 'Robert', 'Petit', 'Dubois', 'Richard', 'Garcia', 'Durand', 'Moreau', 'Lefebvre', 'Simon', 'Laurent', 'Michel', 'Leroy', 'Martinez', 'David', 'Fontaine', 'Da Silva', 'Morel', 'Fournier', 'Dupont', 'Bertrand', 'Lambert', 'Rousseau', 'Girard', 'Roux', 'Vincent', 'Lefevre', 'Boyer', 'Lopez', 'Bonnet', 'Andre', 'Francois', 'Mercier', 'Muller', 'Guerin', 'Legrand', 'Sanchez', 'Garnier', 'Chevalier', 'Faure', 'Perez', 'Clement', 'Fernandez', 'Blanc', 'Robin', 'Morin', 'Gauthier', 'Pereira', 'Perrin', 'Roussel', 'Henry', 'Duval', 'Gautier', 'Nicolas', 'Masson', 'Marie', 'Noel', 'Ferreira', 'Lemaire', 'Mathieu', 'Riviere', 'Denis', 'Marchand', 'Rodriguez', 'Dumont', 'Payet', 'Lucas', 'Dufour', 'Dos Santos', 'Joly', 'Blanchard', 'Meunier', 'Rodrigues', 'Caron', 'Gerard', 'Fernandes', 'Brunet', 'Meyer', 'Barbier', 'Leroux', 'Renard', 'Goncalves', 'Gaillard', 'Brun', 'Roy', 'Picard', 'Giraud', 'Roger', 'Schmitt', 'Colin', 'Arnaud', 'Vidal', 'Gonzalez', 'Lemoine', 'Roche', 'Aubert', 'Olivier', 'Leclercq', 'Pierre', 'Philippe', 'Bourgeois', 'Renaud', 'Martins', 'Leclerc', 'Guillaume', 'Lacroix', 'Lecomte', 'Benoit', 'Fabre', 'Carpentier', 'Vasseur', 'Louis', 'Hubert', 'Jean', 'Dumas', 'Rolland', 'Grondin', 'Rey', 'Huet', 'Gomez', 'Dupuis', 'Guillot', 'Berger', 'Moulin', 'Hoarau', 'Menard', 'Deschamps', 'Fleury', 'Adam', 'Boucher', 'Poirier', 'Bertin', 'Charles', 'Aubry', 'Da Costa', 'Royer', 'Dupuy', 'Maillard', 'Paris', 'Baron', 'Lopes', 'Guyot', 'Carre', 'Jacquet', 'Renault', 'Herve', 'Charpentier', 'Klein', 'Cousin', 'Collet', 'Leger', 'Ribeiro', 'Hernandez', 'Bailly', 'Schneider', 'Le Gall', 'Ruiz', 'Langlois', 'Bouvier', 'Gomes', 'Prevost', 'Julien', 'Lebrun', 'Breton', 'Germain', 'Millet', 'Boulanger', 'Remy', 'Le Roux', 'Daniel', 'Marques', 'Maillot', 'Leblanc', 'Le Goff', 'Barre', 'Perrot', 'Leveque', 'Marty', 'Benard', 'Monnier', 'Hamon', 'Pelletier', 'Alves', 'Etienne', 'Marchal', 'Poulain', 'Tessier', 'Lemaitre', 'Guichard', 'Besson', 'Mallet', 'Hoareau', 'Gillet', 'Weber', 'Jacob', 'Collin', 'Chevallier', 'Perrier', 'Michaud', 'Carlier', 'Delaunay', 'Chauvin', 'Alexandre', 'Marechal', 'Antoine', 'Lebon', 'Cordier', 'Lejeune', 'Bouchet', 'Pasquier', 'Legros', 'Delattre', 'Humbert', 'De Oliveira', 'Briand', 'Lamy', 'Launay', 'Gilbert', 'Perret', 'Lesage', 'Gay', 'Nguyen', 'Navarro', 'Besnard', 'Pichon', 'Hebert', 'Cohen', 'Pons', 'Lebreton', 'Sauvage', 'De Sousa', 'Pineau', 'Albert', 'Jacques', 'Pinto', 'Barthelemy', 'Turpin', 'Bigot', 'Lelievre', 'Georges', 'Reynaud', 'Ollivier', 'Martel', 'Voisin', 'Leduc', 'Guillet', 'Vallee', 'Coulon', 'Camus', 'Marin', 'Teixeira', 'Costa', 'Mahe', 'Didier', 'Charrier', 'Gaudin', 'Bodin', 'Guillou', 'Gregoire', 'Gros', 'Blanchet', 'Buisson', 'Blondel', 'Paul', 'Dijoux', 'Barbe', 'Hardy', 'Laine', 'Evrard', 'Laporte', 'Rossi', 'Joubert', 'Regnier', 'Tanguy', 'Gimenez', 'Allard', 'Devaux', 'Morvan', 'Levy', 'Dias', 'Courtois', 'Lenoir', 'Berthelot', 'Pascal', 'Vaillant', 'Guilbert', 'Thibault', 'Moreno', 'Duhamel', 'Colas', 'Masse', 'Baudry', 'Bruneau', 'Verdier', 'Delorme', 'Blin', 'Guillon', 'Mary', 'Coste', 'Pruvost', 'Maury', 'Allain', 'Valentin', 'Godard', 'Joseph', 'Brunel', 'Marion', 'Texier', 'Seguin', 'Raynaud', 'Bourdon', 'Raymond', 'Bonneau', 'Chauvet', 'Maurice', 'Legendre', 'Loiseau', 'Ferrand', 'Toussaint', 'Techer', 'Lombard', 'Lefort', 'Couturier', 'Bousquet', 'Diaz', 'Riou', 'Clerc', 'Weiss', 'Imbert', 'Jourdan', 'Delahaye', 'Gilles', 'Guibert', 'Begue', 'Descamps', 'Delmas', 'Peltier', 'Dupre', 'Chartier', 'Martineau', 'Laroche', 'Leconte', 'Maillet', 'Parent', 'Labbe', 'Potier', 'Bazin', 'Normand', 'Pottier', 'Torres', 'Lagarde', 'Blot', 'Jacquot', 'Lemonnier', 'Grenier', 'Rocher', 'Bonnin', 'Boutin', 'Fischer', 'Munoz', 'Neveu', 'Lacombe', 'Mendes', 'Delannoy', 'Auger', 'Wagner', 'Fouquet', 'Mace', 'Ramos', 'Pages', 'Petitjean', 'Chauveau', 'Foucher', 'Peron', 'Guyon', 'Gallet', 'Rousset', 'Traore', 'Bernier', 'Vallet', 'Letellier', 'Bouvet', 'Hamel', 'Chretien', 'Faivre', 'Boulay', 'Thierry', 'Samson', 'Ledoux', 'Salmon', 'Gosselin', 'Lecoq', 'Pires', 'Leleu', 'Becker', 'Diallo', 'Merle', 'Valette'
    ];

    protected countries = [
        'Afghanistan', 'Afrique du sud', 'Albanie', 'Algérie', 'Allemagne', 'Andorre', 'Angola', 'Anguilla', 'Antarctique', 'Antigua et Barbuda', 'Antilles néerlandaises', 'Arabie saoudite', 'Argentine', 'Arménie', 'Aruba', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Belgique', 'Belize', 'Benin', 'Bermudes (Les)', 'Bhoutan', 'Biélorussie', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Bouvet (Îles)', 'Brunei', 'Brésil', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cambodge', 'Cameroun', 'Canada', 'Cap Vert', 'Cayman (Îles)', 'Chili', 'Chine (Rép. pop.)', 'Christmas (Île)', 'Chypre', 'Cocos (Îles)', 'Colombie', 'Comores', 'Cook (Îles)', 'Corée du Nord', 'Corée, Sud', 'Costa Rica', 'Croatie', 'Cuba', 'Côte d\'Ivoire', 'Danemark', 'Djibouti', 'Dominique', 'Égypte', 'El Salvador', 'Émirats arabes unis', 'Équateur', 'Érythrée', 'Espagne', 'Estonie', 'États-Unis', 'Ethiopie', 'Falkland (Île)', 'Fidji (République des)', 'Finlande', 'France', 'Féroé (Îles)', 'Gabon',
        'Gambie', 'Ghana', 'Gibraltar', 'Grenade', 'Groenland', 'Grèce', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinée', 'Guinée Equatoriale', 'Guinée-Bissau', 'Guyane', 'Guyane française', 'Géorgie', 'Géorgie du Sud et Sandwich du Sud (Îles)', 'Haïti', 'Heard et McDonald (Îles)', 'Honduras', 'Hong Kong', 'Hongrie', 'Îles Mineures Éloignées des États-Unis', 'Inde', 'Indonésie', 'Irak', 'Iran', 'Irlande', 'Islande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kirghizistan', 'Kiribati', 'Koweit', 'La Barbad', 'Laos', 'Lesotho', 'Lettonie', 'Liban', 'Libye', 'Libéria', 'Liechtenstein', 'Lithuanie', 'Luxembourg', 'Macau', 'Macédoine', 'Madagascar', 'Malaisie', 'Malawi', 'Maldives (Îles)', 'Mali', 'Malte', 'Mariannes du Nord (Îles)', 'Maroc', 'Marshall (Îles)', 'Martinique', 'Maurice', 'Mauritanie', 'Mayotte', 'Mexique', 'Micronésie (États fédérés de)', 'Moldavie', 'Monaco', 'Mongolie', 'Montserrat', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Nepal',
        'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk (Îles)', 'Norvège', 'Nouvelle Calédonie', 'Nouvelle-Zélande', 'Oman', 'Ouganda', 'Ouzbékistan', 'Pakistan', 'Palau', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pays-Bas', 'Philippines', 'Pitcairn (Îles)', 'Pologne', 'Polynésie française', 'Porto Rico', 'Portugal', 'Pérou', 'Qatar', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Rép. Dém. du Congo', 'République centrafricaine', 'République Dominicaine', 'République tchèque', 'Réunion (La)', 'Sahara Occidental', 'Saint Pierre et Miquelon', 'Saint Vincent et les Grenadines', 'Saint-Kitts et Nevis', 'Saint-Marin (Rép. de)', 'Sainte Hélène', 'Sainte Lucie', 'Samoa', 'Samoa', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie', 'Soudan', 'Sri Lanka', 'Suisse', 'Suriname', 'Suède', 'Svalbard et Jan Mayen (Îles)', 'Swaziland', 'Syrie', 'São Tomé et Príncipe (Rép.)', 'Sénégal', 'Tadjikistan', 'Taiwan', 'Tanzanie', 'Tchad',
        'Territoire britannique de l\'océan Indien', 'Territoires français du sud', 'Thailande', 'Timor', 'Togo', 'Tokelau', 'Tonga', 'Trinité et Tobago', 'Tunisie', 'Turkménistan', 'Turks et Caïques (Îles)', 'Turquie', 'Tuvalu', 'Ukraine', 'Uruguay', 'Vanuatu', 'Vatican (Etat du)', 'Venezuela', 'Vierges (Îles)', 'Vierges britanniques (Îles)', 'Vietnam', 'Wallis et Futuna (Îles)', 'Yemen', 'Yougoslavie', 'Zambie', 'Zaïre', 'Zimbabwe'
    ];

    protected states = [
        'Alsace', 'Aquitaine', 'Auvergne', 'Bourgogne', 'Bretagne', 'Centre', 'Champagne-Ardenne',
        'Corse', 'Franche-Comté', 'Île-de-France', 'Languedoc-Roussillon', 'Limousin',
        'Lorraine', 'Midi-Pyrénées', 'Nord-Pas-de-Calais', 'Basse-Normandie', 'Haute-Normandie',
        'Pays-de-Loire', 'Picardie', 'Poitou-Charentes', "Provence-Alpes-Côte d'Azur", 'Rhone-Alpes',
        'Guadeloupe', 'Martinique', 'Guyane', 'Réunion', 'Saint-Pierre-et-Miquelon', 'Mayotte',
        'Saint-Barthélémy', 'Saint-Martin', 'Wallis-et-Futuna', 'Polynésie française', 'Nouvelle-Calédonie'
    ];

    protected streetPrefix = [
        'rue', 'rue', 'chemin', 'avenue', 'boulevard', 'place', 'impasse'
    ];

    protected citySuffix = [
        'ville', 'bourg', '-les-Bains', '-sur-Mer', '-la-Forêt', 'boeuf', 'saint',
        'nec', 'dan', 'gonec', 'mic', 'nic', 'pot', 'tin', 'bel', 'nit', 'selle', 'mule'
    ];

    protected jobs = [
        'Agent d\'accueil', 'Agent d\'enquêtes', 'Agent d\'entreposage', 'Agent de curage', 'Agro-économiste', 'Aide couvreur', 'Aide à domicile', 'Aide-déménageur', 'Ambassadeur', 'Analyste télématique', 'Animateur d\'écomusée', 'Animateur web', 'Appareilleur-gazier', 'Archéologue', 'Armurier d\'art', 'Armurier spectacle', 'Artificier spectacle', 'Artiste dramatique', 'Aspigiculteur', 'Assistant de justice', 'Assistant des ventes', 'Assistant logistique', 'Assistant styliste', 'Assurance', 'Auteur-adaptateur', 'Billettiste voyages', 'Brigadier', 'Bruiteur', 'Bâtonnier d\'art', 'Bûcheron', 'Cameraman', 'Capitaine de pêche', 'Carrier', 'Caviste', 'Chansonnier', 'Chanteur', 'Chargé de recherche', 'Chasseur-bagagiste', 'Chef de fabrication', 'Chef de scierie', 'Chef des ventes', 'Chef du personnel', 'Chef géographe', 'Chef monteur son', 'Chef porion', 'Chiropraticien', 'Choréologue', 'Chromiste', 'Cintrier-machiniste', 'Clerc hors rang', 'Coach sportif', 'Coffreur béton armé', 'Coffreur-ferrailleur', 'Commandant de police', 'Commandant marine', 'Commis de coupe', 'Comptable unique', 'Conception et études', 'Conducteur de jumbo', 'Conseiller culinaire', 'Conseiller funéraire', 'Conseiller relooking', 'Consultant ergonome', 'Contrebassiste', 'Convoyeur garde', 'Copiste offset', 'Corniste', 'Costumier-habilleur', 'Coutelier d\'art', 'Cueilleur de cerises', 'Céramiste concepteur', 'Danse', 'Danseur', 'Data manager', 'Dee-jay', 'Designer produit', 'Diététicien conseil', 'Diététique', 'Doreur sur métaux', 'Décorateur-costumier', 'Défloqueur d\'amiante', 'Dégustateur', 'Délégué vétérinaire', 'Délégué à la tutelle', 'Désamianteur', 'Détective', 'Développeur web', 'Ecotoxicologue', 'Elagueur-botteur', 'Elagueur-grimpeur', 'Elastiqueur', 'Eleveur d\'insectes', 'Eleveur de chats', 'Eleveur de volailles', 'Embouteilleur', 'Employé d\'accueil', 'Employé d\'étage', 'Employé de snack-bar', 'Endivier', 'Endocrinologue', 'Epithésiste', 'Essayeur-retoucheur', 'Etainier', 'Etancheur', 'Etancheur-bardeur', 'Etiqueteur', 'Expert back-office', 'Exploitant de tennis', 'Extraction', 'Facteur', 'Facteur de clavecins', 'Facteur de secteur', 'Fantaisiste', 'Façadier-bardeur', 'Façadier-ravaleur', 'Feutier', 'Finance', 'Flaconneur', 'Foreur pétrole', 'Formateur d\'italien', 'Fossoyeur', 'Fraiseur', 'Fraiseur mouliste', 'Frigoriste maritime', 'Fromager', 'Galeriste', 'Gardien de résidence', 'Garçon de chenil', 'Garçon de hall', 'Gendarme mobile', 'Guitariste', 'Gynécologue', 'Géodésien', 'Géologue prospecteur', 'Géomètre', 'Géomètre du cadastre', 'Gérant d\'hôtel', 'Gérant de tutelle', 'Gériatre', 'Hydrothérapie', 'Hématologue', 'Hôte de caisse', 'Ingénieur bâtiment', 'Ingénieur du son', 'Ingénieur géologue', 'Ingénieur géomètre', 'Ingénieur halieute', 'Ingénieur logistique', 'Instituteur', 'Jointeur de placage', 'Juge des enfants', 'Juriste financier', 'Kiwiculteur', 'Lexicographe', 'Liftier', 'Litigeur transport', 'Logistique', 'Logopède', 'Magicien', 'Manager d\'artiste', 'Mannequin détail', 'Maquilleur spectacle', 'Marbrier-poseur', 'Marin grande pêche', 'Matelassier', 'Maçon', 'Maçon-fumiste', 'Maçonnerie', 'Maître de ballet', 'Maïeuticien', 'Menuisier', 'Miroitier', 'Modéliste industriel', 'Moellonneur', 'Moniteur de sport', 'Monteur audiovisuel', 'Monteur de fermettes', 'Monteur de palettes', 'Monteur en siège', 'Monteur prototypiste', 'Monteur-frigoriste', 'Monteur-truquiste', 'Mouleur sable', 'Mouliste drapeur', 'Mécanicien-armurier', 'Médecin du sport', 'Médecin scolaire', 'Médiateur judiciaire', 'Médiathécaire', 'Net surfeur surfeuse', 'Oenologue', 'Opérateur de plateau', 'Opérateur du son', 'Opérateur géomètre', 'Opérateur piquage', 'Opérateur vidéo', 'Ouvrier d\'abattoir', 'Ouvrier serriste', 'Ouvrier sidérurgiste', 'Palefrenier', 'Paléontologue', 'Pareur en abattoir', 'Parfumeur', 'Parqueteur', 'Percepteur', 'Photographe d\'art', 'Pilote automobile', 'Pilote de soutireuse', 'Pilote fluvial', 'Piqueur en ganterie', 'Pisteur secouriste', 'Pizzaïolo', 'Plaquiste enduiseur', 'Plasticien', 'Plisseur', 'Poissonnier-traiteur', 'Pontonnier', 'Porion', 'Porteur de hottes', 'Porteur de journaux', 'Portier', 'Poseur de granit', 'Posticheur spectacle', 'Potier', 'Praticien dentaire', 'Praticiens médicaux', 'Premier clerc', 'Preneur de son', 'Primeuriste', 'Professeur d\'italien', 'Projeteur béton armé', 'Promotion des ventes', 'Présentateur radio', 'Pyrotechnicien', 'Pédicure pour bovin', 'Pédologue', 'Pédopsychiatre', 'Quincaillier', 'Radio chargeur', 'Ramasseur d\'asperges', 'Ramasseur d\'endives', 'Ravaleur-ragréeur', 'Recherche', 'Recuiseur', 'Relieur-doreur', 'Responsable de salle', 'Responsable télécoms', 'Revenue Manager', 'Rippeur spectacle', 'Rogneur', 'Récupérateur', 'Rédacteur des débats', 'Régleur funéraire', 'Régleur sur tour', 'Sapeur-pompier', 'Scannériste', 'Scripte télévision', 'Sculpteur sur verre', 'Scénariste', 'Second de cuisine', 'Secrétaire juridique', 'Semencier', 'Sertisseur', 'Services funéraires', 'Solier-moquettiste', 'Sommelier', 'Sophrologue', 'Staffeur', 'Story boarder', 'Stratifieur', 'Stucateur', 'Styliste graphiste', 'Surjeteur-raseur', 'Séismologue', 'Technicien agricole', 'Technicien bovin', 'Technicien géomètre', 'Technicien plateau', 'Technicien énergie', 'Terminologue', 'Testeur informatique', 'Toiliste', 'Topographe', 'Toréro', 'Traducteur d\'édition', 'Traffic manager', 'Trieur de métaux', 'Turbinier', 'Téléconseiller', 'Tôlier-traceur', 'Vendeur carreau', 'Vendeur en lingerie', 'Vendeur en meubles', 'Vendeur en épicerie', 'Verrier d\'art', 'Verrier à la calotte', 'Verrier à la main', 'Verrier à main levée', 'Vidéo-jockey', 'Vitrier',
    ];

    protected domains = [
        'voila.fr', 'gmail.com', 'hotmail.fr', 'yahoo.fr', 'laposte.net', 'free.fr',
        'sfr.fr', 'orange.fr', 'bouygtel.fr', 'club-internet.fr', 'dbmail.com',
        'live.com', 'ifrance.com', 'noos.fr', 'tele2.fr', 'tiscali.fr', 'wanadoo.fr',
        'gmail.com', 'yahoo.com', 'hotmail.com', 'gmail.com', 'gmail.com', 'gmail.com'
    ];

    protected days = [
        "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
    ];

    protected months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    constructor() {
        super();
    }

    public zipcode(): string {
        const first = Randomizer.randNumber(10);
        let second;
        // for france
        switch (first) {
            case 0:
                second = Randomizer.randNumber(10, 1);
                break;
            case 9:
                second = Randomizer.randNumber(5, 0);
                break;
            default:
                second = Randomizer.randNumber(10);
                break;
        }
        const thirst = Randomizer.randNumber(10);
        const fourth = Randomizer.randNumber(10);
        const fifth = Randomizer.randNumber(10);
        return `${first}${second}${thirst}${fourth}${fifth}`;
    }

    public city(): string {
        switch (Randomizer.randNumber(5)) {
            case 0:
            case 1:
            case 2:
            case 3:
                return this.lastName() + Randomizer.randomize(this.citySuffix);

            case 4:
                return this.lastName() + "-sur-" + this.lastName();
        }
    }

}