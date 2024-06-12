interface Filme  {
    id: number,
    titulo: string | null,
    ano: number,
    duracaoEmMinutos: number,
    genero: string[],
    diretor: string | null,
    roteiristas: string[],
    atores: string[],
    poster: string | null,
    metascore: number,
    videoUrl: string | null,
    category: string | null
}


export const Filmes: Filme[] = [
	{
		"id": 1,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 2,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 3,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 4,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 5,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 6,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 7,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 8,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 9,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 10,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 11,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 12,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 13,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 14,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 15,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 16,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 17,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 18,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 19,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 20,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 21,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 22,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 23,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 24,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 25,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 26,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 27,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 28,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 29,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 30,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 31,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 32,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 33,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 34,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 35,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 36,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 37,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 38,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 39,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 40,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 41,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 42,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 43,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 44,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 45,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 46,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 47,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 48,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 49,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 50,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 51,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 52,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 53,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 54,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 55,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 56,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 57,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 58,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 59,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 60,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 61,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 62,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 63,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 64,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 65,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 66,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 67,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 68,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 69,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 70,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 71,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 72,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 73,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 74,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 75,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 76,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 77,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 78,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 79,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 80,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 81,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 82,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 83,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 84,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 85,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 86,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 87,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 88,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 89,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 90,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 91,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 92,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 93,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 94,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 95,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 96,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 97,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 98,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 99,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 100,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 101,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 102,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 103,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 104,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 105,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 106,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 107,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 108,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 109,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 110,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 111,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 112,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 113,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 114,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 115,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 116,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 117,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 118,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 119,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 120,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 121,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 122,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 123,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 124,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 125,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 126,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 127,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 128,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 129,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 130,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 131,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 132,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 133,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 134,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 135,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 136,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 137,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 138,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 139,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 140,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 141,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 142,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 143,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 144,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 145,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 146,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 147,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 148,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 149,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 150,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 151,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 152,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 153,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 154,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 155,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 156,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 157,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 158,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 159,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 160,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 161,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 162,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 163,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 164,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 165,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 166,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 167,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 168,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 169,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 170,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 171,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 172,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 173,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 174,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 175,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 176,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 177,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 178,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 179,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 180,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 181,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 182,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 183,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 184,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 185,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 186,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 187,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 188,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 189,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 190,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 191,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 192,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 193,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 194,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 195,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 196,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 197,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 198,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 199,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 200,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 201,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 202,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 203,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 204,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 205,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 206,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 207,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 208,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 209,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 210,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 211,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 212,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 213,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 214,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 215,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 216,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 217,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 218,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 219,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 220,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 221,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 222,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 223,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 224,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 225,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 226,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 227,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 228,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 229,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 230,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 231,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 232,
		"titulo": "Avatar",
		"ano": 2009,
		"duracaoEmMinutos": 162,
		"genero": [
			"Ação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "James Cameron",
		"roteiristas": [
			"James Cameron"
		],
		"atores": [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver",
			"Stephen Lang"
		],
		"poster": "https://xl.movieposterdb.com/09_08/2009/499549/xl_499549_cd69e2ea.jpg",
		"metascore": 83,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 233,
		"titulo": "Eu Sou a Lenda",
		"ano": 2007,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Horror",
			"Ficção Científica"
		],
		"diretor": "Francis Lawrence",
		"roteiristas": [
			"Mark Protosevich",
			"Akiva Goldsman",
			"Richard Matheson",
			"John William Corrington",
			"Joyce Hooper Corrington"
		],
		"atores": [
			"Will Smith",
			"Alice Braga",
			"Charlie Tahan",
			"Salli Richardson-Whitfield"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2007/480249/xl_480249_66680d6b.jpgs",
		"metascore": 65,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 234,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 235,
		"titulo": "O Lobo de Wall Street",
		"ano": 2013,
		"duracaoEmMinutos": 180,
		"genero": [
			"Biografia",
			"Crime",
			"Drama"
		],
		"diretor": "Martin Scorsese",
		"roteiristas": [
			"Terence Winter",
			"Jordan Belfort"
		],
		"atores": [
			"Leonardo DiCaprio",
			"Jonah Hill",
			"Margot Robbie",
			"Matthew McConaughey"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/993846/xl_993846_6b55e2ea.jpg",
		"metascore": 75,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 236,
		"titulo": "Interestelar",
		"ano": 2014,
		"duracaoEmMinutos": 169,
		"genero": [
			"Aventura",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Christopher Nolan",
		"roteiristas": [
			"Jonathan Nolan",
			"Christopher Nolan"
		],
		"atores": [
			"Ellen Burstyn",
			"Matthew McConaughey",
			"Mackenzie Foy",
			"John Lithgow"
		],
		"poster": "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
		"metascore": 74,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 237,
		"titulo": "À Procura da Felicidade",
		"ano": 2006,
		"duracaoEmMinutos": 117,
		"genero": [
			"Biografia",
			"Drama"
		],
		"diretor": "Gabriele Muccino",
		"roteiristas": [
			"Steve Conrad"
		],
		"atores": [
			"Will Smith",
			"Jaden Smith"
		],
		"poster": "https://xl.movieposterdb.com/07_12/2006/454921/xl_454921_9d11428d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 238,
		"titulo": "Antes do Amanhecer",
		"ano": 1995,
		"duracaoEmMinutos": 101,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Richard Linklater",
		"roteiristas": [
			"Richard Linklater",
			"Kim Krizan"
		],
		"atores": [
			"Ethan Hawke",
			"Julie Delpy"
		],
		"poster": "https://xl.movieposterdb.com/23_02/1995/112471/xl_before-sunrise-movie-poster_1fb3d59d.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 239,
		"titulo": "Questão de Tempo",
		"ano": 2013,
		"duracaoEmMinutos": 123,
		"genero": [
			"Comédia",
			"Drama",
			"Fantasia"
		],
		"diretor": "Richard Curtis",
		"roteiristas": [
			"Richard Curtis"
		],
		"atores": [
			"Domhnall Gleeson",
			"Rachel McAdams"
		],
		"poster": "https://xl.movieposterdb.com/13_06/2013/2194499/xl_2194499_c0435606.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 240,
		"titulo": "Orgulho e Preconceito",
		"ano": 2005,
		"duracaoEmMinutos": 129,
		"genero": [
			"Drama",
			"Romance"
		],
		"diretor": "Joe Wright",
		"roteiristas": [
			"Jane Austen",
			"Deborah Moggach"
		],
		"atores": [
			"Keira Knightley",
			"Matthew Macfadyen"
		],
		"poster": "https://m.media-amazon.com/images/S/pv-target-images/e5a295dcc5441e9a1fd5907e191578d510ed7f8be46c5e85a5dd51354bfd3cb6.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 241,
		"titulo": "Matrix",
		"ano": 1999,
		"duracaoEmMinutos": 136,
		"genero": [
			"Ação",
			"Ficção Científica"
		],
		"diretor": "Lana Wachowski, Lilly Wachowski",
		"roteiristas": [
			"Lana Wachowski",
			"Lilly Wachowski"
		],
		"atores": [
			"Keanu Reeves",
			"Laurence Fishburne"
		],
		"poster": "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 242,
		"titulo": "A Viagem de Chihiro",
		"ano": 2001,
		"duracaoEmMinutos": 125,
		"genero": [
			"Animação",
			"Aventura",
			"Fantasia"
		],
		"diretor": "Hayao Miyazaki",
		"roteiristas": [
			"Hayao Miyazaki"
		],
		"atores": [
			"Rumi Hiiragi",
			"Miyu Irino"
		],
		"poster": "https://xl.movieposterdb.com/14_05/2001/245429/xl_245429_233c79aa.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 243,
		"titulo": null,
		"ano": 0,
		"duracaoEmMinutos": 0,
		"genero": [],
		"diretor": null,
		"roteiristas": [],
		"atores": [],
		"poster": null,
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 244,
		"titulo": "Parasita",
		"ano": 2019,
		"duracaoEmMinutos": 132,
		"genero": [
			"Comédia",
			"Drama",
			"Thriller"
		],
		"diretor": "Bong Joon-ho",
		"roteiristas": [
			"Bong Joon-ho",
			"Han Jin-won"
		],
		"atores": [
			"Song Kang-ho",
			"Lee Sun-kyun"
		],
		"poster": "https://xl.movieposterdb.com/21_11/2019/6751668/xl_6751668_0d0409c5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 245,
		"titulo": "A Chegada",
		"ano": 2016,
		"duracaoEmMinutos": 116,
		"genero": [
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Eric Heisserer"
		],
		"atores": [
			"Amy Adams",
			"Jeremy Renner"
		],
		"poster": "https://xl.movieposterdb.com/22_10/2016/2543164/xl_arrival-movie-poster_a18b5408.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 246,
		"titulo": "Filhos da Esperança",
		"ano": 2006,
		"duracaoEmMinutos": 109,
		"genero": [
			"Ação",
			"Drama",
			"Ficção Científica"
		],
		"diretor": "Alfonso Cuarón",
		"roteiristas": [
			"Alfonso Cuarón",
			"Timothy J. Sexton"
		],
		"atores": [
			"Clive Owen",
			"Julianne Moore"
		],
		"poster": "https://xl.movieposterdb.com/13_03/2006/206634/xl_206634_af29190c.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 247,
		"titulo": "Blade Runner 2049",
		"ano": 2017,
		"duracaoEmMinutos": 164,
		"genero": [
			"Drama",
			"Mistério",
			"Ficção Científica"
		],
		"diretor": "Denis Villeneuve",
		"roteiristas": [
			"Hampton Fancher",
			"Michael Green"
		],
		"atores": [
			"Ryan Gosling",
			"Harrison Ford"
		],
		"poster": "https://xl.movieposterdb.com/23_02/2018/8151756/xl_blade-runner-2049-designing-the-world-of-blade-runner-2049-movie-poster_078b7954.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 248,
		"titulo": "Ela",
		"ano": 2013,
		"duracaoEmMinutos": 126,
		"genero": [
			"Drama",
			"Romance",
			"Ficção Científica"
		],
		"diretor": "Spike Jonze",
		"roteiristas": [
			"Spike Jonze"
		],
		"atores": [
			"Joaquin Phoenix",
			"Scarlett Johansson"
		],
		"poster": "https://xl.movieposterdb.com/13_11/2013/1798709/xl_1798709_48f9f547.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 249,
		"titulo": "Embriagados de Amor",
		"ano": 2002,
		"duracaoEmMinutos": 95,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Paul Thomas Anderson",
		"roteiristas": [
			"Paul Thomas Anderson"
		],
		"atores": [
			"Adam Sandler",
			"Emily Watson"
		],
		"poster": "https://xl.movieposterdb.com/22_01/2002/272338/xl_272338_bb20bcda.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 250,
		"titulo": "Borat",
		"ano": 2006,
		"duracaoEmMinutos": 84,
		"genero": [
			"Comédia"
		],
		"diretor": "Larry Charles",
		"roteiristas": [
			"Sacha Baron Cohen",
			"Anthony Hines",
			"Peter Baynham",
			"Dan Mazer"
		],
		"atores": [
			"Sacha Baron Cohen",
			"Ken Davitian",
			"Luenell"
		],
		"poster": "https://xl.movieposterdb.com/07_10/2006/443453/xl_443453_7ea199e5.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 251,
		"titulo": "50/50",
		"ano": 2011,
		"duracaoEmMinutos": 100,
		"genero": [
			"Comédia",
			"Drama",
			"Romance"
		],
		"diretor": "Jonathan Levine",
		"roteiristas": [
			"Will Reiser"
		],
		"atores": [
			"Joseph Gordon-Levitt",
			"Seth Rogen",
			"Anna Kendrick"
		],
		"poster": "https://xl.movieposterdb.com/21_02/2011/1306980/xl_1306980_1ac06c4e.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	},
	{
		"id": 252,
		"titulo": "Duelo de Titãs",
		"ano": 2000,
		"duracaoEmMinutos": 113,
		"genero": [
			"Biografia",
			"Drama",
			"Esportes"
		],
		"diretor": "Boaz Yakin",
		"roteiristas": [
			"Gregory Allen Howard"
		],
		"atores": [
			"Denzel Washington",
			"Will Patton",
			"Wood Harris"
		],
		"poster": "https://xl.movieposterdb.com/08_09/2000/210945/xl_210945_d59653b1.jpg",
		"metascore": 0,
		"videoUrl": null,
		"category": null
	}
]

export default Filme;