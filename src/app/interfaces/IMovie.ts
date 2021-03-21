  export interface GenreList {
      key: string;
      value: string;
  }

  export interface DirectorList {
      id: string;
      name: string;
  }

  export interface StarList {
      id: string;
      name: string;
  }

  export interface IMovie {
      id: string;
      title: string;
      fullTitle: string;
      year: string;
      releaseState: string;
      image: string;
      runtimeMins: string;
      runtimeStr: string;
      plot: string;
      contentRating: string;
      imDbRating: string;
      imDbRatingCount: string;
      metacriticRating: string;
      genres: string;
      genreList: GenreList[];
      directors: string;
      directorList: DirectorList[];
      stars: string;
      starList: StarList[];
  }



