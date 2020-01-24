import Faker from "../fr_FR";
import Randomizer from "../../randomizer";

// bzh is a french region, so inherit from fr_FR provider
export default class FakerImpl extends Faker {

    protected firstNamesMale = [
        "Ael", "Alan", "Alban", "Alouarn", "Andrev", "Aodren", "Avel", "Abel", "Argan", "Armel", "Armael", "Arzel", "Arzhur", "Arzhul", "Awenig", "Azel", "Bleiz", "Bodmaël", "Bodvaël", "Breval", "Briac", "Brieg", "Briend", "Brivaël", "Budig", "Buzig", "Budog", "Budogan", "Catwalon", "Catualon", "Cleden", "Kleden", "Conwoion", "Denez", "Derog", "Divi", "Dewi", "Drogon", "Edern", "Efflamm", "Eflam", "Ehouarn", "Eliaz", "Elouan", "Enor", "Envel", "Eon", "Eozen", "Erwan", "Erwann", "Ervoan", "Evan", "Ewen", "Even", "Fañch", "Fragan", "Fracan", "Frañsez", "Gael", "Gaiwin", "Gaiben", "Ganaël", "Gegon", "Gereg", "Warog", "Jestin", "Getenok", "Gireg", "Gloutroñ", "Gorgon", "Gourgon", "Goulven", "Goulwen", "Gourmaëlon", "Gourmelon", "Gourmelen", "Wrmaëlon", "Gralon", "Gradlon", "Gregor", "Guénolé", "Guénaël", "Guillian", "Guirec", "Guiraac", "Gurloës", "Gurvand", "Gurvan", "Gweltaz", "Gwenc'hlan", "Gwenael", "Gwendal", "Gwenegan", "Gwenou", "Gwenole", "Gwenvael", "Gwilherm", "Gwion", "Herve", "Houarnon", "Hoel", "Howel", "Houardon", "Houarvian", "Helouri", "Iael", "Iañ", "Iltud", "Tudig", "Ioañ", "Iouen", "Ioun", "Ivi", "Ifig", "Jagu", "Jegu", "Jakez", "Jaoua", "Jaouen", "Jaoven", "Joeva", "Jova", "Jili", "Jil", "Job", "Jud", "Judicaël", "Judikael", "Juhel", "Jikel", "Jezekel", "Jungomarc'h", "Jukondin", "Jugon", "Juvad", "Kadeg", "Kadog", "Kado", "Kadou", "Kaëlig", "Kaourintin", "Kaorantin", "Kaou", "Karadeg", "Ke", "Kelen", "Kolaig", "Nicolaz", "Konan", "Kenan", "Korneli", "Kristen", "Kristoc'h", "Kilian", "Laouenan", "Loig", "Lomig", "Gwilhom", "Gwilherm", "Louarn", "Lug", "Loeïzen", "Loeiz", "Loïs", "Madeg", "Maden", "Mael", "Maël", "Maëlan", "Malo", "Malou", "Maodez", "Matilin", "Mazhe", "Maze", "Mahe", "Maho", "Melen", "Meloar", "Melar", "Melaer", "Meriadeg", "Merwen", "Meven", "Meheñ", "Meeñ", "Mikael", "Milio", "Meliaw", "Miliaw", "Morgan", "Morvan", "Nedeleg", "Neventer", "Nevenou", "Nevenoe", "Venou", "Neven", "Nuz", "Olier", "Pol", "Paol", "Paskweten", "Paskwiten", "Pask", "Paskal", "Paskou", "Per", "Peran", "Petrok", "Perig", "Pereg", "Prijañ", "Riagad", "Rieg", "Riou", "Rio", "Riog", "Rivod", "Riwod", "Rivodius", "Riwal", "Riwall", "Riwalon", "Rivelen", "Walig", "Ronan", "Reun", "Renan", "Roparz", "Rudalt", "Salaun", "Selaven", "Samzun", "Segal", "Servan", "Stefan", "Steven", "Soaig", "Soig", "Talwin", "Tangi", "Taran", "Tegoneg", "Veneg", "Tenenan", "Tomaz", "Trever", "Tremer", "Tujen", "Tristan", "Tual", "Tudal", "Tudwal", "Tugdual", "Tudi", "Vio", "Wiomarc", "Yann", "Yann", "Bêr", "Yann", "Vari",
    ];

    protected firstNamesFemale = [
        "Ael", "Aelez", "Aela", "Laig", "Lezig", "Aelia", "Aenor", "Norig", "Ahez", "Alana", "Alanez", "Naig", "Nezig", "Alara", "Lara", "Elara", "Lera", "Alera", "Albina", "Albinen", "Bina", "Binen", "Alis", "Alwena", "Andrea", "Andreva", "Ana", "Naig", "Anig", "Annwenn", "Aodrenel", "Aodrena", "Aodrenez", "Aourell", "Aourel", "Aouregan", "Aouregen", "Aouregon", "Oregan", "Aourken", "Ourken", "Ouragona", "Aourgen", "Argantael", "Argantel", "Telig", "Arzhela", "Arzhelez", "Arzela", "Arzhura", "Arzhula", "Arzhuren", "Arzhulen", "Avela", "Awena", "Azenor", "Aziliz", "Adelice", "Barban", "Barba", "Beniga", "Benigez", "Beuzega", "Bleiza", "Bleizen", "Bleuzen", "Bleuen", "Bleunven", "Bleunwen", "Bleunien", "Brendana", "Briaga", "Briagen", "Briagell", "Briagez", "Briega", "Briegen", "Briegez", "Charleza", "Deniela", "Denielez", "Denoela", "Dunvel", "Edernez", "Ederna", "Eflama", "Eflamez", "Elena", "Lena", "Lenaig", "Elwina", "Enora", "Enored", "Enorig", "Norig", "Enor", "Envela", "Eozenez", "Eozena", "Erel", "Erwana", "Erwanez", "Flamen", "Flamel", "Flamig", "Flamelig", "Fragana", "Fraganez", "Fraganen", "Frañseza", "Soaz", "Soazig", "Seza", "Fant", "Fantig", "Fañchen", "Gael", "Gaela", "Laig", "Gaud", "Gladez", "Dezig", "Goulwena", "Goulwenez", "Goulvena", "Goulvenez", "Gurvana", "Gurvanez", "Gwelaouen", "Gweltazen", "Gweltaza", "Jildazez", "Jildaza", "Gwenaela", "Gwen", "Gwena", "Gwenen", "Gwenez", "Gwenina", "Gweninen", "Nina", "Ninen", "Gwennyn", "Gwenola", "Heodez", "Hervea", "Herveva", "Herveven", "Houarneva", "Houarneven", "Hoela", "Hoelen", "Iael", "Iana", "Ianez", "Iouna", "Iuna", "Ivona", "Vona", "Kana", "Kaourantina", "Kaoura", "Tina", "Katell", "Kelig", "Klervi", "Kollina", "Koulm", "Koulmen", "Koulma", "Koulmez", "Kristen", "Lena", "Lenai", "Lizenn", "Loeiza", "Loeizaïg", "Loiza", "Loïza", "Zaig", "Liz", "Liza", "Loeva", "Lezou", "Madalen", "Madenn", "Maela", "Maelez", "Maëlane", "Maelen", "Maelwen", "Maële", "Maëlie", "Maiwenn", "Maiwen", "Mewen", "Maïwenn", "Maina", "Mai", "Margaid", "Gaid", "Magod", "Lid", "Mari", "Maria", "Mai", "Mariana", "Maina", "Mana", "Bigana", "Marianig", "Marivon", "Mona", "Mazheva", "Mazheven", "Mevena", "Mevenez", "Mikaela", "Mikela", "Modana", "Modanez", "Maodanez", "Maodana", "Morana", "Moranez", "Moranen", "Morgan", "Morgana", "Morganez", "Morganen", "Morvanen", "Morvana", "Morvanez", "Muriel", "Nevena", "Nevenez", "Venaig", "Nezig", "Ninoga", "Ninog", "Nenoga", "Nenega", "Noela", "Noelaïg", "Nouela", "Nolwen", "Nolwenn", "Noalig", "Non", "Nona", "Oanez", "Oanel", "Nezig", "Nelig", "Onen", "Paderna", "Padernez", "Padriga", "Padrigez", "Paola", "Pola", "Plezou", "Plezota", "Plezouta", "Predena", "Ronana", "Ronanez", "Ronanen", "Reunana", "Reunanez", "Reunanen", "Rozenn", "Ruvona", "Ruvonen", "Ruvonez", "Sklerijen", "Sklaeren", "Sklaera", "Sklaerder", "Soaz", "Frañseza", "Solen", "Solenn", "Solena", "Solenez", "Steren", "Sterenn", "Steredenn", "Tifen", "Tifenn", "Trifin", "Trefin", "Trifina", "Tristana", "Trestana", "Tuala", "Tualen", "Tudalen", "Tudalez", "Tumed", "Uriel", "Ouriel", "Euriel", "Vinvela", "Wembrit", "Gwenvred", "Bredig", "Yuna", "Youna",
    ];

    protected lastNames = [
        'Haridon', 'Argol', 'Bannal', 'Berrien', 'Bolaz', 'Botmer', 'Brennil', 'Castar', 'Cleden', 'Poher', 'Pohen', 'Concar', 'Daoul', 'Croz', 'Dourn', 'Garlan', 'Gouez', 'Gourliz', 'Guillig', 'Guilv', 'Guimil', 'Guipav', 'Hanven', 'Henvican', 'Huelgot', 'Irvil', 'Kerglof', 'Kerlaz', 'Kerlon', 'Kernil', 'Kernok', 'Lampaul', 'Larnav', 'Landed', 'Landel', 'Landern', 'Landeven', 'Landivis', 'Landrevar', 'Landud', 'Landun', 'Langol', 'Langol', 'Lanneder', 'Laneuf', 'Lannilim', 'Lanrivoar', 'Folgoet', 'Lennon', 'Lesnev', 'Leuhan', 'Breval', 'Eguin', 'Locmar', 'Locquir', 'Loctul', 'Logonnal', 'Lopern', 'Loquerf', 'Mathal', 'Miliz', 'Penc', 'Peumer', 'Plaban', 'Plaban', 'Plobannal', 'Plogast', 'Plogauf', 'Plomod', 'Plouarz', 'Ploven', 'Plonev', 'Plouarn', 'Ploudal', 'Ploudan', 'Ploudir', 'Plouen', 'Plouesc', 'Plougast', 'Plougon', 'Plougourn', 'Plouhin', 'Ploumog', 'Plounev', 'Porspord', 'Poulder', 'Pouldrez', 'Primel', 'Reden', 'Roscanv', 'Rospord', 'Coulitz', 'Fregant', 'Goazec', 'Trolimoc', 'Thregon', 'Scrignam', 'Sibirim', 'Trebab', 'Treffiag', 'Treflaoun', 'Trefleven', 'Treganrant', 'Tregarv', 'Treglon', 'Treguen', 'Tremaouz', 'Trezilid',
    ];

    protected citySuffix = [
        'bourg', '-les-Bains', '-sur-Mer', '-la-Forêt', 'nanec', 'nan', 'badec',
        'nec', 'agonec', 'gonec', 'mic', 'anic', 'opotec', 'atinec', 'bel', 'nit',
        'ivinec', 'ulec', 'ovec', 'ivec'
    ];

    protected domains = [
        'voila.fr', 'gmail.com', 'hotmail.fr', 'yahoo.fr', 'laposte.net', 'free.fr',
        'sfr.fr', 'orange.fr', 'bouygtel.fr', 'club-internet.fr', 'dbmail.com',
        'live.com', 'ifrance.com', 'noos.fr', 'tele2.fr', 'tiscali.fr', 'wanadoo.fr',
        'gmail.com', 'yahoo.com', 'hotmail.com', 'gmail.com', 'gmail.com', 'gmail.com'
    ];

    protected days = [
        // Sunday
        "Sul",
        // Monday
        "Lun",
        // Tuesday
        "Meurzh",
        // Wednesday
        "Merc'her",
        // Thursday
        "Yaou",
        // Friday
        "Gwener",
        // Saturday
        "Sadorn",
    ];

    protected months = [
        "Genver",
        "C'hwevrer",
        "Meurzh",
        "Ebrel",
        "Mae",
        "Mezheven",
        "Gouere",
        "Eost",
        "Gwengolo",
        "Here",
        "Du",
        "Kerdu",
    ];

    constructor() {
        super();
    }

    public zipcode(): string {
        // brittain zip can start by 29, 22, 56, 35
        const firstOnes = [29, 56, 22, 35];
        const first = Randomizer.randomize(firstOnes);
        const second = Randomizer.randNumber(10);
        const thirst = Randomizer.randNumber(10);
        const fourth = Randomizer.randNumber(10);
        const fifth = Randomizer.randNumber(10);
        return `${first}${second}${thirst}${fourth}${fifth}`;
    }

}